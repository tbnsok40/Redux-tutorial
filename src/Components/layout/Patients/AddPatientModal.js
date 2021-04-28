import React, {useState} from "react";
// import M from 'materialize-css/dist/js/materialize.min.js'
import {addPatients} from "../../../actions/patientActions";
import {connect} from "react-redux";
import { Link, Route } from 'react-router-dom';
import addPatientForm from "./AddPatientForm"
import AllPatients from './AllPatient'
import AddPatientForm from "./AddPatientForm";
const AddPatientModal = ({addPatients}) => {
    const [inputs, setInputs] = useState({
        name: '', birth: '', code: '', phone: ''
    });
    const [currPage, setCurrPage] = useState("1")

    const {name, birth, code, phone} = inputs;

    // 왜 이렇게 되는지 파악할 것
    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    const changePage = (num) => {
        setCurrPage(num);
    }
    return (
        <div id="add-patient-modal" className="modal center-sheet" style={{width: '600px', height: '900px'}}>
            <div className="modal-content"
                 style={{padding: '20px 30px 0 30px ', display: 'flex', justifyContent: 'space-between'}}>
                <div className="titles" style={{display: 'flex', justifyContent: 'space-between', background: "none"}}>
                        <h4 style ={{background: "none"}} className="blue-text text-darken-1" onClick={() => changePage('1')}>Enter Patient info</h4>
                        <h4 style ={{background: "none"}} className="blue-text text-darken-1" onClick={() => changePage('2')}>See All Patient info</h4>
                </div>
                {/* currPage 라는 state 의 변화로 컴포넌트 분기처리*/}
                {currPage === '1' && <AddPatientForm/>}
                {currPage === '2' && <AllPatients/>}
            </div>
        </div>
    )
}

export default connect(null, {addPatients})(AddPatientModal);