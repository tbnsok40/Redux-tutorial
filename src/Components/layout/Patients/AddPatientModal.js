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
        console.log(currPage)
    }

    const onClick = () => {
        addPatients(inputs)
    }

    return (
        <div id="add-patient-modal" className="modal center-sheet" style={{width: '600px', height: '900px'}}>
            <div className="modal-content"
                 style={{padding: '20px 30px 0 30px ', display: 'flex', justifyContent: 'space-between'}}>
                <div className="titles" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h4 className="blue-text text-darken-1" onClick={() => changePage('1')}>Enter Patient info</h4>
                        <h4 className="blue-text text-darken-1" onClick={() => changePage('2')}>See All Patient info</h4>
                </div>
                {currPage === '1' && <AddPatientForm/>}
                {currPage === '2' && <AllPatients/>}

                {/*<div className="row">*/}
                {/*    <div className="input-field">*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="row">*/}
                {/*    <div className="input-field" style={{width: "600px"}}>*/}
                {/*        <label htmlFor="message" className='active'>이름</label>*/}
                {/*        <input value={name} name='name' type="text" className="" onChange={onChange}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                {/*    <div className="input-field" style={{width: "600px"}}>*/}
                {/*        <label htmlFor="message" className='active'>생년월일</label>*/}
                {/*        <input value={birth} name='birth' type="text" className="" onChange={onChange}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                {/*    <div className="input-field" style={{width: "600px"}}>*/}
                {/*        <label htmlFor="message" className='active'>진단코드</label>*/}
                {/*        <input value={code} name='code' type="text" className="" onChange={onChange}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                {/*    <div className="input-field" style={{width: "600px"}}>*/}
                {/*        <label htmlFor="message" className='active'>연락처</label>*/}
                {/*        <input value={phone} name='phone' type="text" className="" onChange={onChange}/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<a href="#!" style={{width: '80px'}} onClick={onClick}*/}
                {/*   className="modal-close waves-effect waves-blue waves-green btn">Enter</a>*/}

                {/*<div className="modal-footer" style={{width: '80px'}}>*/}
                {/*    <a href="#!"*/}
                {/*       className="modal-close waves-effect waves-blue waves-green btn">Enter</a>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default connect(null, {addPatients})(AddPatientModal);