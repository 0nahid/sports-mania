import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
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
  // const setPhoto = () => {
  //   let imagePath = "";
  //   if (strGender === "Male") {
  //     let imagePath = "../../Photo/male.png";
  //   } else {
  //     let imagePath = "../../Photo/female.png";
  //   }
  // };
  return (
    <div className="league-detail">
      <div className="text-center league-banner rounded mb-4">
        <img className="img-fluid" src={strBanner} alt="" />
      </div>
      <Row className="bg-primary rounded text-white p-3 mb-3">
        <Col md={8}>
          <h1>{strLeague}</h1>
          <p>Founded: {intFormedYear}</p>
          <p>Country : {strCountry}</p>
          <p>Sports Type: {strSport}</p>
          <p>Gender : {strGender}</p>
        </Col>
        <Col md={4}>
          <img src="" className="img-fluid" alt="" />
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
