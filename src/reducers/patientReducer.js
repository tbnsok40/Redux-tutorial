import {
    GET_PATIENTS
} from "../actions/type";


const initialState = {
    name: null,

}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PATIENTS:
            return {}

        default:
            return state
    };
}