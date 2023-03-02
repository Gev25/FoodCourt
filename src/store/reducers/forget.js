import {
    USER_FORGET_REQUEST,
    USER_FORGET_SUCCESS,
    USER_FORGET_FAIL,
} from "../actions/forget";

const initialState = {
    status: "",
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case USER_FORGET_REQUEST:{
            return {
                ...state,
                status: action.payload.status
            }
        }
        case USER_FORGET_SUCCESS:{
            return {
                ...state,
                status: action.payload.status
            }
        }
        case USER_FORGET_FAIL:{
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
