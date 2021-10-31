import React, { Component } from 'react';
import portfolioItemsData from '../portfolio-item.data';
 
class PortfolioItem extends Component {
  render() {
    return (
      <>
        {/* Dynamic protfolioItems Rendering data from portfolio-item.data */}
        {portfolioItemsData.map((item) => {
          return (
            <div className="col-lg-4 col-md-6 portfolio-item filter-app" key={ item.id }>

              <div className="portfolio-wrap">
                <img src={ item.thumbnailUrl } className="img-fluid" alt="portfolio-crwn-clothing"/>
                <div className="portfolio-links">
                  <a href={ item.thumbnailUrl } data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href={ item.moreDetailsUrl } title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
              
            </div>
          );
        })}
      
        {/* custom portfolio-item */}
        {/* <div className="col-lg-4 col-md-6 portfolio-item filter-app">
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
            <img src={ portfolioItems[0].thumbnailUrl } className="img-fluid" alt="portfolio-crwn-clothing"/>
            <div className="portfolio-links">
              <a href={ portfolioItems[0].thumbnailUrl } data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
              <a href={ portfolioItems[0].moreDetailsUrl } title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>
    
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/react-quote-generator.png" className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/react-quote-generator.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="/portfolio-details" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>

          
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src={ portfolioItems[1].thumbnailUrl } className="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href={ portfolioItems[1].thumbnailUrl } data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
              <a href={ portfolioItems[1].moreDetailsUrl } title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div> */}

      </>
    )
  }
}
export default PortfolioItem;