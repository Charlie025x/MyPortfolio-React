import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
 
import Header from '../components/header/header.component';
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

class PortfolioDetails extends Component {
  render() {
    return (
      <>
        <Header/>
          <main id="main">

            {/* ======= Breadcrumbs ======= */}
            <section id="breadcrumbs" class="breadcrumbs">
              <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                  <h2>CRWN Clothing</h2>
                  <ol>
                    <li><a href="/">Home</a></li> {/* this button breaks the page */}
                    <li>CRWN Clothing</li>
                  </ol>
                </div>

              </div>
            </section>{/* End Breadcrumbs */}

            {/* ======= Portfolio Details Section ======= */}
            <section id="portfolio-details" class="portfolio-details">
              <div class="container">

                <div class="row gy-4">

                  <div class="col-lg-8">
                    <div class="portfolio-details-slider swiper">
                      <div class="swiper-wrapper align-items-center">

                        <div class="swiper-slide">
                          <img src="assets/img/portfolio/portfolio-crwn-clothing.png" alt=""/>
                        </div>

                        <div class="swiper-slide">
                          <img src="assets/img/portfolio/portfolio-details-crwn-clothing-1.png" alt=""/>
                        </div>

                        <div class="swiper-slide">
                          <img src="assets/img/portfolio/portfolio-details-crwn-clothing-2.png" alt=""/>
                        </div>

                        <div class="swiper-slide">
                          <img src="assets/img/portfolio/portfolio-details-crwn-clothing-3.png" alt=""/>
                        </div>

                      </div>
                      <div class="swiper-pagination"></div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="portfolio-info">
                      <h3>Project information</h3>
                      <ul>
                        <li><strong>Category</strong>: Web design</li>
                        <li><strong>Project date</strong>: 27 August, 2021</li>
                        <li><strong>Project URL</strong>: <a href="https://crwn-live-charlie-2021.herokuapp.com/" target="_blank" rel="noopener noreferrer">crwn-live-charlie</a></li>
                      </ul>
                    </div>
                    <div class="portfolio-description">
                      <h2>CRWN Clothing</h2>
                      <p>
                          An E-commerce clothing store built on a React environment. The page has subdirectories for each category of clothes sold, shopping cart feature, utilizes Stripe api for payment processing, and handles user authentication through Firebase.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </section> {/* End Portfolio Details Section */}

          </main> {/* end main */}


        <Demo/>
      </>
    )
  }
}
export default PortfolioDetails;