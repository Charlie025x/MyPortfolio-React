import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import home from './pages/home.component';
import Header from './components/header/header.component';
import Hero from './components/hero/hero.component';
import Main from './components/main/main.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="wrapper">
      {/* <Router> */}
        {/* <Switch> */}
          {/* <Route exact path="/" component={home} /> */}
          <Header/>
          <Hero/>
          <Main/>
          <Footer/>
        {/* </Switch> */}
      {/* </Router> */}
    </div>
  );
}
export default App;