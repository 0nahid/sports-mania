import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LeagueDetail from './components/LeagueDetails/LeagueDetail';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/lookupLeague/:LeagueId">
            <LeagueDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
