import React, {Fragment, useEffect, useRef, useState} from "react";
import {getCategory} from "../../../actions/categoryActions";
import {getDocs, addDocs, updateDocs, deleteDocs} from '../../../actions/docsActions'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import UpdateDocument from "./UpdateDocument";
import Pagination from "../Patients/Pagination";

const EditTabDocument = ({doc: {doc}, getDocs, updateDocs}) => {
    useEffect(() => {
        setPosts(doc);
        getDocs();
    }, [doc]) // 무한 호출

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;

    function currentPosts(tmp) {
        let currentPosts = 0;
        currentPosts = tmp.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }

    function temp(newDocs) {
        updateDocs(newDocs);
    }

    return (
        <Fragment>
            <UpdateDocument certificates={currentPosts(posts)} temp={temp}/>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}/>
        </Fragment>);
}

const mapStateToProps = state => ({
    category: state.category,
    doc: state.doc
})
EditTabDocument.propTypes = {
    getCategory: PropTypes.func.isRequired,
    getDocs: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, {getCategory, addDocs, getDocs, updateDocs, deleteDocs})(EditTabDocument);
