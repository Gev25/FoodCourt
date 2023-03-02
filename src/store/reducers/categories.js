import {GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL} from "../actions/categories";

const initialState = {
    status: "",
    categories: [],
};

export default function reducer(state = initialState, action){
   switch (action.type){
       case GET_CATEGORIES_REQUEST:{
           return {
               ...state,
               status: action.payload.status
           }
       }
       case GET_CATEGORIES_SUCCESS:{
           return {
               ...state,
               status: action.payload.status,
               categories: action.payload.categories
           }
       }
       case GET_CATEGORIES_FAIL:{
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
