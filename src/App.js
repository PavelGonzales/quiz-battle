import React from 'react';
// Styles
import './App.css';
// Screens
import MainScreen from './screens/Main';
import FindScreen from './screens/Find';
import BattleScreen from './screens/Battle';
import FinishScreen from './screens/Finish';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="test-nav">
          <Link to="/">Main</Link>
          <Link to="/find">Find</Link>
          <Link to="/battle">Buttle</Link>
          <Link to="/finish">Finish</Link>
        </nav>

        <Switch>
          <Route path="/find">
            <FindScreen />
          </Route>
          <Route path="/battle">
            <BattleScreen />
          </Route>
          <Route path="/finish">
            <FinishScreen />
          </Route>
          <Route path="/">
            <MainScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
