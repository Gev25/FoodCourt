import React, {useCallback, useState} from 'react';
import {addToBasketRequest} from "../store/actions/basket";
import {useDispatch} from "react-redux";
import {toast} from 'react-toastify';


function QuantityController(props) {
    const {price, productId, initialQuantity} = props;

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(initialQuantity || 1);
    const handleChangeQuantity = useCallback((num) => {
        if(num >= 1) setQuantity(num);
    }, []);

    const handleAddCard = useCallback(() => {
        toast.success('Product Successfully Added!')
        dispatch(addToBasketRequest(
            {
                productId: productId,
                quantity: quantity
            }));
    }, [quantity, productId]);


    return (
        <div className='container'>
            <div className='buy__block'>

                <button
                    className="filter-btn btn__add"
                    onClick={() => {
                        handleChangeQuantity(quantity - 1);
                    }}
                >
                    -
                </button>
                <input
                    type="number"
                    value={quantity}
                    className='buy__input'
                    onChange={(e) => {
                        handleChangeQuantity(e.target.value);
                    }}
                />
                <button
                    className="filter-btn btn__add"
                    onClick={() => {
                        handleChangeQuantity(quantity + 1);
                    }}
                >
                    +
                </button>
            </div>
            <h3 className='total__price'>Total Price <span> {`${+price * +quantity}AMD`} </span></h3>
            <button
                onClick={handleAddCard}
                className='filter-btn buy__btn'>
                Add to Cart
            </button>
        </div>

    );
}

export default QuantityController;