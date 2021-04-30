import React, {useState, useEffect, Fragment} from 'react';
// import FormatItem from "../LogItem";
import {connect} from 'react-redux'; // reducer와 연결하기 위해 필요한 connect
import PropTypes from 'prop-types';
import {getCategory} from "../../../actions/categoryActions";
import LogItem from "../LogItem";
import Accordion from "../../Acc/Accordion";
import M from 'materialize-css/dist/js/materialize.min'
import {getDocs} from "../../../actions/docsActions";
import Searchbar from "./Searchbar";
import {HashRouter} from "react-router-dom";
import Paper from "./Paper";
import EditCertificateModal from "../Patients/EditCertificate";

const formatStyle = {
    border: "0px",
    width: "350px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
}

const Formats = ({category: {category, loading}, doc: {doc}, getCategory, getDocs}) => {

    useEffect(() => {
        getCategory();
        getDocs();
    }, [])

    if ((category) === null) {
        return <h1> {}</h1>
    }
    return (
        <Fragment>
            <ul className="collection with-header"
                style={formatStyle}
            >
                <li className="collection-header" style={{background: "transparent"}}>
                    <h1 className="center" style={{background: "transparent"}}>제증명서 리스트</h1>
                </li>
                <Searchbar/>
                <HashRouter>
                    <Accordion/>
                </HashRouter>
            </ul>
        </Fragment>
    );
};
// bringing in as prop
// state 다음에 ()괄호 못 찾아서 에러 터짐
// const mapStateToProps = state => {
//     state.log // this is from rootreducer (index.js)     // state.log is whole log state
// }


// 이걸 설정 안해서 일단 일차 오류
const mapStateToProps = state => ({
    category: state.category,
    doc: state.doc
})

export default connect(mapStateToProps, {getCategory, getDocs})(Formats);


