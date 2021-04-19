import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {searchPatients} from "../../../actions/patientActions";
import {clickedDocs} from "../../../actions/docsActions";

const Paper = ({selectedPatients: {name, birth, id}, click, clickedDocs}) => {
    useEffect(() => {
        searchPatients();
        // clickedDocs();
    }, [])
    return (
        <div>
            {/* 제증명서 제목*/}
            {/*{console.log(click.title)}*/}
            <br/>
            <h1>제증명서: {click && click.title}</h1>
            <br/>
            <h4>성함: {name}</h4>
            <h4>환자번호: {id}</h4>
            <h4>생년월일: {birth}</h4>

        </div>
    )
}
const mapStateToProps = (state) => ({
    selectedPatients: state.patient.selectedPatients,
    click: state.doc.click
})

export default connect(mapStateToProps, {clickedDocs})(Paper)