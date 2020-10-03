import React, {useState, useEffect}  from 'react';
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
  const [isSelectedValue, setIsSelectedValue] = useState('');
  const handleSelectedTab = (tabValue) => {
    setIsSelectedValue(tabValue);
  }
  return (
    <div className="App">
      <Router>
        <div>
        <nav>
          <div className="navigation-bar">
            <div onClick={() => handleSelectedTab('checkboxTree') }>
              <Link to="/checkbox-tree" className={`navigation-bar__item ${isSelectedValue === 'checkboxTree' ? 'checkbox-tree' : ''}`}>Checkbox tree</Link>
            </div>
            <div onClick={() => handleSelectedTab('highlightSearch') }>
              <Link to="/highlight-search" className={`navigation-bar__item ${isSelectedValue === 'highlightSearch' ? 'highlight-search' : ''}`}>Highlight search</Link>
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
