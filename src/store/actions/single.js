import Api from "../../Api";

export const GET_PRODUCT_SINGLE_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SINGLE_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_SINGLE_FAIL = "GET_PRODUCT_FAIL";

export function getSingleProduct(slug) {
    return async (dispatch) => {
        try {
            dispatch({
                type: GET_PRODUCT_SINGLE_REQUEST,
                payload: {status: 'request'},
            });

            const {data} = await Api.getSingleProduct(slug);
            dispatch({
                type: GET_PRODUCT_SINGLE_SUCCESS,
                payload: {
                    status: 'success',
                    product: data.product,
                },
            });
        } catch (e) {
            dispatch({
                type: GET_PRODUCT_SINGLE_FAIL,
                payload: {status: 'fail'},
            });
        }
    }
}


export const USER_TOKEN_DELETE = 'USER_TOKEN_DELETE';

export function deleteToken() {
    return {
        type: USER_TOKEN_DELETE,
        payload: {},
    };
}