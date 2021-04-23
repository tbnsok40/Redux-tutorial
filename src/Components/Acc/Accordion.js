import React, {Fragment, useState, useContext, useEffect} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import '../../App.css';
import {useAccordionToggle} from 'react-bootstrap/AccordionToggle';
import {getDocs, clickedDocs} from "../../actions/docsActions";

const CustomToggle = ({children, eventKey}) => {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="text"
            style={{backgroundColor: 'transparent', border: 'none'}}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

const Example = ({category: {category}, doc: {doc}, clickedDocs}) => {
    const onDocs = (tar) => {
        // Docs의 id 가져오기 성공 => onClick(e => onDocs(ts.id))
        clickedDocs(tar);
    }
    return (
        <Fragment>
            {category !== undefined && category.map(t => {
                return (
                    <Accordion defaultActiveKey="0" key={t.id}>
                        <Card>
                            <Card.Header>
                                <CustomToggle eventKey="0">{t.title}</CustomToggle>
                            </Card.Header>
                            {t.title && doc !== null && doc.map(ts => {
                                return (
                                    (t.title === ts.category &&
                                        <Accordion.Collapse eventKey="0" key={ts.id}>

                                             <Card.Body key={ts.id} onClick={e => onDocs(ts.id)}>{ts.title} </Card.Body>
                                        </Accordion.Collapse>)
                                )})}
                        </Card>
                    </Accordion>
                )})}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    doc: state.doc,
    category: state.category
})

export default connect(mapStateToProps, {clickedDocs})(Example);