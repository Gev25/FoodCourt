import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {useDispatch, useSelector} from "react-redux";
import {getProductsByCatIdRequest} from "../store/actions/products";
import ProductCard from "../components/ProductCard";
import _ from 'lodash';
import Loader from "../components/Loader";
import Footer from "../components/Footer";

function Shop() {
    const {slug} = useParams();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            if (slug) {
                dispatch(getProductsByCatIdRequest(slug));
            }
            setLoading(false)
        },1000)

    }, [slug]);
    return (
        <div className='shop__container'>
            {loading ? <Loader/> : null}
            <Header/>
            <SideBar/>
            <div className='shop__section'>

                {!_.isEmpty(products) ? (
                    products.map(product => (
                            <ProductCard product={product} key={product.id}/>
                    ))
                ) : null
                }
            </div>
            <Footer/>
        </div>

    );
}

export default Shop;
