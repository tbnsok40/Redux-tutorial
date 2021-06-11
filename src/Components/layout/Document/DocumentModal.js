import React, {useState} from "react";
import {getCategory} from "../../../actions/categoryActions";
import {getDocs, addDocs} from '../../../actions/docsActions'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import AddDocument from "./AddDocument";
import EditTabCertificate from "./EditTabDocument";

const DocumentModal = () => {

    const [currPage, setCurrPage] = useState("1")
    const changePage = (num) => {
        setCurrPage(num);
    }

    return (
        <div id="add-title-modal" className="modal center-sheet"
             style={{width: '600px', height: '900px'}}>
            <div className="modal-content">
                <div className="subtitle"
                     style={{background: "#FFFFFF", display: "flex", justifyContent: "space-between"}}>
                    <h4 className="blue-text text-darken-1" style={{cursor:"pointer"}} onClick={() => changePage('1')}>Enter Category/Document</h4>
                    <h4 className="blue-text text-darken-1" style={{cursor:"pointer"}} onClick={() => changePage('2')}>Edit Category/Document</h4>
                </div>
                {currPage === "1" && <AddDocument/>}
                {currPage === "2" && <EditTabCertificate/>}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    category: state.category,
    doc: state.doc
})

DocumentModal.propTypes = {
    addDocs: PropTypes.func.isRequired,
    getCategory: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, {getCategory, addDocs, getDocs})(DocumentModal);
