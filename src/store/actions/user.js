import Api from "../../Api";

export const USER_PROFILE_REQUEST = "USER_PROFILE_REQUEST";
export const USER_PROFILE_SUCCESS = "USER_PROFILE_SUCCESS";
export const USER_PROFILE_FAIL = "USER_PROFILE_FAIL";
export function getUserProfileRequest() {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_PROFILE_REQUEST,
                payload: {status: 'request'},
            });

            const {data} = await Api.getUserProfile();
            dispatch({
                type: USER_PROFILE_SUCCESS,
                payload: {
                    status: 'success',
                    user: data.user
                },
            });
            } catch (e) {
                dispatch({
                    type: USER_PROFILE_FAIL,
                    payload: {status: 'fail'},
                });
            }}
    }
