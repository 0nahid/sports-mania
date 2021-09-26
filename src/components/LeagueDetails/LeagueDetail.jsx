import React from "react";
import { useParams } from "react-router";
const LeagueDetail = () => {
  const { LeagueId } = useParams();
  return (
    <div>
      <h1>this is league details page of {LeagueId}</h1>
    </div>
  );
};

export default LeagueDetail;
