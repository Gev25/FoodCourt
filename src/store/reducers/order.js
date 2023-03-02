import {
    ADD_ORDER_REQUEST,
    ADD_ORDER_SUCCESS,
    ADD_ORDER_FAIL,
    GET_ACTUAL_ORDER_REQUEST,
    GET_ACTUAL_ORDER_SUCCESS,
    GET_ACTUAL_ORDER_FAIL
} from "../actions/order";

const initialState = {
    status: "",
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case ADD_ORDER_REQUEST:{
            return {
                ...state,
                status: action.payload.status
            }
        }
        case ADD_ORDER_SUCCESS:{
            return {
                ...state,
                status: action.payload.status
            }
        }
        case ADD_ORDER_FAIL:{
            return {
                ...state,
                status: action.payload.status
            }
        }
        case GET_ACTUAL_ORDER_REQUEST:{
            return {
                ...state,
                status: action.payload.status
            }
        }
        case GET_ACTUAL_ORDER_SUCCESS:{
            return {
                ...state,
                status: action.payload.status
            }
        }
        case GET_ACTUAL_ORDER_FAIL:{
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
