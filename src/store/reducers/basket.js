import {
    GET_BASKET_REQUEST,
    GET_BASKET_SUCCESS,
    GET_BASKET_FAIL,
    ADD_TO_BASKET_REQUEST,
    ADD_TO_BASKET_SUCCESS,
    ADD_TO_BASKET_FAIL,
    REMOVE_BASKET_REQUEST,
    REMOVE_BASKET_SUCCESS,
    REMOVE_BASKET_FAIL
} from "../actions/basket";

const initialState = {
    status: "",
    basket: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_BASKET_REQUEST: {
            return {
                ...state,
                status: action.payload.status
            }
        }
        case GET_BASKET_SUCCESS: {
            return {
                ...state,
                status: action.payload.status,
                basket: action.payload.basket
            }
        }
        case GET_BASKET_FAIL: {
            return {
                ...state,
                status: action.payload.status
            }
        }
        case ADD_TO_BASKET_REQUEST: {
            return {
                ...state,
                status: action.payload.status
            }
        }
        case ADD_TO_BASKET_SUCCESS: {
            return {
                ...state,
                status: action.payload.status,
            }
        }
        case ADD_TO_BASKET_FAIL: {
            return {
                ...state,
                status: action.payload.status
            }
        }
        case REMOVE_BASKET_REQUEST: {
            return {
                ...state,
                status: action.payload.status
            }
        }
        case REMOVE_BASKET_SUCCESS: {
            return {
                ...state,
                status: action.payload.status,
                basket: state.basket.filter(item => +item.id !== +action.payload.removedItemId)
            }
        }
        case REMOVE_BASKET_FAIL: {
            return {
                ...state,
                status: action.payload.status
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}