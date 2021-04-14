import React, {useEffect, useState} from "react";
import {addCategory, getCategory} from "../../../actions/categoryActions";
import {getDocs, addDocs} from '../../../actions/docsActions'
import PropTypes from 'prop-types';
// import {addTitles} from "../../../actions/titleActions";
// import connect from "react-redux/lib/connect/connect";
import {connect} from "react-redux";
import M from 'materialize-css/dist/js/materialize.min.js'

const AddCertificateModal = ({category: {category}, doc: {doc}, getDocs, getCategory, addDocs}) => {
    useEffect(() => {
        getCategory();
        getDocs();
        // addCategory();
    }, [])

    const [title, setTitle] = useState('');
    const [currcategory, setCurrcategory] = useState('');
    const onSubmit = () => {
        const category = currcategory

        const newTitle = {
            category,
            title
        }
        addDocs(newTitle);
        M.toast({html: "titles added in"})
        // setCurrcategory('');
        setTitle('');
    }
    return (
        <div id="add-title-modal" className="modal bottom-sheet">
            <div className="modal-content">
                <h4>Enter System log</h4>
                <div className="row">
                    <div className="input-field" style={{width: "600px"}}>
                        <input type="text" name="message" value={title} onChange={e => setTitle(e.target.value)}/>
                        <label htmlFor="message" className='active'>Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="category" className='browser-default'
                                value={currcategory}
                            onChange={e=> setCurrcategory(e.target.value)}>
                        >
                            <option value='' disabled>
                                Select Category
                            </option>

                            {category !== null && category.map(c =>
                                <option value={c.title} key={c.id}>
                                    {c.title}
                                </option>
                            )}
                        </select>
                    </div>
                </div>


                <div className="modal-footer">
                    <a href="#!" onClick={onSubmit}
                       className="modal-close waves-effect waves-blue waves-green btn">Enter</a>
                </div>
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

