import React from "react";
import { Col, Button } from "react-bootstrap";
import './Leagues.css'
const Leagues = (props) => {
  console.log(props);
  const { strLeague, strSport, strLeagueAlternate } = props.league;
  return (
    <Col md={4} style={{width:'400px'}}  className="bg-light p-2 m-1 rounded text-center">
      <h4>{strLeague}</h4>
      <h6>{strLeagueAlternate}</h6>
      <p>{strSport}</p>
      <Button variant="primary"> Explore</Button>
    </Col>
  );
};

export default Leagues;
