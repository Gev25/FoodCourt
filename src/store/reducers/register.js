import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
} from "../actions/register";

const initialState = {
    status: "",
    user: [],
    registerErrors:{}
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case USER_REGISTER_REQUEST:{
            return {
                ...state,
                status: action.payload.status
            }
        }
        case USER_REGISTER_SUCCESS:{
            return {
                ...state,
                status: action.payload.status
            }
        }
        case USER_REGISTER_FAIL:{
            console.log(action.payload.data)
            return {
                ...state,
                registerErrors: action.payload.data,
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
