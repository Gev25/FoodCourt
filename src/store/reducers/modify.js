import {
    USER_MODIFY_REQUEST,
    USER_MODIFY_SUCCESS,
    USER_MODIFY_FAIL,
} from "../actions/modify";

const initialState = {
    status: "",
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case USER_MODIFY_REQUEST:{
            return {
                ...state,
                status: action.payload.status
            }
        }
        case USER_MODIFY_SUCCESS:{
            return {
                ...state,
                status: action.payload.status
            }
        }
        case USER_MODIFY_FAIL:{
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
