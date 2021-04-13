import {
    GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG,
    DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG,
} from './type';


// Actions: 행위, 즉 method에 해당하는 일을 하는데, API와 get, post, delete, udpade 하는 일을 여기서 한다.
// 즉 backend와 데이터 통신을 하여, reducer로 데이터를 넘겨주는 역할

// Refactoring : deleted return , added try ~ catch
export const getLogs = () => async dispatch => {
    try {
        setLoading(); // 아래서 선언 한 것 가져온다.
        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}


// add log
// log 인자로 넘길 때 {log} 로 넘기면 로그 내용 제대로 추가되지 않는다.
export const addLogs = (log) => async dispatch => {
    try {
        setLoading(); // 아래서 선언 한 것 가져온다.
        const res = await fetch('/logs', {
            method: "POST",
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}


export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();
        await fetch(`/logs/${id}`, {
            method: "DELETE",
        })
        // const data = await res.json(); // 필요가 없지
        dispatch({
            type: DELETE_LOG,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}


// update server
// export const updateLog = (log) => async dispatch => {
//     try {
//         setLoading();
//         const res = await fetch(`/logs/${log.id}`, {
//             method: "PUT",
//             body: JSON.stringify(log),
//             headers:{
//                 "Content-Type":"application/json"
//             }
//         })
//
//         const data = await res.json();
//         // const data = await res.json(); // 필요가 없지
//         dispatch({
//             type: UPDATE_LOG,
//             payload: data
//         })
//     }catch (err) {
//          dispatch({
//             type: LOGS_ERROR,
//             payload: err.response.data
//         })
//     }
// }


export const updateLog = log => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_LOG, // 2) 데이터를 할당받는다.
            payload: data // 1) 분기 역할을 해주고,
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
};

export const setCurrent = (log) => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

export const clearCurrent = (log) => {
    return {
        type: CLEAR_CURRENT,
    }
}

// set loading to Ture
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

