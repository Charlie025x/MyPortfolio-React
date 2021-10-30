import React from 'react';
import { useEffect } from 'react';
  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home-page.component';
import PortfolioDetails from './pages/portfolio-details.component';
  
function App() {
  // loads the bootstrap's template javascript
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "./assets/js/main.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <>
      <Router>
        {/* <Switch> */}
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/portfolio-details' component={ PortfolioDetails } />
        {/* </Switch> */}
      </Router>
    </>
  );
}
export default App;