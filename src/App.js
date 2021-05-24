import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import {useEffect, Fragment} from 'react';
import Searchbar from './Components/layout/Certificate/Searchbar'
import Logs from './Components/layout/Logs';
import AddBtn from "./Components/layout/AddBtn";
import AddLogModal2 from "./Components/layout/AddLogModal2";
import AddTechModal from "./Components/layout/AddTechModal";
import TechListModal from "./Components/layout/TechListModal";

import {Provider} from 'react-redux';
import store from './store';
import EditLogModal from "./Components/layout/EditLogModal";
import Formats from "./Components/layout/Accordion/Formats";
import AddCertificateModal from "./Components/layout/Certificate/AddCertificateModal"
import Accordion from './Components/layout/Accordion/Accordion'
import Patient from "./Components/layout/Patients/Patients";
import Paper from './Components/layout/Certificate/Paper'
import AddPatientModal from "./Components/layout/Patients/AddPatientModal";
import {BrowserRouter} from "react-router-dom";

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
                        <AddCertificateModal/>
                    </div>
                    <div className="navbar-center">
                        <Patient/>
                        <Paper/>
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
