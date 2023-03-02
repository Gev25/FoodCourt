import Api from "../../Api";

export const USER_CHANGE_REQUEST = "USER_CHANGE_REQUEST";
export const USER_CHANGE_SUCCESS = "USER_CHANGE_SUCCESS";
export const USER_CHANGE_FAIL = "USER_CHANGE_FAIL";

export function UserChangeRequest(params){
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_CHANGE_REQUEST,
                payload: {status: 'request'},
            });

            await Api.changePass(params);

            dispatch({
                type: USER_CHANGE_SUCCESS,
                payload: {
                    status: 'success',
                },
            });
        } catch (e) {
            dispatch({
                type: USER_CHANGE_FAIL,
                payload: {status: 'fail'},
            });
        }
    }
}
