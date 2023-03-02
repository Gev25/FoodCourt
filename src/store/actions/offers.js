import Api from "../../Api";

export const GET_OFFERS_REQUEST = "GET_OFFERS_REQUEST";
export const GET_OFFERS_SUCCESS = "GET_OFFERS_SUCCESS";
export const GET_OFFERS_FAIL = "GET_OFFERS_FAIL";

export function getOffersRequest(){
    return async (dispatch) => {
        try {
            dispatch({
                type: GET_OFFERS_REQUEST,
                payload: {status: 'request'},
            });

            const {data} = await Api.getAllOffers();
            dispatch({
                type: GET_OFFERS_SUCCESS,
                payload: {
                    status: 'success',
                    offers: data.offers,
                },
            });
        } catch (e) {
            dispatch({
                type: GET_OFFERS_FAIL,
                payload: {status: 'fail'},
            });
        }
    }
}
