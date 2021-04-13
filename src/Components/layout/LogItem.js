import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min'
import {connect} from "react-redux";
import {deleteLog, setCurrent} from "../../actions/logActions";
import Moment from "react-moment";

const LogItem = ({log, deleteLog, setCurrent}) => {
    const onDelete = () => {
        deleteLog(log.id);
        M.toast({html: "deleted"})
    }
    return (

        <li className="collection-item">
            <div>
                <a href='#edit-log-modal'
                   className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
                   onClick={() => setCurrent(log)}>
                    {log.tech}
                </a>

                <br/>

                <span className='grey-text'>
                <span className="black-text">ID #{log.id}</span>
            </span>
                <a href="!#" onClick={onDelete} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
        // <div>
        //     <h5>{log.title}</h5>
        //     <a href="#edit-log-modal"
        //        className="modal-trigger red-text"
        //        onClick={() => setCurrent(log)}
        //     >{log.tech}</a>
        //     <h1>{log.message}</h1>
        //     <a href="#!" onClick={onDelete} className="secondary-content">
        //         <i className="material-icons red-text">delete</i>
        //     </a>
        // </div>
    );
};


LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
}
export default connect(null, {deleteLog, setCurrent})(LogItem);