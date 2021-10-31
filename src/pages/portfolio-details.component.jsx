import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';

import portfolioItemsData from '../components/portfolio-item.data';

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
                  <h2>{ portfolioItemsData[0].name }</h2>
                  <ol>
                    {/* used <a> over <link> so that Javascript can re-render on app.js's useEffect */}
                    <li><a href="/">Home</a></li>
                    <li>{ portfolioItemsData[0].name }</li>
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
                        <li><strong>Project date</strong>{ portfolioItemsData[0].date }</li>
                        <li><strong>Project URL</strong>: <a href={ portfolioItemsData[0].liveUrl} target="_blank" rel="noopener noreferrer">{ portfolioItemsData[0].name }</a></li>
                      </ul>
                    </div>
                    <div class="portfolio-description">
                      <h2>{ portfolioItemsData[0].name }</h2>
                      <p>{ portfolioItemsData[0].description }</p>
                    </div>
                  </div>

                </div>

              </div>
            </section> {/* End Portfolio Details Section */}

          </main> {/* end main */}

        <Footer/>
      </>
    )
  }
}
export default PortfolioDetails;