import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Header from "../components/Header";
import Account from "../helpers/storage";
import Footer from "../components/Footer";


import {useDispatch, useSelector} from "react-redux";
import {getBasketRequest, removeFromBasketRequest} from "../store/actions/basket";
import _ from 'lodash';
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import Form from 'react-bootstrap/Form';
import {getBranchesRequest} from "../store/actions/branches";
import {addOrderRequest} from "../store/actions/order";
import {paymentTypes} from "../store/actions/paymentTypes";


function Basket() {
    const dispatch = useDispatch();
    const basket = useSelector(state => state.basket.basket);
    const navigate = useNavigate();
    const branches = useSelector(state => state.branches.branches);
    const paymentTypesList = useSelector(state => state.paymentTypes.paymentTypes);
    const [values, setValues] = useState({
        branchId: 0,
        paymentType: '',
        note: '',
        address: ''
    });

    useEffect(() => {
        if (!Account.getToken()) {
            navigate('/login');
            toast.error('Please log in or register')
            return;
        }

        dispatch(getBasketRequest());
        dispatch(getBranchesRequest());
        dispatch(paymentTypes());
    }, []);

    const handleChangeValues = useCallback((key, value) => {
        setValues({
            ...values,
            [key]: value,
        })
    }, [values]);

    const handleRemove = useCallback((id) => {
        dispatch(removeFromBasketRequest(id));
    }, []);

    const totalPrice = useMemo(() => {
        let price = 0;

        if (!_.isEmpty(basket)) {
            basket.forEach(item => {
                price = price + +item.quantity * +item.product.price
            });
        }

        return price;
    }, [basket]);

    const handleSubmit = useCallback(() => {
        if (!values.note || !values.address) {
            toast.error("Don't filled all fields");
            return;
        }

        if (_.isEmpty(basket)) {
            toast.error("Don't have any products in the basket!");
            return;
        }

        const productsList = basket.map(tempProduct => {
            return {
                productId: tempProduct.product.id,
                quantity: tempProduct.quantity,
            }
        });

        dispatch(addOrderRequest({
            productsList,
            address: values.address,
            note: values.note,
            receiveType: 'cashOnDelivery',
            branchId: branches[0].id,
        }))

        navigate('/');
    }, [basket, values, branches])

    return (
        <div>
            <Header/>
            <section id='cart-container' className='container'>
                <table className='table'>
                    <thead className='thead'>
                    <tr className='tr'>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Count</td>
                        <td>Total</td>
                    </tr>
                    </thead>

                    {
                        !_.isEmpty(basket) ? (
                            basket.map(item => (
                                <tbody key={item.id}>
                                <tr>
                                    <td>
                                        <button
                                            onClick={() => {
                                                handleRemove(item.id)
                                            }}>
                                            <i className="ri-delete-bin-fill"></i>
                                        </button>
                                    </td>
                                    <td>
                                        <img src={`http://localhost:4000/${item.product.imagePath}`} alt="product"
                                             className='basket__img'/>
                                    </td>
                                    <td><h1>{item.product.title}</h1></td>
                                    <td><h3>{item.product.price} AMD</h3></td>
                                    <td>
                                        <input type="number" className='basket-count' value={item.quantity}/>
                                    </td>
                                    <td><h3>{`${+item.product.price * +item.quantity}AMD`}</h3></td>
                                </tr>
                                </tbody>


                            ))
                        ) : null
                    }


                </table>
            </section>
            <section id='cart-bottom' className='container'>
                <div className="row">
                    <div className="total col-md-6">
                        <div>
                            <h2>Cart Total</h2>
                            <hr className='second-hr'/>
                            <div className='d-flex justify-content-between'>
                                <h4>Total</h4>
                                <h3>{`${totalPrice}`}</h3>
                            </div>


                            <form onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}>
                                {/*<div>*/}
                                {/*    <Form.Select*/}
                                {/*        size="lg"*/}
                                {/*        onChange={(e) => {*/}
                                {/*            console.log(e)}*/}
                                {/*        }*/}
                                {/*    >*/}
                                {/*        {*/}
                                {/*            !_.isEmpty(branches) ? (*/}
                                {/*                branches.map(branch => (*/}
                                {/*                    <option*/}
                                {/*                        key={branch.id}value={branch.id}*/}
                                {/*                        onClick={() => {*/}
                                {/*                            handleChangeValues('branchId', branch.id)*/}
                                {/*                        }}*/}
                                {/*                    >*/}
                                {/*                        {branch.title}*/}
                                {/*                    </option>*/}
                                {/*                ))*/}
                                {/*            ) : null*/}
                                {/*        }*/}
                                {/*    </Form.Select>*/}
                                {/*</div>*/}
                                {/*<hr/>*/}
                                {/*<div className='payment-title'>*/}
                                {/*    <h3>Payment Method</h3>*/}
                                {/*    {*/}
                                {/*        !_.isEmpty(paymentTypesList) ? (*/}
                                {/*            <Form.Select*/}
                                {/*                size="lg"*/}
                                {/*            >*/}
                                {/*                {*/}
                                {/*                    paymentTypesList.map(type => (*/}
                                {/*                        <option*/}
                                {/*                            key={type.type}*/}
                                {/*                            value={type.type}*/}
                                {/*                            onClick={() => {*/}
                                {/*                                console.log('asd')*/}
                                {/*                                handleChangeValues('type', type.type)*/}
                                {/*                            }}*/}
                                {/*                        >*/}
                                {/*                            {type.typeName}*/}
                                {/*                        </option>*/}
                                {/*                    ))*/}
                                {/*                }*/}
                                {/*            </Form.Select>*/}
                                {/*        ) : null*/}
                                {/*    }*/}
                                {/*</div>*/}

                                <input
                                    className='addres'
                                    type="text"
                                    onChange={(e) => handleChangeValues('address', e.target.value)}
                                    placeholder='Delivery address'
                                    value={values.address}
                                />
                                <textarea
                                    className='ui-textarea'
                                    placeholder='For notes'
                                    value={values.note}
                                    onChange={(e) => handleChangeValues('note', e.target.value)}
                                />
                            </form>


                            <button
                                className='ml-auto'
                                onClick={handleSubmit}
                            >
                                PROCEED TO CHECKOUT
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Basket;
