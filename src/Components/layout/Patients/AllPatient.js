import React, {Fragment, useEffect, useState} from "react";
import {connect} from "react-redux";
import {getPatients} from "../../../actions/patientActions";
import CurrentPagePatients from './CurrentPagePatients'
import Pagination from "./Pagination";

const AllPatients = ({patient: {patient}, getPatients}) => {
    useEffect(() => {
        getPatients();
        setPosts(patient);

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
            <CurrentPagePatients posts={currentPosts(posts)}/>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}/>
        </Fragment>
    )
}
// pagination 구현 때문에, 리덕스를 여기서 호출하고, currentPagePatients로 prop 값을 넘기는 것이 옳은 선택인가.
// 기존엔 currentPagePatients에서 Redux 호출

const mapStateToProps = (state) => ({
    patient: state.patient
})

export default connect(mapStateToProps, {getPatients})(AllPatients);
