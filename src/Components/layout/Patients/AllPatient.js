import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getPatients} from "../../../actions/patientActions";
import CurrentPagePatients from './CurrentPagePatients'
const AllPatients = ({patient: {patient}, getPatients}) => {
    useEffect(() => {
        getPatients();
    }, [])
    return (
        <div style={{background: "none", marginTop: "20px", height: "800px"}}>
            <table style={{background: "none"}}>
                <CurrentPagePatients/>

            </table>
        </div>
    )
}
const mapStateToProps = (state) => ({
    patient: state.patient
})

export default connect(mapStateToProps, {getPatients})(AllPatients);
