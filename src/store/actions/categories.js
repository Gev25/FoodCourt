import Api from "../../Api";

export const GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_FAIL = "GET_CATEGORIES_FAIL";

export function getCategoriesRequest(){
    return async (dispatch) => {
        try {
            dispatch({
                type: GET_CATEGORIES_REQUEST,
                payload: {status: 'request'},
            });

            const {data} = await Api.getAllCategories();
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: {
                    status: 'success',
                    categories: data.categories,
                },
            });
        } catch (e) {
            dispatch({
                type: GET_CATEGORIES_FAIL,
                payload: {status: 'fail'},
            });
        }
    }
}
