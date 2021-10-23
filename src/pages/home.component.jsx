import React, { Component } from 'react';
 
import Header from '../components/header/header.component';
import Hero from '../components/hero/hero.component';
import Main from '../components/main/main.component';
// import Footer from '../Components/Footer/Footer';
 
class home extends Component {
    render() {
      return (
        <>
          <Header/>
          <Hero/>
          <Main/>
        </>
      )
    }
}
export default home;