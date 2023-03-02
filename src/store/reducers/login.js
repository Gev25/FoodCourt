import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
} from "../actions/login";
import storage from "../../helpers/storage";
import {USER_TOKEN_DELETE} from "../actions/single";

const initialState = {
    status: "",
    user: [],
    token: storage.getToken(),
    error: {}
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case USER_LOGIN_REQUEST:{
            return {
                ...state,
                status: action.payload.status
            }
        }
        case USER_LOGIN_SUCCESS:{
            const {data} = action.payload
            storage.setToken(data.token);
            return {
                ...state,
                token: data.token,
                status: action.payload.status
            }
        }
        case USER_LOGIN_FAIL:{
            return {
                ...state,
                status: action.payload.status,
                error: action.payload.error,
            }
        }

        case USER_TOKEN_DELETE:{
            storage.delete()
            return {
                ...state,
                token: '',
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
