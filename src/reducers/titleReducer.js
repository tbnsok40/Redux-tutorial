import {
    SET_LOADING,
    LOGS_ERROR,
    SET_CURRENT,
    CLEAR_CURRENT,
    GET_FORMAT,
    ADD_FORMAT
} from '../actions/type';

const initialState = {
    current: null,
    loading: false,
    error: null,
    category: null,
    // category:{
    //     nested:''
    // },
    nested: null
}
// reducer는 어떤 상태냐에 따른 분기 처리 후, 그에 맞는 state 설정으로 return 한다. (component 내에서 하던 setState를 reducer에서 실행)
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_FORMAT:
            return {
                ...state,
                category: action.payload,
                loading: false
            };
        case ADD_FORMAT: {
            console.log(action.payload)
        }
            return {
                ...state,
                loading: false,
                // category: [...state.category, action.payload],

            };
        case SET_LOADING: // 위에서 임포트 했으니
            return {
                ...state, loading: true
            };
        case LOGS_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case SET_CURRENT:
            return {
                ...state, current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        default:
            return state
    }
}
