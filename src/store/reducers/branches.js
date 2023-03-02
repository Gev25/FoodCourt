import {GET_BRANCHES_REQUEST,GET_BRANCHES_SUCCESS,GET_BRANCHES_FAIL} from "../actions/branches";

const initialState = {
    status: "",
    branches: [],
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case GET_BRANCHES_REQUEST:{
            return {
                ...state,
                status: action.payload.status,
            }
        }
        case GET_BRANCHES_SUCCESS:{
            return {
                ...state,
                status: action.payload.status,
                branches: action.payload.branches
            }
        }
        case GET_BRANCHES_FAIL:{
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
