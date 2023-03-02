import {GET_OFFERS_REQUEST, GET_OFFERS_SUCCESS, GET_OFFERS_FAIL} from "../actions/offers";

const initialState = {
    status: "",
    offers: [],
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case GET_OFFERS_REQUEST:{
            return {
                ...state,
                status: action.payload.status
            }
        }
        case GET_OFFERS_SUCCESS:{
            return {
                ...state,
                status: action.payload.status,
                offers: action.payload.offers
            }
        }
        case GET_OFFERS_FAIL:{
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
