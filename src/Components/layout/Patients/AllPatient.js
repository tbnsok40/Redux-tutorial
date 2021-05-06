import React, {Fragment, useEffect, useState} from "react";
import {connect} from "react-redux";
import {getPatients} from "../../../actions/patientActions";
import CurrentPagePatients from './CurrentPagePatients'
<<<<<<< HEAD
import Pagination from "./Pagination";
=======
>>>>>>> fd8f87b85ef2fd187b126fa6e8ffdf44342ff9bf

const AllPatients = ({patient: {patient}, getPatients}) => {
    useEffect(() => {
        getPatients();
        setPosts(patient);

    }, [])
<<<<<<< HEAD
=======
    return (
        <div style={{background: "none", marginTop: "20px", height: "800px"}}>
            <table style={{background: "none", textAlign: "center"}}>
                <tr style={{background: "none"}}>
                    <th style={{background: "none", width: "20px", }}>환자번호</th>
                    <td style={{background: "none", width: "20px"}}>이름</td>
                    <td style={{background: "none", width: "20px"}}>생년월일</td>
                    <td style={{background: "none", width: "20px"}}>코드</td>
                    {/*<td style={{background: "none", width: "30px"}}>수정 / 삭제</td>*/}
                </tr>
                <CurrentPagePatients/>
>>>>>>> fd8f87b85ef2fd187b126fa6e8ffdf44342ff9bf

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
