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
import Formats from "./Components/layout/Certificate/Formats";
import AddCertificateModal from "./Components/layout/Certificate/AddCertificateModal"
import Accordion from './Components/Acc/Accordion'
import Patient from "./Components/layout/Patients/Patients";
import Paper from './Components/layout/Certificate/Paper'
import AddPatientModal from "./Components/layout/Patients/AddPatientModal";

const App = () => {
    useEffect(() => {
            M.AutoInit();
        }
    )

    return (
        <Provider store={store}>
            <Fragment>
                {/*<Logs/>*/}
                {/*<AddLogModal2/>*/}
                {/*<AddTechModal/>*/}
                {/*<TechListModal/>*/}
                {/*<EditLogModal/>*/}
                <div className="main">
                    <div className="navbar-left">
                        <Formats/>
                        <AddCertificateModal/>
                    </div>
                    <div className="navbar-center">
                        <Patient/>
                        <Paper/>
                    </div>
                <AddBtn/>
                                <AddPatientModal/>

                </div>
            </Fragment>
        </Provider>
    );
}

export default App;
