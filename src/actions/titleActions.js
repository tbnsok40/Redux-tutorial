import {
    LOGS_ERROR, GET_FORMAT, SET_LOADING, SET_CURRENT
} from './type';


export const getTitles = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/formats')
        const data = await res.json();

        dispatch({
            type: GET_FORMAT,
            payload: data
        })
    } catch (err) {
        console.log(err);
        dispatch({
            type: LOGS_ERROR,
            payload: err.response
        })
    }
}


export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}



export const setCurrent = (title) => {
    return {
        type: SET_CURRENT,
        payload: title
    }
}