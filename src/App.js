import React from 'react';
  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home-page.component';
import PortfolioDetails from './pages/portfolio-details.component';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/portfolio-details' component={ PortfolioDetails } />
        </Switch>
      </Router>
    </>
  );
}
export default App;