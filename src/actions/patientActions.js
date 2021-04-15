import {
    GET_PATIENTS,
    ADD_PATIENTS,

} from "./type";

export const getPatients = () => async dispatch => {
    try {
        const res = await fetch('/patients')
        const data = await res.json();

        console.log(data);
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