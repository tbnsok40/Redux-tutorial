import React, {Fragment} from 'react';
import {connect} from "react-redux";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import '../../../App.css';
import {useAccordionToggle} from 'react-bootstrap/AccordionToggle';
import {clickedDocs} from "../../../actions/docsActions";

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

const cardStyle = {
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    background: "#d6d4d4",
}

const accordionStyle = {
    width: "280px",
    border: "none",
}

const Example = ({category: {category}, doc: {doc}, clickedDocs}) => {
    const onDocs = (tar) => {
        clickedDocs(tar);
    }
    return (
        <Fragment>
            {category !== undefined && category.map(t => {
                return (
                    <Accordion defaultActiveKey="0" key={t.id}>
                        <Card style={accordionStyle}>
                            <CustomToggle eventKey="0">{t.title}</CustomToggle>
                            {t.title && doc !== null && doc.map(ts => {
                                return (
                                    (t.title === ts.category &&
                                        <Accordion.Collapse eventKey="0" key={ts.id}>
                                            <Card.Body style={cardStyle}
                                                       key={ts.id} onClick={() => onDocs(ts.id)}
                                                       onMouseOver={() => {
                                                       }}>
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