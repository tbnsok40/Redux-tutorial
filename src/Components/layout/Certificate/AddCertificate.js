import React, {Fragment, useEffect, useState} from "react";
import {getCategory} from "../../../actions/categoryActions";
import {getDocs, addDocs} from '../../../actions/docsActions'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import M from 'materialize-css/dist/js/materialize.min.js'

const AddCertificate = ({category: {category}, getDocs, getCategory, addDocs}) => {
    useEffect(() => {
        getCategory();
        getDocs();
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
        M.toast({html: `titles added in ${category}`})
        setTitle('');
    }

    return (
        <Fragment>
            <div className="row" style={{background: "#FFFFFF"}}>
                <div className="input-field">
                    <select name="category" className='browser-default'
                            value={currcategory}
                            onChange={e => setCurrcategory(e.target.value)}>
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
            <div className="row" style={{background: "#FFFFFF"}}>
                <div className="input-field" style={{width: "600px", background: "#FFFFFF"}}>
                    <input type="text" name="message" value={title} onChange={e => setTitle(e.target.value)}/>
                    <label htmlFor="message" className='active' style={{background: "#FFFFFF"}}>Title</label>
                </div>
            </div>
            <div className="modal-footer" style={{width: "15%"}}>
                <a href="#!" onClick={onSubmit}
                   className="modal-close waves-effect waves-blue waves-green btn">Enter</a>
            </div>
        </Fragment>
    );
}

const mapStateToProps = state => ({
    category: state.category,
    doc: state.doc
})
AddCertificate.propTypes = {
    addDocs: PropTypes.func.isRequired,
    getCategory: PropTypes.func.isRequired,
    getDocs: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, {getCategory, addDocs, getDocs})(AddCertificate);
