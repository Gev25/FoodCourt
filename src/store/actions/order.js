import Api from "../../Api";

export const ADD_ORDER_REQUEST = "ADD_ORDER_REQUEST";
export const ADD_ORDER_SUCCESS = "ADD_ORDER_SUCCESS";
export const ADD_ORDER_FAIL = "ADD_ORDER_FAIL";

export function addOrderRequest(props){
    const {
        productsList,
        address,
        note,
        receiveType,
        branchId,
    } = props;

    return async (dispatch) => {
        try {
            dispatch({
                type: ADD_ORDER_REQUEST,
                payload: {status: 'request'},
            });

            await Api.addOrder({
                productsList,
                address,
                note,
                receiveType,
                branchId,
            });

            dispatch({
                type: ADD_ORDER_SUCCESS,
                payload: {
                    status: 'success'
                },
            });
        } catch (e) {
            dispatch({
                type: ADD_ORDER_FAIL,
                payload: {status: 'fail'},
            });
        }
    }
}



export const GET_ACTUAL_ORDER_REQUEST = "GET_ACTUAL_ORDER_REQUEST";
export const GET_ACTUAL_ORDER_SUCCESS = "GET_ACTUAL_ORDER_SUCCESS";
export const GET_ACTUAL_ORDER_FAIL = "GET_ACTUAL_ORDER_FAIL";

export function getActualOrdersRequest(){
    return async (dispatch) => {
        try {
            dispatch({
                type: GET_ACTUAL_ORDER_REQUEST,
                payload: {status: 'request'},
            });

            const {data} = await Api.getActualOrders();
            console.log(data,222)
            dispatch({
                type: GET_ACTUAL_ORDER_SUCCESS,
                payload: {
                    status: 'success'
                },
            });
        } catch (e) {
            dispatch({
                type: GET_ACTUAL_ORDER_FAIL,
                payload: {status: 'fail'},
            });
        }
    }
}
