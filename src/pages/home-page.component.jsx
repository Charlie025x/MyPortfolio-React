import React, { Component } from 'react';
 
import Header from '../components/header/header.component';
import Hero from '../components/hero/hero.component';
import Main from '../components/main/main.component';
import Footer from '../components/footer/footer.component';

class HomePage extends Component {
    render() {
      return (
        <>
          <Header/>
          <Hero/>
          <Main/>
          <Footer/>
        </>
      )
    }
}
export default HomePage;