import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Prod from './Prod';

import { sendHttpRequest, getData } from './../../getInfo/getProducts'

import '../../stylesheets/products.css'

import { loading } from './../../resources/images'

const Products = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchdata() {
            const newData = await getData();
            setData(newData);
        }

        fetchdata();
    }, []);

    useEffect(() => {
        if(data?.length) {
            setIsLoading(false)
        }
    }, [data]);


    if (isLoading) {
        return(
            <div className='error-wrapper'>
                <img src = { loading } alt="Loading.." />
            </div>
        )
    }

    const visitedOnce = async (params) => {
        await sendHttpRequest('PATCH', 'http://localhost:3300/products', params).then(responseData => console.log(responseData));
    };

    return (
        <div className='grid-center'>
            <div className="search-wrapper">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder='Search for products...'
                        value={search}
                        onChange={ (e) => {setSearch(e.target.value)} }
                    />
                    <div className="search-icon">
                        <FontAwesomeIcon
                            icon={faSearch}
                            id='search'
                            title='search'
                        />
                    </div>
                </div>
            </div>

            <div className="products-wrapper">
            {
                data.filter(prod => prod.title.toLowerCase().includes(search.toLowerCase())).map((product, key) => (
                    <Prod
                        key={key}
                        id={product._id}
                        title={product.title}
                        img={product.image}
                        visits={product.visits}
                        price={product.cost}
                        description={product.description}
                        visitedOnce = {params => visitedOnce(params)}
                    />
                ))
            }
            </div>
        </div>
    )
}

export default Products
