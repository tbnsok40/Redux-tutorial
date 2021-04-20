import React, {useRef, useEffect, useState} from 'react';
import {getPatients, searchPatients, selectedPatient} from "../../../actions/patientActions";
import {connect} from "react-redux";

const Patient = ({name, selectedName, searchedPatients, getPatients, searchPatients, selectedPatient}) => {
    const text = useRef('')
    // const current = ''
    const [current, setCurrent] = useState('');
    useEffect(() => {
        getPatients();

    }, [])

    const onChange = () => {
        searchPatients(text.current.value)
    }

    const setCurrentName = (id) => {
        console.log('target: ', id)
        setCurrent(id)
        // selectedName = name
        selectedPatient(id) // 여기에 id를 넘기면 다 해결돼. name 파라미터 대신 id값을 가져올 것. but how?
    }

    return (
        <div className="SearchPatientTab">
            <div className="">
                <div className="input-field">

                    <input ref={text} type="text" onChange={onChange}/>

                    <select name="category"
                            value={current}
                            key={current}
                            className='browser-default'
                            onChange={e => setCurrentName(e.target.value)}
                    >
                        <option value='' disabled>
                            Select Patients
                        </option>

                        {/*{searchedPatients === null && name !== null && name.map(c =>*/}
                        {/*    <option value={c.name} key={c.id}>*/}
                        {/*        {c.name}*/}
                        {/*    </option>*/}
                        {/*)}*/}

                        {searchedPatients !== null && searchedPatients.map(c =>
                            <option value={c.id} key={c.id}>
                                {c.name}
                            </option>
                        )}
                    </select>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    name: state.patient.name,
    searchedPatients: state.patient.searchedPatients,
    selectedName: state.patient.selectedName

})

export default connect(mapStateToProps, {getPatients, searchPatients, selectedPatient})(Patient);