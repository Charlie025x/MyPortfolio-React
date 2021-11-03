import Footer from '../components/footer/footer.component';
import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

const PortfolioDetails = () => {
  const location = useLocation()
  const { name, thumbnailUrl, imageCount, date, liveUrl, description } = location.state
  console.log(location.state)
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
        <main id="main">

          {/* ======= Breadcrumbs ======= */}
          <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

              <div class="d-flex justify-content-between align-items-center">
                <h2>{ name }</h2>
                <ol>
                  {/* used <a> over <link> so that Javascript can re-render on app.js's useEffect */}
                  <li><a href="/">Home</a></li>
                  <li>{ name }</li>
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

                      <div class={ imageCount !== 1 ? "swiper-slide" : ''}>
                        <img src={ thumbnailUrl } alt=""/>
                      </div>

                      { imageCount === 4 ?
                        <><div class="swiper-slide">
                        
                        <img src={ thumbnailUrl.slice(0,thumbnailUrl.length-4) + "-1.png"} alt={ name }/>
                        </div>

                        <div class="swiper-slide">
                          <img src={ thumbnailUrl.slice(0,thumbnailUrl.length-4) + "-2.png"} alt={ name }/>
                        </div>

                        <div class="swiper-slide">
                          <img src={ thumbnailUrl.slice(0,thumbnailUrl.length-4) + "-3.png"} alt={ name }/>
                        </div></>
                        : ''
                      
                      }

                    </div>
                    <div class="swiper-pagination"></div>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="portfolio-info">
                    <h3>Project information</h3>
                    <ul>
                      <li><strong>Category</strong>: Web design</li>
                      <li><strong>Project date</strong>{ date }</li>
                      <li><strong>Project URL</strong>: <a href={ liveUrl} target="_blank" rel="noopener noreferrer">{ name }</a></li>
                    </ul>
                  </div>
                  <div class="portfolio-description">
                    <h2>{ name }</h2>
                    <p>{ description }</p>
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
export default PortfolioDetails;