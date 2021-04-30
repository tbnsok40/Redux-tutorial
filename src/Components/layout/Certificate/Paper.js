import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {searchPatients} from "../../../actions/patientActions";
import {clickedDocs} from "../../../actions/docsActions";

const displayStyle = {
    // border: "1px solid black",
    borderRadius: "7px",
    padding: "10px 15px 0 25px",
    background: "#8daeec",
    height: "640px",
    // boxShadow:  " -23px -23px 46px #728dbf,\n" +
    //     "             23px 23px 46px #a8cfff"
    boxShadow: "inset 8px 8px 8px #718bbd, inset -10px -10px 8px #a9d1ff"
}

const Paper = ({selectedPatients: {name, birth, id}, click}) => {
    useEffect(() => {
        searchPatients();
    }, [])
    return (
        <div style={displayStyle}>
            <table>
                <tr>
                    <td></td>
                    <td style={{textAlign:"center"}}> <h2>{click && click.title}</h2> </td>
                    <td></td>
                </tr>
                <tr>
                    <td>성함 : {name}</td>
                    <td>환자번호 : {id}</td>
                    <td>생년월일 : {birth}</td>
                </tr>
                <tr style={{height: "300px"}}>
                    <td>의사소견 :</td>
                    <td colSpan="2"><textarea name="" id="" cols="20" rows="10"/></td>
                </tr>
            </table>
        </div>
    )
}
const mapStateToProps = (state) => ({
    selectedPatients: state.patient.selectedPatients,
    click: state.doc.click
})

export default connect(mapStateToProps, {clickedDocs})(Paper)