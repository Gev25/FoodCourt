import Api from "../../Api";

export const USER_FORGET_REQUEST = "USER_FORGET_REQUEST";
export const USER_FORGET_SUCCESS = "USER_FORGET_SUCCESS";
export const USER_FORGET_FAIL = "USER_FORGET_FAIL";

export function UserForgetRequest(email){
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_FORGET_REQUEST,
                payload: {status: 'request'},
            });

            await Api.getKey(email);

            dispatch({
                type: USER_FORGET_SUCCESS,
                payload: {
                    status: 'success',
                },
            });
        } catch (e) {
            dispatch({
                type: USER_FORGET_FAIL,
                payload: {status: 'fail'},
            });
        }
    }
}
