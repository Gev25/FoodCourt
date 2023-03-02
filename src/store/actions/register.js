import Api from "../../Api";

export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

export function registerUser(params){
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_REGISTER_REQUEST,
                payload: {status: 'request'},
            });

            const {data} = await Api.regUser(params);

            console.log(data);
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: {
                    status: 'success',
                },
            });
        } catch (e) {
            // console.log(e)
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: {status: 'fail', data: e.response.data},
            });
        }
    }
}
