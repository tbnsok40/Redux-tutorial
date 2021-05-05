import React, {Fragment, useEffect, useRef, useState} from "react";
import {getCategory} from "../../../actions/categoryActions";
import {getDocs, addDocs, updateDocs, deleteDocs} from '../../../actions/docsActions'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import M from 'materialize-css/dist/js/materialize.min.js'
import CurrentPageCertificate from "./CurrentPageCertificate";
import Pagination from "../Patients/Pagination";

const EditCertificate = ({doc: {doc}, getDocs, getCategory, addDocs, updateDocs, deleteDocs}) => {
    useEffect(() => {
        getCategory();
        getDocs();
        setPosts(doc)
    }, [])

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

    return (
        <Fragment>
            <CurrentPageCertificate certificates = {currentPosts(posts)}/>

            {/*component 재활요 goood*/}
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}/>

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
export default connect(mapStateToProps, {getCategory, addDocs, getDocs, updateDocs, deleteDocs})(EditCertificate);

