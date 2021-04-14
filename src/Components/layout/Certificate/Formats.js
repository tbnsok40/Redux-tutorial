import React, {useState, useEffect, Fragment} from 'react';
import FormatItem from "../LogItem";
import {connect} from 'react-redux'; // reducer와 연결하기 위해 필요한 connect
import PropTypes from 'prop-types';
import {getTitles} from "../../../actions/titleActions";
import LogItem from "../LogItem";
import Accordion from "../../Acc/Accordion";
import M from 'materialize-css/dist/js/materialize.min'

const Formats = ({title: {category, loading}, getTitles}) => {

    useEffect(() => {
        getTitles();
    }, [])

    if (category === null) {
        return <h1> {}</h1>
    }


    return (
        <Fragment>
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4 className="center">제증명서 리스트</h4>
                </li>
                <Accordion title ={category}/>

                {/*{!loading && titles.length === 0 ? (<p className="center"> No titles to show...</p>) :*/}
                {/*    (titles.map(ti => <FormatItem title={ti} key={ti.id}/>))*/}
                {/*}*/}

            </ul>
        </Fragment>
    )
        ;
};


//bringing in as prop

// state 다음에 ()괄호 못 찾아서 에러 터짐
// const mapStateToProps = state => {
//     state.log // this is from rootreducer (index.js)     // state.log is whole log state
// }


// 이걸 설정 안해서 일단 일차 오류
const mapStateToProps = state => ({
    title: state.title

})

export default connect(mapStateToProps, {getTitles})(Formats);


