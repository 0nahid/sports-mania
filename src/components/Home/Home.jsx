import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Leagues from "./../Leagues/Leagues";

const Home = () => {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    axios(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php#`).then(
      // (data) => setLeagues(data.data.leagues.slice(0, 30))
      (data) => setLeagues(data.data.leagues)
    );
  }, []);
  return (
    <Container>
      <Row className="justify-content-center">
        <div className="text-center mt-2">
          <h1 className=" text-white bg-dark p-2 rounded">Sports Mania</h1>
        </div>
        {leagues.map((league) => (
          <Leagues league={league} key={league.idLeague} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;
