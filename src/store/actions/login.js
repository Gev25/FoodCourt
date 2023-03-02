import Api from "../../Api";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";

export function login(params){
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_LOGIN_REQUEST,
                payload: {status: 'request'},
            });

            const {data} = await Api.signIn(params);
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: {
                    status: 'success',
                    data,
                },
            });
        } catch (e) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: {
                    status: 'fail',
                    error: e.response.data
                },
            });
        }
    }
}
