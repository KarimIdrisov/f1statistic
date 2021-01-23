import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

// import pages
import HomePage from "./Pages/HomePage";
import StandingList from "./Pages/StandingList";
import DriverPage from "./Pages/DriverPage";
import ConstructorPage from "./Pages/ConstructorPage";
import CurrentRaceSchedule from "./Pages/CurrentRaceSchedule";
import ConstructorsCup from "./Pages/ConstructorsCup";
import RaceResults from "./Pages/RaceResults";

function App() {
  return (
    <div style={{height: '100%'}}>
      <Router>
          <Switch>
              <Route path="/race/:id" component={RaceResults}/>
              <Route path="/constructor-list" component={ConstructorsCup}/>
              <Route path="/current" component={CurrentRaceSchedule}/>
              <Route path="/constructors/:constructorId" component={ConstructorPage}/>
              <Route path="/driver/:driverId" component={DriverPage}/>
              <Route path="/standing-list/:season" component={StandingList}/>
              <Route path="/" component={HomePage}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
