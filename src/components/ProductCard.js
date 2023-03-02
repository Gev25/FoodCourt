import React from 'react';
import {Link} from "react-router-dom";


import QuantityController from '../components/QuantityController'

function ProductCard(props) {

    const {product} = props;


    return (
        <section className='shop__product' key={product.id}>
            <Link to={`/product/${product.slugName}`}>
                <div className="single__product">
                    <div className="category__img">
                        <img src={`http://localhost:4000/${product.imagePath}`} alt="" className='prod__img'/>
                    </div>
                    <div className="product__content">
                        <h6>{product.title}</h6>
                        <h4 className='price'>{product.price + 'AMD'}</h4>
                    </div>
                </div>
            </Link>
            <QuantityController
                price={product.price}
                productId={product.id}
            />
        </section>
    );
}

export default ProductCard;