import React, {Fragment, useEffect} from "react";
import {connect} from "react-redux";
import {getPatients} from "../../../actions/patientActions";
import CurrentPagePatients from './CurrentPagePatients'

const AllPatients = ({patient: {patient}, getPatients}) => {
    useEffect(() => {
        getPatients();
    }, [])
    return (
        <Fragment>
            {patient.map(p => (
                <tr style={{background: "none"}} key={p.id}>
                    <th style={{background: "none", width: "50px"}}>{p.id}</th>
                    <td style={{background: "none"}}>{p.name}</td>
                    <td style={{background: "none"}}>{p.birth}</td>
                </tr>
            ))}
        </Fragment>
    )
}
const mapStateToProps = (state) => ({
    patient: state.patient
})

export default connect(mapStateToProps, {getPatients})(AllPatients);
