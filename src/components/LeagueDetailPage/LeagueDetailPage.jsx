import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { CgGenderMale } from "react-icons/cg";
import {
  FaFacebook,
  FaFontAwesomeFlag,
  FaGamepad,
  FaMapPin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./LeagueDetailPage.css";
const LeagueDetailPage = (props) => {
  const {
    strLeague,
    strDescriptionEN,
    strFacebook,
    strYoutube,
    strTwitter,
    strBanner,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
  } = props.leagues;
  const male = "https://i.ibb.co/GCD87BQ/male.png";
  const female = "https://i.ibb.co/rGq2Jd5/female.png";
  let imagePath = strGender === "Male" ? male : female;
  return (
    <div className="league-detail">
      <Link to="/">
        {" "}
        <Button variant="dark">Back to Home</Button>
      </Link>
      <div className="text-center league-banner rounded mb-4">
        <img className="img-fluid" src={strBanner} alt="" />
      </div>
      <Row className="bg-dark rounded text-white  p-3 mb-3">
        <Col  md={7}>
          <h2>{strLeague}</h2>
          <p>
            <FaMapPin />
            Founded: {intFormedYear}
          </p>
          <p>
            <FaFontAwesomeFlag />
            Country : {strCountry}
          </p>
          <p>
            <FaGamepad />
            Sports Type: {strSport}
          </p>
          <p>
            <CgGenderMale /> Gender : {strGender}
          </p>
        </Col>
        <Col md={5} className="text-center">
          <img src={imagePath} className="img-fluid" alt={strLeague} />
          {}
        </Col>
      </Row>
      <div>
        <p>{strDescriptionEN}</p>
      </div>
      <div className="text-center h1 text-decoration-none ">
        <a href={strFacebook}>
          <FaFacebook />
        </a>
        <a href={strTwitter}>
          <FaTwitter />
        </a>
        <a href={strYoutube}>
          <FaYoutube color="red" />
        </a>
      </div>
    </div>
  );
};

export default LeagueDetailPage;
