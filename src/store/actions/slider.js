import Api from "../../Api";

export const GET_SLIDES_REQUEST = "GET_SLIDES_REQUEST";
export const GET_SLIDES_SUCCESS = "GET_SLIDES_SUCCESS";
export const GET_SLIDES_FAIL = "GET_SLIDES_FAIL";

export function getSliderRequest(){
    return async (dispatch) => {
        try {
            dispatch({
                type: GET_SLIDES_REQUEST,
                payload: {status: 'request'},
            });

            const {data} = await Api.getSlides();
            dispatch({
                type: GET_SLIDES_SUCCESS,
                payload: {
                    status: 'success',
                    slides: data.slides,
                },
            });
        } catch (e) {
            dispatch({
                type: GET_SLIDES_FAIL,
                payload: {status: 'fail'},
            });
        }
    }
}
