// this file is root reducer
import {combineReducers} from "redux";
import logReducer from "./logReducer";
import categoryReducer from "./categoryReducer";
import docsReducer from "./docsReducer";
export default combineReducers({
    log: logReducer,
    category: categoryReducer,
    doc: docsReducer
});
