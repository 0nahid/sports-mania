import React from 'react';
import { Col } from 'react-bootstrap';

const Leagues = (props) => {
    console.log(props);
    const { strLeague, strSport } = props.league;
    return (
        <Col md={4}>
            <h1>{strLeague}</h1>
            <h1>{strSport}</h1>
        </Col>
    );
};

export default Leagues;