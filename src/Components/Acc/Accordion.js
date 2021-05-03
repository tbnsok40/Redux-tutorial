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
const accordionStyle = {
    width: "280px",
    border: "none",
    // background: "#8daeec",
    boxShadow: " -10px -1px 21px #728dbf,\n" +
        "             10px 1px 23px #a8cfff"
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
                        <Card style={accordionStyle}>
                            {/*<Card.Header style={{width: "100%", height: "30px"}}>*/}
                            <CustomToggle eventKey="0">{t.title}</CustomToggle>
                            {/*</Card.Header>*/}
                            {t.title && doc !== null && doc.map(ts => {
                                return (
                                    (t.title === ts.category &&
                                        <Accordion.Collapse eventKey="0" key={ts.id} style={{
                                            borderBottom: "1px solid #6493ea",
                                            background: "#8daeec"
                                        }}>
                                            <Card.Body style={{display: "flex", justifyContent: "space-between", cursor:"pointer"}}
                                                       key={ts.id} onClick={() => onDocs(ts.id)}
                                                       onMouseOver = {()=>{}}
                                            >
                                                {ts.title}
                                            </Card.Body>
                                        </Accordion.Collapse>)
                                )
                            })}
                        </Card>
                    </Accordion>
                )
            })}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    doc: state.doc,
    category: state.category
})

export default connect(mapStateToProps, {clickedDocs})(Example);