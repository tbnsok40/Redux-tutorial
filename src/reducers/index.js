// this file is root reducer
import {combineReducers} from "redux";
import logReducer from "./logReducer";
import titleReducer from "./titleReducer";
export default combineReducers({
    log: logReducer,
    title: titleReducer
});
