import React, {Fragment, useEffect, useRef, useState} from "react";
import {getCategory} from "../../../actions/categoryActions";
import {getDocs, addDocs, updateDocs, deleteDocs} from '../../../actions/docsActions'
import PropTypes, {func} from 'prop-types';
import {connect} from "react-redux";
import M from 'materialize-css/dist/js/materialize.min.js'
import CurrentPageCertificate from "./CurrentPageCertificate";
import Pagination from "../Patients/Pagination";

const EditCertificate = ({doc: {doc}, getDocs, getCategory, updateDocs}) => {
    useEffect(() => {
        // getCategory();
        setPosts(doc);
        getDocs();
    }, [doc]) // useCallback을 써라?

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
            <CurrentPageCertificate certificates={currentPosts(posts)} temp={temp}/>
            {/*component 재활용 goood*/}
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

