import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getPatients} from "../../../actions/patientActions";

const AllPatients = ({patient: {patient}, getPatients}) => {
    useEffect(() => {
        getPatients();
    }, [])
    return (
        <divs style={{background: "none", marginTop: "20px", height: "800px"}}>
            <table style={{background: "none"}}>
                {patient.map(p => (
                    <tr style={{background: "none"}}>
                        <th style={{background: "none", width: "50px"}}>{p.id}</th>
                        <td style={{background: "none"}}>{p.name}</td>
                        <td style={{background: "none"}}>{p.birth}</td>
                    </tr>
                ))}
            </table>
        </divs>
    )
}
const mapStateToProps = (state) => ({
    patient: state.patient
})

export default connect(mapStateToProps, {getPatients})(AllPatients);
