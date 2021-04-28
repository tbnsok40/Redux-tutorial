import {
    ADD_PATIENTS,
    GET_PATIENTS, SEARCH_PATIENTS, SELECTED_PATIENTS
} from "../actions/type";


const initialState = {
    name: null,
    loading: false,
    searchedPatients: null,
    selectedName: '',
    selectedPatients: '',
    patient: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PATIENTS:
            return ({
                ...state,
                patient: action.payload,
                loading: false
            })

        case SEARCH_PATIENTS:
            return({
                ...state,
                searchedPatients: action.payload
            })

        case ADD_PATIENTS:
            return({
                ...state,
                name: [...state, action.payload]

            })
        case SELECTED_PATIENTS:
            return ({
                ...state,
                selectedPatients: action.payload
            })

        default:
            return state
    }
    ;
}