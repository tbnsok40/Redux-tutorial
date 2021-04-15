import {ADD_DOCS, GET_DOCS, SEARCH_DOCS} from "../actions/type";

const initialState = {
    doc: null,
    loading: false,
    error: null,
}

// switch 내부에 action만 넣어서 작동 안했던 것...(분기를 못탔네..)
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DOCS:
            return {
                ...state,
                doc: action.payload,
                loading: false
            };
        case ADD_DOCS:
            return {
                ...state,
                // doc: [...state.doc, action.payload],
                loading: false
            }
        case SEARCH_DOCS:
            return {
                ...state,
                doc: action.payload
            }
        default:
            return state
    }
}