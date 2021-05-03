import React, {Fragment, useEffect, useRef, useState} from "react";
import {getCategory} from "../../../actions/categoryActions";
import {getDocs, addDocs, updateDocs, deleteDocs} from '../../../actions/docsActions'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import M from 'materialize-css/dist/js/materialize.min.js'

const EditCertificate = ({category: {category}, doc: {doc}, getDocs, getCategory, addDocs, updateDocs, deleteDocs}) => {
    useEffect(() => {
        getCategory();
        getDocs();
    }, [])

    const text = useRef();
    const [title, setTitle] = useState('');
    const [currcategory, setCurrcategory] = useState('');
    const [currPage, setCurrPage] = useState("1")
    const [edit, setEdit] = useState(false);


    // 간만에 보는 에러, 클릭의 결과가 한 템포 늦게 출력된다. 아오
    const editState = (id) => {
    }

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
    const changePage = (num) => {
        setCurrPage(num);
    }
    const onDelete = (id) => {
        deleteDocs(id);
    }

    // 컴포넌트가 2개의 역할을 다해서 문제 ==> 분리 해야한다 => 조회와 수정
    return (
        <Fragment>

            {doc && doc.map(dc => {
                return (!edit &&
                    <div id={dc.id}>
                        <span id={dc.id}>{dc.title} </span>
                        <button id={dc.id} onClick={(e) => setEdit(dc.id)} style={{border: "none"}}>EDIT</button>
                        <button id={dc.id} onClick={(e) => onDelete(dc.id)} style={{border: "none"}}>DELETE</button>
                    </div>)
                    ||
                    (edit === dc.id ? <div style={{display: "flex"}} id={dc.id}>
                            <input type="text" style={{width: "200px"}} ref={text} value={dc.title}/>
                            <button style={{width: "50px", border: "none"}} onClick={() => onSubmit(dc)}>완료</button>
                        </div> :
                        <div id={dc.id}>
                            <span id={dc.id}>{dc.title} </span>
                            <button id={dc.id} onClick={(e) => setEdit(dc.id)} style={{border: "none"}}>EDIT</button>
                        </div>)
            })}

            {/*{doc && doc.map(dc =>*/}
            {/*    (<div id={dc.id}>*/}
            {/*        <span>{dc.title} </span>*/}
            {/*        <button onClick={editState(dc.id)} style={{border: "none"}}>EDIT</button>*/}
            {/*    </div>)*/}
            {/*)}*/}

        </Fragment>)
        ;
}


// mapStateToProps 는 상위에서 import 할 필요없다.
const mapStateToProps = state => ({
    category: state.category,
    doc: state.doc
})
EditCertificate.propTypes = {
    addDocs: PropTypes.func.isRequired,
    getCategory: PropTypes.func.isRequired,
    getDocs: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, {getCategory, addDocs, getDocs, updateDocs, deleteDocs})(EditCertificate);

