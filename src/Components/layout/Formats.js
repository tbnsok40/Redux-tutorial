import React, {useState, useEffect, Fragment} from 'react';
import FormatItem from "./LogItem";
import {connect} from 'react-redux'; // reducer와 연결하기 위해 필요한 connect
import PropTypes from 'prop-types';
import {getTitles} from "../../actions/titleActions";
import LogItem from "./LogItem";
import M from 'materialize-css/dist/js/materialize.min'

const Formats = ({title: {titles, loading}, getTitles}) => {

    useEffect(() => {
        getTitles();
        let elem = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elem, {
            accordion: false
        });
        // M.Collapsible.init(document.querySelectorAll('.collapsible'));
    }, [])

    if (titles === null) {
        return <h1> {console.log({titles})}</h1>
    }


    return (
        <Fragment>
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4 className="center">제증명서 리스트</h4>
                </li>
                {
                    titles.map(t => {
                        return (<h3 key={t.id}>
                            {t.title}
                            <br/>

                            {t.nested.map(t => {
                                return (
                                    <a href="/"><h6>{t.title}</h6></a>
                                )
                            })}
                        </h3>)
                    })
                }

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


