import {GET_PAYMENT_TYPES_REQUEST, GET_PAYMENT_TYPES_SUCCESS,GET_PAYMENT_TYPES_FAIL} from "../actions/paymentTypes";

const initialState = {
    status: "",
    paymentTypes:[]
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case GET_PAYMENT_TYPES_REQUEST:{
            return {
                ...state,
                status: action.payload.status
            }
        }
        case GET_PAYMENT_TYPES_SUCCESS:{
            return {
                ...state,
                status: action.payload.status,
                paymentTypes:action.payload.paymentTypes

            }
        }
        case GET_PAYMENT_TYPES_FAIL:{
            return {
                ...state,
                status: action.payload.status,

            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
