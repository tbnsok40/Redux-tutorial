import {ADD_DOCS, GET_DOCS, SEARCH_DOCS, CLICK_DOCS, UPDATE_DOCS} from "../actions/type";

const initialState = {
    doc: null,
    loading: false,
    error: null,
    click: null
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
                doc: [...state.doc, action.payload], // 이게 주석 돼 있어서, 새로고침해야 추가가 됐던 것
                loading: false
            }
        case SEARCH_DOCS:
            return {
                ...state,
                doc: action.payload
            }
        case CLICK_DOCS:
            return {
                ...state,
                click: action.payload
                // doc: action.payload
            }
        case UPDATE_DOCS:
            console.log(action.payload)
            return {
                ...state,
                doc: state.doc.map(dc => dc.id === action.payload ? action.payload : dc)
            }
        default:
            return state
    }
}