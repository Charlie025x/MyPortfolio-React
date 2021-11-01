import React, { Component } from 'react';
import portfolioItemsData from '../portfolio-item.data';

import { Link } from 'react-router-dom';
 
class PortfolioItem extends Component {
  render() {
    return (
      <>
        {/* Dynamic protfolioItems Rendering data from portfolio-item.data */}
        {portfolioItemsData.map((item) => {
          const { id, name, thumbnailUrl, moreDetailsUrl } = item
          
          return (
            <div className="col-lg-4 col-md-6 portfolio-item filter-app" key={ id }>

              <div className="portfolio-wrap">
                <img src={ thumbnailUrl } className="img-fluid" alt={ name }/>
                <div className="portfolio-links">
                  <a href={ thumbnailUrl } data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  {/* <a href={ item.moreDetailsUrl } title="More Details"><i className="bx bx-link"></i></a> */}
                  {/* dynamic link that passes state/props with spread opperator, ...item */}
                  <Link to={{ pathname: moreDetailsUrl, state:{ ...item }}} title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
              
            </div>
          );
        })}

      </>
    )
  }
}
export default PortfolioItem;