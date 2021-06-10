import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import HomePage from "./containers/HomePage";
import MemberPage from "./containers/MemberPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/members">
            <MemberPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
