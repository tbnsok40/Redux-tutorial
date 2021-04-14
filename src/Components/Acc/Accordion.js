import React, {Fragment, useState, useContext} from 'react';
import {connect} from "react-redux";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import '../../App.css';

import {useAccordionToggle} from 'react-bootstrap/AccordionToggle';
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

function CustomToggle({children, eventKey}) {
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

function Example({title}) {
    return (
        <Fragment>
            {title !== undefined && title.map(t => {
                return (
                    <Accordion defaultActiveKey="0" key ={t.id}>

                        <Card>
                            <Card.Header>
                                <CustomToggle eventKey="0">{t.title}</CustomToggle>
                            </Card.Header>
                            {t.nested.map(ts => {
                                return (
                                    <Accordion.Collapse eventKey="0" key = {ts.id}>
                                        <Card.Body>{ts.title}</Card.Body>
                                    </Accordion.Collapse>
                            )
                            })}
                        </Card>
                    </Accordion>
                )
            })}
        </Fragment>

    )
        ;
}

// const mapStateToProps = state => ({
//     state.title
// })

export default connect(null,)(Example);