import React from 'react';
import {Link} from "react-router-dom";

function SideBar() {
    return (
        <section className='main__section'>
            <div className='main__container'>
                <main className='main'>
                    <div className='left__menu'>
                        <h4>Dishes</h4>
                        <ul>
                            <li>
                                <Link to={'/shop/food-court-product'}>Food-Court Product</Link>
                            </li>
                            <li>
                                <Link to={'/shop/grilled'}>Grilled</Link>
                            </li>
                            <li>
                                <Link to={`/shop/hot-dishes`}>Hot dishes</Link>
                            </li>
                            <li>
                                <Link to={`/shop/pizza`}>Pizza</Link>
                            </li>
                            <li>
                                <Link to={`/shop/complex-lunch`}>Complex lunch</Link>
                            </li>
                            <li>
                                <Link to={`/shop/finish`}>Finish</Link>
                            </li>
                            <li>
                                <Link to={`/shop/salads`}>Salads</Link>
                            </li>
                            <li>
                                <Link to={`/shop/soups`}>Soups</Link>
                            </li>
                            <li>
                                <Link to={`/shop/khachapuri-pie`}>Khachapuri, pie</Link>
                            </li>
                            <li>
                                <Link to={`/shop/vegetables`}>Vegetables</Link>
                            </li>
                            <li>
                                <Link to={`/shop/fast-food`}>Fast food</Link>
                            </li>
                            <li>
                                <Link to={`/shop/vegetarians`}>Vegetarians</Link>
                            </li>
                            <li>
                                <Link to={`/shop/appetizers`}>Appetizers</Link>
                            </li>
                            <li>
                                <Link to={`/shop/baby-food`}>Baby food</Link>
                            </li>
                            <li>
                                <Link to={`/shop/sauces`}>Sauces</Link>
                            </li>
                            <li>
                                <Link to={`/shop/desert`}>Desert</Link>
                            </li>
                            <li>
                                <Link to={`/shop/alcoholic-drink`}>Alcoholic drink</Link>
                            </li>
                            <li>
                                <Link to={`/shop/refreshing-drinks`}>Refreshing drinks</Link>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
        </section>
    );
}

export default SideBar;