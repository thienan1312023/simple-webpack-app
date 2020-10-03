import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import CheckboxTree from './components/CheckboxTree';
import HighlightSearch from "./components/HighlightSearch";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <nav>
          <div className="navigation-bar">
            <div>
              <Link to="/checkbox-tree">Checkbox tree</Link>
            </div>
            <div>
              <Link to="/highlight-search">Highlight search</Link>
            </div>
          </div>
        </nav>
          <Switch>
            <Route path="/checkbox-tree">
              <CheckboxTree />
            </Route>
            <Route path="/highlight-search">
              <HighlightSearch />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
