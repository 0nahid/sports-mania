import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Leagues.css";

const Leagues = (props) => {
  const { strLeague, strSport, strLeagueAlternate, idLeague } = props.league;
  const [setPhoto, setSetPhoto] = useState([]);
  useEffect(() => {
    axios(
      `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
    ).then((data) => setSetPhoto(data.data.leagues));
  }, [idLeague]);
  const photoUrl = setPhoto.map((photo) => photo.strFanart1);
  return (
    <Col
      md={4}
      style={{ width: "420px" }}
      className="bg-dark p-3  m-2 rounded text-center text-white"
    >
      <img src={photoUrl} className="img-fluid" alt="" />
      <h4>{strLeague}</h4>
      <h6>{strLeagueAlternate}</h6>
      <p>{strSport}</p>
      <Link to={`/lookupLeague/` + idLeague}>
        <Button variant="warning">
          Explore <BsArrowRight />
        </Button>
      </Link>
    </Col>
  );
};

export default Leagues;
