import Api from "../../Api";

export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAIL = "GET_PRODUCTS_FAIL";

export function getProductsByCatIdRequest(slug){
    return async (dispatch) => {
        try {
            dispatch({
                type: GET_PRODUCTS_REQUEST,
                payload: {status: 'request'},
            });

            const {data} = await Api.getProductByCategory(slug);
            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: {
                    status: 'success',
                    products: data.data.products,
                },
            });
        } catch (e) {
            dispatch({
                type: GET_PRODUCTS_FAIL,
                payload: {status: 'fail'},
            });
        }
    }
}

