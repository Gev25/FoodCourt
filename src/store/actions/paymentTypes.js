import Api from "../../Api";

export const GET_PAYMENT_TYPES_REQUEST = "GET_PAYMENT_TYPES_REQUEST";
export const GET_PAYMENT_TYPES_SUCCESS = "ADD_ORDER_SUCCESS";
export const GET_PAYMENT_TYPES_FAIL = "ADD_ORDER_FAIL";

export function paymentTypes(){
    return async (dispatch) => {
        try {
            dispatch({
                type: GET_PAYMENT_TYPES_REQUEST,
                payload: {status: 'request'},
            });

            const {data} = await Api.getAllPaymentTypes();
            console.log(data.paymentTypes);
            dispatch({
                type: GET_PAYMENT_TYPES_SUCCESS,
                payload: {
                    status: 'success',
                    paymentTypes:data.paymentTypes
                },
            });
        } catch (e) {
            dispatch({
                type: GET_PAYMENT_TYPES_FAIL,
                payload: {status: 'fail'},
            });
        }
    }
}
