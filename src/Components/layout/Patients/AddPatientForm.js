import React, {Fragment, useState} from "react";
// import M from 'materialize-css/dist/js/materialize.min.js'
import {addPatients} from "../../../actions/patientActions";
import {connect} from "react-redux";
import {Link, Route} from 'react-router-dom';
import addPatientForm from "./AddPatientForm"

const AddPatientModal = ({addPatients}) => {
    const [inputs, setInputs] = useState({
        name: '', birth: '', code: '', phone: ''
    });

    const {name, birth, code, phone} = inputs;

    // 왜 이렇게 되는지 파악할 것
    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onClick = () => {
        addPatients(inputs)
    }
    const divStyle = {
        background: "white",
        width: "550px"
    };


    return (
        <Fragment>

            <div className="row" style={divStyle}>
                <div className="input-field">
                </div>
            </div>

            <div className="row" style={divStyle}>
                <div className="input-field" style={divStyle}>
                    <label htmlFor="message" className='active' style={divStyle}>이름</label>
                    <input value={name} name='name' type="text" className="" onChange={onChange}/>
                </div>
            </div>
            <div className="row" style={divStyle}>
                <div className="input-field" style={divStyle}>
                    <label htmlFor="message" className='active' style={divStyle}>생년월일</label>
                    <input value={birth} name='birth' type="text" className="" onChange={onChange}/>
                </div>
            </div>
            <div className="row" style={divStyle}>
                <div className="input-field" style={divStyle}>
                    <label htmlFor="message" className='active' style={divStyle}>진단코드</label>
                    <input value={code} name='code' type="text" className="" onChange={onChange}/>
                </div>
            </div>
            <div className="row" style={divStyle}>
                <div className="input-field" style={divStyle}>
                    <label htmlFor="message" className='active' style={divStyle}>연락처</label>
                    <input value={phone} name='phone' type="text" className="" onChange={onChange}/>
                </div>
            </div>

            <a href="#!" style={{width: '80px'}} onClick={onClick}
               className="modal-close waves-effect waves-blue waves-green btn">Enter</a>

        </Fragment>

    )
}

export default connect(null, {addPatients})(AddPatientModal);