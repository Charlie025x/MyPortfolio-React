import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
 
import Header from '../components/header/header.component';
import Hero from '../components/hero/hero.component';
import Main from '../components/main/main.component';
// import Footer from '../Components/Footer/Footer';

const Demo = props => (
  <>
    <ScriptTag type="text/javascript" src="../assets/vendor/aos/aos.js"></ScriptTag>
    <ScriptTag type="text/javascript" src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></ScriptTag>
    <ScriptTag type="text/javascript" src="../assets/vendor/glightbox/js/glightbox.min.js"></ScriptTag>
    <ScriptTag type="text/javascript" src="../assets/vendor/isotope-layout/isotope.pkgd.min.js"></ScriptTag>
    <ScriptTag type="text/javascript" src="../assets/vendor/php-email-form/validate.js"></ScriptTag>
    <ScriptTag type="text/javascript" src="../assets/vendor/purecounter/purecounter.js"></ScriptTag>
    <ScriptTag type="text/javascript" src="../assets/vendor/swiper/swiper-bundle.min.js"></ScriptTag>
    <ScriptTag type="text/javascript" src="../assets/vendor/typed.js/typed.min.js"></ScriptTag>
    <ScriptTag type="text/javascript" src="../assets/vendor/waypoints/noframework.waypoints.js"></ScriptTag>

    <ScriptTag type="text/javascript" src="../assets/js/main.js" />
  </>
  )

class HomePage extends Component {
    render() {
      return (
        <>
          <Header/>
          <Hero/>
          <Main/>
          <Demo/>
        </>
      )
    }
}
export default HomePage;