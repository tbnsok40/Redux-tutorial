import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import {useEffect, Fragment} from 'react';
import Searchbar from './Components/layout/Searchbar'
import Logs from './Components/layout/Logs';
import AddBtn from "./Components/layout/AddBtn";
import AddLogModal2 from "./Components/layout/AddLogModal2";
import AddTechModal from "./Components/layout/AddTechModal";
import TechListModal from "./Components/layout/TechListModal";

import {Provider} from 'react-redux';
import store from './store';
import EditLogModal from "./Components/layout/EditLogModal";
import Formats from "./Components/layout/Formats";


const App = () => {
    useEffect(() => {
            M.AutoInit();
        }
    )

    return (
        <Provider store={store}>
            <Fragment>


                <Searchbar/>

                <div className="navbar-left">
                    {/*<Logs/>*/}
                    {/*<AddLogModal2/>*/}
                    {/*<AddTechModal/>*/}
                    {/*<TechListModal/>*/}
                    {/*<AddBtn/>*/}
                    {/*<EditLogModal/>*/}
                </div>

                <div className="navbar-right">
                    <Formats/>
                </div>
            </Fragment>
        </Provider>
    );
}

export default App;
