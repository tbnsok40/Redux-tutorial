import {
    GET_DOCS,
    UPDATE_DOCS,
    ADD_DOCS,
    DELETE_DOCS,
    SET_LOADING, LOGS_ERROR, SEARCH_DOCS, CLICK_DOCS
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

export const updateDocs = (doc) => async dispatch => {
    try {
        console.log(doc, doc.id)
        const res = await fetch((`/docs/${doc.id}`), {
            method: "PUT",
            body: JSON.stringify(doc),
            headers: {"Content-Type": "application/json"}, // 여기 조금이라도 오타 생기면 method 오작동.
        })
        const data = await res.json();
        dispatch({
            type: UPDATE_DOCS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: UPDATE_DOCS,
            payload: err.response
        })
    }


}

export const addDocs = (newTitle) => async dispatch => {
    const res = await fetch('/docs', {
        method: "POST",
        body: JSON.stringify(newTitle),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json()
    dispatch({
        type: ADD_DOCS,
        payload: data
    })
}

// SearchDocs 값을 리듀서로 넘기면, state를 그 당시의 결과값만으로 치환하기에,
// 그외의 제증명서들이 리스팅 되지 않은 것.
export const searchDocs = (text) => async dispatch => {
    try {
        const res = await fetch(`/docs?q=${text}`)
        const data = await res.json();
        dispatch({
            type: SEARCH_DOCS,
            payload: data
        })
    } catch (err) {
    }
}

export const clickedDocs = (id) => async dispatch => {
    const res = await fetch(`/docs/${id}`);
    const data = await res.json();
    dispatch({
        type: CLICK_DOCS,
        payload: data
    })
}

// set loading to Ture
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}
