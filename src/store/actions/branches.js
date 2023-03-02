import Api from "../../Api";

export const GET_BRANCHES_REQUEST = "GET_BRANCHES_REQUEST";
export const GET_BRANCHES_SUCCESS = "GET_BRANCHES_SUCCESS";
export const GET_BRANCHES_FAIL = "GET_BRANCHES_FAIL";

export function getBranchesRequest(){
    return async (dispatch) => {
        try {
            dispatch({
                type: GET_BRANCHES_REQUEST,
                payload: {status: 'request'},
            });

            const {data} = await Api.getAllBranches();

            dispatch({
                type: GET_BRANCHES_SUCCESS,
                payload: {
                    status: 'success',
                    branches: data.branches,
                },
            });
        } catch (e) {
            dispatch({
                type: GET_BRANCHES_FAIL,
                payload: {status: 'fail'},
            });
        }
    }
}
