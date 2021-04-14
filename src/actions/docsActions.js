import {
    GET_DOCS,
    UPDATE_DOCS,
    ADD_DOCS,
    DELETE_DOCS, SET_LOADING, LOGS_ERROR
} from './type'

export const getDocs = () => async dispatch => {
    try {
        const res = await fetch('/docs');
        const data = await res.json();
        dispatch({
            type: GET_DOCS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response
        })
    }
}

export const addDocs = (newTitle) => async dispatch => {
    const res = await fetch('/docs', {
        method: "POST",
        body: JSON.stringify(newTitle),
        headers: {
            "Content-Type":"application/json"
        }
    });
    const data = await res.json()
    console.log(data)
}

// set loading to Ture
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}
