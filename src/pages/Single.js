import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getSingleProduct} from "../store/actions/single";
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import {addToBasketRequest} from "../store/actions/basket";
import Loader from "../components/Loader";
import QuantityController from "../components/QuantityController";


function Single(props) {
    const {product} = props;

    const params = useParams();
    const dispatch = useDispatch();
    const singleProduct = useSelector(state => state.single.singleProduct);
    const [productQuantity, setProductQuantity] = useState(1);
    const [loading, setLoading] = useState(false)



    const handleAddCard = useCallback(() => {
        dispatch(addToBasketRequest(
            {
                productId: product.id,
                quantity: productQuantity
            }));
    }, [productQuantity, product]);

    const handleChangeQuantity = useCallback((num) => {
        if (num >= 1) setProductQuantity(num);
    }, []);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            if (params.slugName) {
                dispatch(getSingleProduct(params.slugName));
            }
            setLoading(false)
        }, 1000)
    }, [params.slugName]);

    return (
        <>
            {loading ? <Loader/> : null};
            <Header/>
            <SideBar/>
            <div className="single-container">
                <div className='img__container'>
                    <img src={`http://localhost:4000/${singleProduct.imagePath}`} alt='single-product'/>
                    <div className='product__title'>
                        <h1>{singleProduct.title}</h1>
                        <div className="product__desc">
                            <h2>{singleProduct.description}<br/></h2>
                        </div>
                        {/*<div className='line'></div>*/}
                        <div className="product__price prices">
                            {/*<div className='line'></div>*/}
                            <h3>{singleProduct.price} AMD</h3>
                        </div>
                        {/*<div className='line'></div>*/}
                    </div>
                </div>
            </div>
            <div className="quantity__controller">
                <QuantityController
                    price={singleProduct.price}
                    productId={singleProduct.id}
                />
            </div>
        </>

    );
}

export default Single;
