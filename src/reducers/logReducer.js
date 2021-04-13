import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG,
} from '../actions/type';

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null,
}
// reducer는 어떤 상태냐에 따른 분기 처리 후, 그에 맞는 state 설정으로 return 한다. (component 내에서 하던 setState를 reducer에서 실행)
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGS:
            return {
                ...state, // spreading current states
                logs: action.payload,
                loading: false
            };
        case SET_LOADING: // 위에서 임포트 했으니
            return {
                ...state, loading: true
            };
        case ADD_LOG: // 위에서 임포트 했으니
            return {
                ...state,
                loading: false,
                logs: [...state.logs, action.payload]
            };
        case DELETE_LOG:
            return {
                ...state,
                loading: false,
                // logs: [...state.logs],
                logs: state.logs.filter(log => log.id !== action.payload)
            }
        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
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
