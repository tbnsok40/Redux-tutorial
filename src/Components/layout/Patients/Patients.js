import React, {useRef, useEffect, useState} from 'react';
import {getPatients, searchPatients, selectedPatient} from "../../../actions/patientActions";
import {connect} from "react-redux";

const Patient = ({name, selectedName, patient:{patient}, searchedPatients, getPatients, searchPatients, selectedPatient}) => {
    const text = useRef('')
    // const current = ''
    const [current, setCurrent] = useState('');
    useEffect(() => {
        getPatients();
        const searchtab = document.getElementById("search");
        searchtab.focus();
        console.log(document.getElementById("search"))
    }, [])

    const onChange = () => {
        searchPatients(text.current.value)
    }

    const setCurrentName = (id) => {
        setCurrent(id)
        // selectedName = name
        selectedPatient(id) // 여기에 id를 넘기면 다 해결돼. name 파라미터 대신 id값을 가져올 것. but how?
    }

    const onclick = () => {
        text.current.value = '';
    }

    return (
        <nav style={{marginTop: '20px', marginBottom: '90px', width: "100%"}} className="transparent">
            <div className="nav-wrapper" style={{width: "100%", background: "transparent"}}>
                <form>
                    <div className="input-field"
                         style={{boxShadow: "inset 5px 5px 5px #718bbd, inset -4px -4px 4px #a9d1ff"}}>
                        <input id="search" ref={text}
                               type="search"
                               onChange={onChange}
                               placeholder="Search Patients..."/>
                        <label className="label-icon" htmlFor="search" style={{background: "none", width: "10px"}}>
                            <i className="material-icons" style={{color: "white", height: "0px"}}>search</i>
                        </label>
                        <i className="material-icons" style={{height: "0px"}} onClick={onclick}>close </i>
                    </div>
                </form>

                <select name="category"
                        value={current}
                        key={current}
                        className='browser-default'
                        style={{marginTop: "15px", width: "100%"}}
                        onChange={e => setCurrentName(e.target.value)}
                >
                    <option value='' disabled>
                        Select Patients
                    </option>
                    {!searchedPatients && patient && patient.map(c =>
                        <option value={c.id} key={c.id}>
                            {c.name} {c.birth}
                        </option>
                    )}
                    {searchedPatients && searchedPatients.map(c =>
                        <option value={c.id} key={c.id}>
                            {c.name} {c.birth}
                        </option>
                    )}
                </select>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => ({
    name: state.patient.name,
    searchedPatients: state.patient.searchedPatients,
    selectedName: state.patient.selectedName,
    patient : state.patient

})

export default connect(mapStateToProps, {getPatients, searchPatients, selectedPatient})(Patient);