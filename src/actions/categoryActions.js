import {
    LOGS_ERROR, GET_CATEGORY, SET_LOADING, SET_CURRENT, ADD_CATEGORY
} from './type';


export const getCategory = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/category')
        const data = await res.json();

        dispatch({
            type: GET_CATEGORY,
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

export const addCategory = (title) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/formats', {
            method: "POST",
            body: JSON.stringify(title),
            headers: {"Content-Type": "application/json"}
        });
        const data = await res.json()

        console.log('data: ', data) // 이미 여기서 id가지고 있다.
        dispatch({
            type: ADD_CATEGORY,
            // payload: data
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