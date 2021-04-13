import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
// import M from 'materialize-css/dist/js/materialize.min'
// import {connect} from "react-redux";
import { setCurrent } from "../../actions/titleActions";

const FormatItem = ({t}) => {

    return (

        <li>
            <div>
                {t.title}
            </div>
        </li>
    );
};


FormatItem.propTypes = {
    title: PropTypes.object.isRequired,
}
export default FormatItem;
