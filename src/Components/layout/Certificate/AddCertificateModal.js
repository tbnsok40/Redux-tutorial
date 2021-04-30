import React, {useEffect, useState} from "react";
import {getCategory} from "../../../actions/categoryActions";
import {getDocs, addDocs} from '../../../actions/docsActions'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import M from 'materialize-css/dist/js/materialize.min.js'
import AddCertificate from "../Patients/AddCertificate";
import EditCertificate from "../Patients/EditCertificate";

const AddCertificateModal = ({category: {category}, getDocs, getCategory, addDocs}) => {
    useEffect(() => {
        getCategory();
        getDocs();
    }, [])

    const [title, setTitle] = useState('');
    const [currcategory, setCurrcategory] = useState('');
    const [currPage, setCurrPage] = useState("1")
    const onSubmit = () => {
        const category = currcategory
        const newTitle = {
            category,
            title
        }
        addDocs(newTitle);
        M.toast({html: `titles added in ${category}`})
        setTitle('');
    }
    const changePage = (num) => {
        setCurrPage(num);
    }
    return (
        <div id="add-title-modal" className="modal center-sheet"
             style={{background: "#FFFFFF", width: '600px', height: '900px'}}>
            <div className="modal-content">
                <div className="subtitle"
                     style={{background: "#FFFFFF", display: "flex", justifyContent: "space-between"}}>
                    <h4 style={{background: "#FFFFFF"}} onClick={() => changePage('1')}>Enter Category and Document</h4>
                    <h6 style={{background: "#FFFFFF"}} onClick={() => changePage('2')}>Edit Category and Document</h6>
                </div>

                {currPage === "1" && <AddCertificate/>}
                {currPage === "2" && <EditCertificate/>}

            </div>
        </div>
    );
}


// mapStateToProps 는 상위에서 import 할 필요없다.
const mapStateToProps = state => ({
    category: state.category,
    doc: state.doc
})
AddCertificateModal.propTypes = {
    addDocs: PropTypes.func.isRequired,
    getCategory: PropTypes.func.isRequired,
    getDocs: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, {getCategory, addDocs, getDocs})(AddCertificateModal);

