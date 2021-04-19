import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {searchPatients} from "../../../actions/patientActions";

const Paper = ({selectedPatients:{name, birth, id}}) => {
    useEffect(() => {
        searchPatients();
    }, [])
    return (
        <div>
            <h4>성함:   {name}</h4>
            <h4>환자번호:   {id}</h4>
            <h4>생년월일:   {birth}</h4>

        </div>
    )
}
const mapStateToProps = (state) => ({
    selectedPatients: state.patient.selectedPatients
})

export default connect(mapStateToProps)(Paper)