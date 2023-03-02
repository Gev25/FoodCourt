import {GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS,} from "../actions/products";

const initialState = {
    status: "",
    products: [],
    pages: ''
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case GET_PRODUCTS_REQUEST:{
            return {
                ...state,
                status: action.payload.status
            }
        }
        case GET_PRODUCTS_SUCCESS:{
            return {
                ...state,
                status: action.payload.status,
                products: action.payload.products
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
