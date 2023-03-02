import {GET_SLIDES_REQUEST, GET_SLIDES_SUCCESS, GET_SLIDES_FAIL} from "../actions/slider";

const initialState = {
    status: "",
    slides: [],
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case GET_SLIDES_REQUEST:{
            return {
                ...state,
                status: action.payload.status
            }
        }
        case GET_SLIDES_SUCCESS:{
            return {
                ...state,
                status: action.payload.status,
                slides: action.payload.slides
            }
        }
        case GET_SLIDES_FAIL:{
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
