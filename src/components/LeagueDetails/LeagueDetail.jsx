import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import LeagueDetailPage from "../LeagueDetailPage/LeagueDetailPage";
const LeagueDetail = () => {
  const { LeagueId } = useParams();
  const [leagueDetails, setLeagueDetails] = useState([]);
  useEffect(() => {
    axios(
      `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${LeagueId}`
    ).then((data) => setLeagueDetails(data.data.leagues));
  }, [LeagueId]);
  return (
    <Container>
      {leagueDetails.map((leagues) => (
        <LeagueDetailPage leagues={leagues} key={leagues.strWebsite} />
      ))}
    </Container>
  );
};

export default LeagueDetail;
