import {
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL,
} from "../actions/user";

const initialState = {
    status: "",
    user: {},
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case USER_PROFILE_REQUEST:{
            return {
                ...state,
                status: action.payload.status
            }
        }
        case USER_PROFILE_SUCCESS:{
            const data = action.payload
            console.log(data);
            return {
                ...state,
                status: action.payload.status,
                user: action.payload.user,
            }
        }
        case USER_PROFILE_FAIL:{
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
