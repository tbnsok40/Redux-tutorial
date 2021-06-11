import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {searchPatients} from "../../../actions/patientActions";
import {clickedDocs} from "../../../actions/docsActions";

const displayStyle = {
    borderRadius: "7px",
    padding: "10px 15px 0 25px",
    height: "640px",
}

const textareaStyle = {
    height: "450px",
    resize: "none"
}

const Document = ({selectedPatients: {name, birth, id}, click}) => {
    useEffect(() => {
        searchPatients();
    }, [])
    return (
        <div style={displayStyle} className="card">
            <table>
                <tbody>
                <tr>
                    <td></td>
                    <td style={{textAlign: "center"}}><h2>{click && click.title}</h2></td>
                    <td></td>
                </tr>
                <tr>
                    <td>성함 : {name}</td>
                    <td>환자번호 : {id}</td>
                    <td>생년월일 : {birth}</td>
                </tr>
                <tr style={{height: "300px"}}>
                    <td>의사소견</td>
                    <td colSpan="2"><textarea name="" id="" cols="20" rows="30" style={textareaStyle}/></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
const mapStateToProps = (state) => ({
    selectedPatients: state.patient.selectedPatients,
    click: state.doc.click
})

export default connect(mapStateToProps, {clickedDocs})(Document)
