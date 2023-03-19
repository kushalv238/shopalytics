import React from 'react'

const TrendingProd = (props) => {
    return (
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
            <div className="brand_box">
                <img src={props.img} alt="img" />
                <h3>₹<strong className="red">{props.price}</strong></h3>
                <span>{props.name}</span>
                <i><img src={props.starImg} alt='star'/></i>
                <i><img src={props.starImg} alt='star'/></i>
                <i><img src={props.starImg} alt='star'/></i>
                <i><img src={props.starImg} alt='star'/></i>
            </div>
        </div>
    )
}

export default TrendingProd