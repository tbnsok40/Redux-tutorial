// this file is root reducer
import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer";
import docsReducer from "./docsReducer";
import patientReducer from './patientReducer';

export default combineReducers({
    category: categoryReducer,
    doc: docsReducer,
    patient: patientReducer,
});
