import React, { Component } from 'react';
 
class PortfolioItem extends Component {
  render() {
    return (
      <>
        {/* custom portfolio-item */}
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-crwn-clothing.png" className="img-fluid" alt="portfolio-crwn-clothing"/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-crwn-clothing.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="/portfolio-details" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>
    
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/react-quote-generator.png" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/react-quote-generator.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default PortfolioItem;