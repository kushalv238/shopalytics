import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Card from './components/Card';
import TableRow from './components/TableRow';
import Chart from './components/Chart';

import './stylesheet/style.css';

import { getData } from './getInfo/getProducts';
import loading from './resources/loading.gif'
import shoppingGirl from './resources/shoppingGirl.png'

import { useState, useEffect } from 'react';


function App() {
	function compareVisits(a, b) {
        if (a.visits > b.visits) {
            return 1;
        }
        else if (a.visits < b.visits) {
            return -1;
        }
        return 0;
    }

	
	const [data, setData] = useState([])
	const [totalVisits, setTotalVisits] = useState(0)
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
		if (data?.length) {
			if(totalVisits === 0)
				data.sort(compareVisits).reverse().slice(0, 6).map((prod, key)=>setTotalVisits(prev=>(prev+prod.visits)))
			setIsLoading(false)
		}
	}, [data]);


	if (isLoading) {
		return (
			<div className='error-wrapper'>
				<img src={loading} alt="Loading.." />
			</div>
		)
	}

	return (
		<div className="App">
			<Sidebar />
			<div className='main-content'>
				<Header setSearch={setSearch} search={search} />
				<main>
					<h2 className='dash-title'>Overview</h2>
					<h3 className='dash-title'>Total unique views</h3>
					<div className='half-half'>
						<div className='dash-cards'>
							{
								data.sort(compareVisits).reverse().slice(0, 3).map((prod, key) => (
									<Card
										key={key}
										title={prod.title}
										visits={prod.visits}
									/>
								))
							}
						</div>
						<div className='chart'>
							<Chart 
								prod = {data.sort(compareVisits).reverse().slice(0, 6).map((prod, key)=>(prod.visits))}
								title = {data.sort(compareVisits).reverse().slice(0, 6).map((prod, key)=>(prod.title))}
								totalVisits = {totalVisits}

							/>
						</div>
					</div>

					<section className="recent">
						<div className="activity-grid">
							<div className="activity-card">
								<h3>Recent activity</h3>
								<table>
									<thead>
										<tr>
											<th>Product Image</th>
											<th>Product ID</th>
											<th>Product Name</th>
											<th>Unique views</th>
											<th>Status</th>
										</tr>
									</thead>
									<tbody>
										{
											data.slice(3).filter(prod => prod.title.toLowerCase().includes(search.toLowerCase())).map((product, key) => (
												<TableRow
													key={key}
													_id = {product._id}
													title = {product.title}
													image = {product.image}
													visits = {product.visits}
												/>
											))
										}
									</tbody>
								</table>
							</div>
							<div className=" summery flex">
								<img src={shoppingGirl} alt="" />
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}

export default App;
