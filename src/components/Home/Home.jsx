import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Leagues from "./../Leagues/Leagues";

const Home = () => {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    axios(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php#`).then(
      (data) => setLeagues(data.data.leagues.slice(0, 15))
    );
  }, []);
  return (
    <Row>
      <div style={{height:'150px', textAlign:'center' }} className="text-center text-white ">
        <h1>Sports Mania</h1>
      </div>
      {leagues.map((league) => (
        <Leagues league={league} key={league.idLeague} />
      ))}
    </Row>
  );
};

export default Home;
