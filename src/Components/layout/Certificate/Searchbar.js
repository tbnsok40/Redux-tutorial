import React, {useRef} from 'react';
import {searchDocs, getDocs} from "../../../actions/docsActions";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

const Searchbar = ({searchDocs, getDocs}) => {
    const text = useRef('')
    const onChange = () => {
        searchDocs(text.current.value);
    }
    const onclick = () => {
        text.current.value = '';
        getDocs();
    }
    return (
        <nav style={{marginTop: '20px',marginBottom: '30px', width: "85%",}} className="card">
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" placeholder="Search Docs.."
                               ref={text}
                               onChange={onChange}/>
                        <label className="label-icon" htmlFor="search">
                            <i className="material-icons" style={{height:"0px"}}>search</i>
                        </label>
                        <i className="material-icons" style={{height:"0px"}} onClick={onclick}>close </i>
                    </div>
                </form>
            </div>
        </nav>
    )
}
Searchbar.propTypes = {
    searchDocs: PropTypes.func.isRequired,
    getDocs: PropTypes.func.isRequired,
}
export default connect(null, {searchDocs, getDocs})(Searchbar);