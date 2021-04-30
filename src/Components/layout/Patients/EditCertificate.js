import React, {Fragment, useEffect, useState} from "react";
import {getCategory} from "../../../actions/categoryActions";
import {getDocs, addDocs} from '../../../actions/docsActions'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import M from 'materialize-css/dist/js/materialize.min.js'

const EditCertificate = ({category: {category}, doc: {doc}, getDocs, getCategory, addDocs}) => {
    useEffect(() => {
        getCategory();
        getDocs();
    }, [])
    const [title, setTitle] = useState('');
    const [currcategory, setCurrcategory] = useState('');
    const [currPage, setCurrPage] = useState("1")
    const [edit, setEdit] = useState(false);


    // 간만에 보는 에러, 클릭의 결과가 한 템포 늦게 출력된다. 아오
    const editState = (id) => {
        console.log(id)
    }

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
    const changePage = (num) => {
        setCurrPage(num);
    }
    return (
        <Fragment>

            {doc && doc.map(dc => {
                return (!edit &&
                    <div id={dc.id}>
                        <span id={dc.id}>{dc.title} </span>
                        <button id={dc.id} onClick={(e) => setEdit(dc.id)} style={{border: "none"}}>EDIT</button>
                    </div>)
                    ||
                    (edit === dc.id ? <div>{edit}</div> :
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

            {console.log(edit)}
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
export default connect(mapStateToProps, {getCategory, addDocs, getDocs})(EditCertificate);

