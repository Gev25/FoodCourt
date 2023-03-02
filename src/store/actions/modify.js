import Api from "../../Api";

export const USER_MODIFY_REQUEST = "USER_MODIFY_REQUEST";
export const USER_MODIFY_SUCCESS = "USER_MODIFY_SUCCESS";
export const USER_MODIFY_FAIL = "USER_MODIFY_FAIL";

export function UserModifyRequest({...params}) {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_MODIFY_REQUEST,
                payload: {status: 'request'},
            });

            const {data} = await Api.editUserCurrent(params);

            console.log(data,'edit')
            dispatch({
                type: USER_MODIFY_SUCCESS,
                payload: {
                    status: 'success',
                },
            });
        } catch (e) {
            dispatch({
                type: USER_MODIFY_FAIL,
                payload: {status: 'fail'},
            });
        }}
}