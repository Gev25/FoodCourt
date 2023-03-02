import {GET_PRODUCT_SINGLE_FAIL, GET_PRODUCT_SINGLE_REQUEST, GET_PRODUCT_SINGLE_SUCCESS,
} from "../actions/single";

const initialState = {
    status: "",
    singleProduct: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_SINGLE_REQUEST: {
            return {
                ...state,
                status: action.payload.status
            }
        }
        case GET_PRODUCT_SINGLE_SUCCESS: {
            return {
                ...state,
                status: action.payload.status,
                singleProduct: action.payload.product,
            }
        }

        case GET_PRODUCT_SINGLE_FAIL: {
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
