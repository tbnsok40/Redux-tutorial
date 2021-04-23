import {
    GET_PATIENTS,
    ADD_PATIENTS, SEARCH_DOCS, SEARCH_PATIENTS,SELECTED_PATIENTS
} from "./type";

export const getPatients = () => async dispatch => {
    try {
        const res = await fetch('/patients')
        const data = await res.json();

        dispatch({
            type: GET_PATIENTS,
            payload: data
        })
    } catch (err) {

    }
}

export const addPatients = (newPatient) => async dispatch => {
    try {
        const res = await fetch('/patients',{
            method:"POST",
            body: JSON.stringify(newPatient),
            headers:{
                "Content-Type": "application/json"
            }
        })
        const data = await res.json();
        dispatch({
            type: ADD_PATIENTS,
            payload: data
        })
    }catch (err) {

    }
}

export const searchPatients = (text) => async dispatch => {
    try {
        const res = await fetch(`/patients?q=${text}`)
        const data = await res.json();
        dispatch({
            type: SEARCH_PATIENTS,
            payload: data
        })
    } catch (err) {
    }
}

export const selectedPatient = (id) => async dispatch => {
    try {
        const res = await fetch(`/patients/${id}`);
        const data = await res.json()
        dispatch({
            type: SELECTED_PATIENTS,
            payload: data
        })
    } catch (err) {
    }
}