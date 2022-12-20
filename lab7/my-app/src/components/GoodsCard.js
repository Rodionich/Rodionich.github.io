import React from "react"

function GoodsCard(props) {
    return (
        <div key={props.id} className='productCard'>
            <img src={props.image} alt='product-img' className='productImage'></img>
            <div className='productCard__content'>
                <h3 className='productName'>{props.name}</h3>
                <div className='productPrice'>${props.price}</div>
            </div>
        </div>

    );
};

export default GoodsCard