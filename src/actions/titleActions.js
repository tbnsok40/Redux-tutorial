import {
    LOGS_ERROR, GET_FORMAT, SET_LOADING, SET_CURRENT, ADD_FORMAT
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

export const addTitles = (title) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/formats', {
            method: "POST",
            body: JSON.stringify(title),
            headers: {"Content-Type": "application/json"}
        });
        const data = await res.json()
        const data2 = data.nested
        console.log('data: ', data2) // 이미 여기서 id가지고 있다.
        dispatch({
            type: ADD_FORMAT,
            payload: data2
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })

    }
};


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