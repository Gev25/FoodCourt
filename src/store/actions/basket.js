import Api from "../../Api";

export const GET_BASKET_REQUEST = "GET_BASKET_REQUEST";
export const GET_BASKET_SUCCESS = "GET_BASKET_SUCCESS";
export const GET_BASKET_FAIL = "GET_BASKET_FAIL";

export function getBasketRequest(){
    return async (dispatch) => {
        try {
            dispatch({
                type: GET_BASKET_REQUEST,
                payload: {status: 'request'},
            });

            const {data} = await Api.getBasket();
            dispatch({
                type: GET_BASKET_SUCCESS,
                payload: {
                    status: 'success',
                    basket: data.basket,
                },
            });
        } catch (e) {
            dispatch({
                type: GET_BASKET_FAIL,
                payload: {status: 'fail'},
            });
        }
    }
}

export const ADD_TO_BASKET_REQUEST = "ADD_TO_BASKET_REQUEST";
export const ADD_TO_BASKET_SUCCESS = "ADD_TO_BASKET_SUCCESS";
export const ADD_TO_BASKET_FAIL = "ADD_TO_BASKET_FAIL";

export function addToBasketRequest({productId, quantity}){
    return async (dispatch) => {
        try {
            dispatch({
                type: ADD_TO_BASKET_REQUEST,
                payload: {status: 'request'},
            });

            await Api.addToBasket(productId, quantity);
            dispatch({
                type: ADD_TO_BASKET_SUCCESS,
                payload: {
                    status: 'success',
                },
            });
        } catch (e) {
            dispatch({
                type: ADD_TO_BASKET_FAIL,
                payload: {status: 'fail'},
            });
        }
    }
}


export const REMOVE_BASKET_REQUEST = "REMOVE_BASKET_REQUEST";
export const REMOVE_BASKET_SUCCESS = "REMOVE_BASKET_SUCCESS";
export const REMOVE_BASKET_FAIL = "REMOVE_BASKET_FAIL";

export function removeFromBasketRequest(id){
    return async (dispatch) => {
        try {
            dispatch({
                type: REMOVE_BASKET_REQUEST,
                payload: {status: 'request'},
            });

            const {data} = await Api.removeFromBasket(id);
            console.log(data);
            dispatch({
                type: REMOVE_BASKET_SUCCESS,
                payload: {
                    status: 'success',
                    removedItemId: data.removedItemId
                },
            });
        } catch (e) {
            dispatch({
                type: REMOVE_BASKET_FAIL,
                payload: {status: 'fail'},
            });
        }
    }
}
