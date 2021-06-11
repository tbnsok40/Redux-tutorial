import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import {useEffect, Fragment} from 'react';
import AddBtn from "./Components/layout/AddBtn";

import {Provider} from 'react-redux';
import store from './store';
import Formats from "./Components/layout/Accordion/Formats";
import DocumentModal from "./Components/layout/Document/DocumentModal"
import Patient from "./Components/layout/Patients/Patients";
import AddPatientModal from "./Components/layout/Patients/AddPatientModal";
import {BrowserRouter} from "react-router-dom";
import Document from "./Components/layout/Document/Document";

const App = () => {
    useEffect(() => {
            M.AutoInit();
        }
    )
    return (
        <Provider store={store}>
            <Fragment>
                <div className="main" style={{width:"80%", height: "100%"}}>
                    <div className="navbar-left">
                        <Formats/>
                        <DocumentModal/>
                    </div>
                    <div className="navbar-center">
                        <Patient/>
                        <Document/>
                    </div>
                    <AddBtn/>
                    <BrowserRouter>
                        <AddPatientModal/>
                    </BrowserRouter>
                </div>
            </Fragment>
        </Provider>
    );
}
export default App;
