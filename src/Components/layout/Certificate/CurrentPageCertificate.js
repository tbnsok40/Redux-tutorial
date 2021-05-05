import React, {Fragment, useEffect, useRef, useState} from "react";
import {getCategory} from "../../../actions/categoryActions";
import {getDocs, updateDocs, deleteDocs} from '../../../actions/docsActions'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import M from 'materialize-css/dist/js/materialize.min.js'

const EditCertificate = ({certificates, doc: {doc}, getDocs, getCategory, updateDocs, deleteDocs}) => {
    useEffect(() => {
        getCategory();
        getDocs();
    }, [])

    const text = useRef();
    const [title, setTitle] = useState('');
    const [edit, setEdit] = useState(false);

    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage, setPostsPerPage] = useState(9);
    // const indexOfLast = currentPage * postsPerPage;
    // const indexOfFirst = indexOfLast - postsPerPage;
    //
    // function currentPosts(tmp) {
    //     let currentPosts = 0;
    //     currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    //     return currentPosts;
    // }

    const onSubmit = (dc) => {
        const newDocs = {
            id: dc.id,
            title: text.current.value,
            category: dc.category
        }
        updateDocs(newDocs);
        setEdit(false);
        getDocs();
    }
    const changeEdit = (doc) => {
        setEdit(doc.id);
        setTitle(doc.title)
    }
    const onDelete = (id) => {
        deleteDocs(id);
    }

    const divStyle = {display: "flex", justifyContent: "space-between", background: "white", marginBottom:"0px", marginTop: "8px"};
    const btnStyle = {border: "none"};
    const inputStyle = {width: "200px", height: "25px"};

    // 컴포넌트가 2개의 역할을 다해서 문제 ==> 분리 해야한다 => 조회와 수정
    return (
        <Fragment>
            {certificates && certificates.map(dc => {
                return (!edit &&
                    <div id={dc.id} style={divStyle}>
                        <span id={dc.id} style={{background: "white"}}>{dc.title} </span>
                        <div style={divStyle}>
                            <button id={dc.id} onClick={(e) => changeEdit(dc)} style={btnStyle}>
                                EDIT
                            </button>
                            <button id={dc.id} onClick={(e) => onDelete(dc.id)} style={btnStyle}>
                                DELETE
                            </button>
                        </div>
                    </div>)
                    ||
                    (edit === dc.id && <div id={dc.id} style={divStyle}>
                        <input type="text" style={inputStyle}
                               ref={text} value={title}
                               onChange={e => setTitle(e.target.value)}/>
                        <div>
                            <button style={btnStyle} onClick={() => onSubmit(dc)}>완료</button>
                        </div>
                    </div>)
            })}
        </Fragment>);
}


const mapStateToProps = state => ({
    category: state.category,
    doc: state.doc
})
EditCertificate.propTypes = {
    getCategory: PropTypes.func.isRequired,
    getDocs: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, {getCategory, getDocs, updateDocs, deleteDocs})(EditCertificate);

