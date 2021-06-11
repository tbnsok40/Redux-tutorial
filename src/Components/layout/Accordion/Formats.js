import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import {getCategory} from "../../../actions/categoryActions";
import Accordion from "./Accordion";
import {getDocs} from "../../../actions/docsActions";
import Searchbar from "../Certificate/Searchbar";
import {HashRouter} from "react-router-dom";

const formatStyle = {
    border: "0px",
    width: "350px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
}

const Formats = ({category: {category}, getCategory, getDocs}) => {

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

const mapStateToProps = state => ({
    category: state.category,
    doc: state.doc
})

export default connect(mapStateToProps, {getCategory, getDocs})(Formats);


