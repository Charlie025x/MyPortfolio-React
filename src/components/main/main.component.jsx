import React, { Component } from 'react';
 
class Main extends Component {
    render() {
        return (

            <main id="main">

            {/* ======= About Section ======= */}
            <section id="about" class="about">
            <div class="container">

                <div class="section-title">
                <h2>About</h2>
                </div>

                <div class="row">
                <div class="col-lg-4" data-aos="fade-right">
                    <img src="assets/img/profile-img.jpg" class="img-fluid" alt=""/>
                </div>
                <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>Front End Web Developer.</h3>
                    <p class="fst-italic">
                    Hi, I'm a self-taught Front end Web Developer, born and raised in the state of Texas. For as far back as I can remember, I always loved makeing art and playing challenging games. Eventually I was introduced to web development, a profession that essientialy combines my two faviorite hobbies. Web Sites then became my canvas, VScode is my paint-brush, and programing became my faviorite game.
                    <br/>
                    I finally found my calling.
                    </p>
                    {/* <div class="row">
                    <div class="col-lg-6">
                        <ul>
                        <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span> </span></li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <ul>
                        <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span> </span></li>
                        </ul>
                    </div>
                    </div> */}
                    {/* <p>
                    </p> */}
                </div>
                </div>

            </div>
            </section>{/* End About Section */}

            {/* ======= Skills Section ======= */}
            <section id="skills" class="skills section-bg">
            <div class="container">

                <div class="section-title">
                <h2>Skills</h2>
                <p>Technologies I have utilized</p>
                </div>

                <div class="row skills-content">

                <div class="col-lg-6" data-aos="fade-up">

                    <div class="progress">
                    <span class="skill">HTML <i class="val">100%</i></span>
                    <div class="progress-bar-wrap">
                        <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                    <div class="progress">
                    <span class="skill">CSS <i class="val">90%</i></span>
                    <div class="progress-bar-wrap">
                        <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                    <div class="progress">
                    <span class="skill">JavaScript <i class="val">75%</i></span>
                    <div class="progress-bar-wrap">
                        <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                </div>

                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                    <div class="progress">
                    <span class="skill">React <i class="val">80%</i></span>
                    <div class="progress-bar-wrap">
                        <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                    <div class="progress">
                    <span class="skill">Sass <i class="val">90%</i></span>
                    <div class="progress-bar-wrap">
                        <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                    <div class="progress">
                    <span class="skill">Git <i class="val">80%</i></span>
                    <div class="progress-bar-wrap">
                        <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                </div>

                </div>

            </div>
            </section>{/* End Skills Section */}

            {/* ======= Resume Section ======= */}
            <section id="resume" class="resume">
            <div class="container">

                <div class="section-title">
                <h2>Resume</h2>
                {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                </div>

                <div class="row">
                <div class="col-lg-6" data-aos="fade-up">
                    <h3 class="resume-title">Sumary</h3>
                    <div class="resume-item pb-0">
                    <h4>Charlie Alonso</h4>
                    <p><em>An aspiring  self taught web developer. Chasing my dream of becoming a professional web developer, one step at a time. As of right now, I've been polishing my front-end skills with personal projects and research, and can now say with full confidence that I am ready to contribute to a team and further grow.</em></p>
                    <ul>
                        <li>(956) 278-0553</li>
                        <li>charliealonso002@gmail.com</li>
                    </ul>
                    </div>

                    <h3 class="resume-title">Education</h3>
                    <div class="resume-item">
                    <h4>Zero to Mastery Academy</h4>
                    {/* <h5>2015 - 2016</h5> */}
                    <p><em>Andrei Neagoie's Udemy Course</em></p>
                    </div>
                    <div class="resume-item">
                    <h4>Complete React Developer in 2021</h4>
                    <p><em>Andrei Neagoie's Udemy Course</em></p> 
                    </div>
                </div>
                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <h3 class="resume-title">Projects</h3>
                    <div class="resume-item">
                    <h4>CRWN Clothing</h4>
                    <p><em>E-commerce React app</em></p>
                    {/* <ul>
                        <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                        <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                        <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                        <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                    </ul> */}
                    </div>
                    {/* <div class="resume-item">
                    <h4>Graphic design specialist</h4>
                    <h5>2017 - 2018</h5>
                    <p><em>Stepping Stone Advertising, New York, NY</em></p>
                    <ul>
                        <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                        <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                        <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                        <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                    </ul>
                    </div> */}
                </div>
                </div>

            </div>
            </section>
            {/* End Resume Section */}

            {/* ======= Portfolio Section ======= */}
            <section id="portfolio" class="portfolio section-bg">
            <div class="container">

                <div class="section-title">
                <h2>Portfolio</h2>
                {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                </div>

                {/* <div class="row" data-aos="fade-up">
                <div class="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                    <li data-filter="*" class="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-card">Card</li>
                    <li data-filter=".filter-web">Web</li>
                    </ul>
                </div>
                </div> */}

                <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                {/* custom portfolio-item */}
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-crwn-clothing.png" class="img-fluid" alt="portfolio-crwn-clothing"/>
                    <div class="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-crwn-clothing.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                    <img src="assets/img/portfolio/react-quote-generator.png" class="img-fluid" alt=""/>
                    <div class="portfolio-links">
                        <a href="assets/img/portfolio/react-quote-generator.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>

                {/* <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt=""/>
                    <div class="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt=""/>
                    <div class="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                    </div>
                </div> */}

                {/* <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div class="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt=""/>
                    <div class="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt=""/>
                    <div class="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt=""/>
                    <div class="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div class="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt=""/>
                    <div class="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 1"><i class="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div class="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt=""/>
                    <div class="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3"><i class="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt=""/>
                    <div class="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                    </div>
                </div> */}

                </div>

            </div>
            </section>{/* End Portfolio Section */}

            {/* ======= Contact Section ======= */}
            <section id="contact" class="contact">
            <div class="container">

                <div class="section-title">
                <h2>Contact</h2>
                <p>Reach me though linkedin, email, or by phone.</p>
                </div>

                <div class="row" data-aos="fade-in">

                <div class="col-lg-5 d-flex align-items-stretch">
                    <div class="info">

                    <div class="email">
                        <i class="bi bi-envelope"></i>
                        <h4>Email:</h4>
                        <p>charliealonso002@example.com</p>
                    </div>

                    <div class="phone">
                        <i class="bi bi-phone"></i>
                        <h4>Call:</h4>
                        <p>956 278 0553</p>
                    </div>

                    </div>

                </div>

                {/* <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                    <div class="row">
                        <div class="form-group col-md-6">
                        <label for="name">Your Name</label>
                        <input type="text" name="name" class="form-control" id="name" required/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="name">Your Email</label>
                        <input type="email" class="form-control" name="email" id="email" required/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="name">Subject</label>
                        <input type="text" class="form-control" name="subject" id="subject" required/>
                    </div>
                    <div class="form-group">
                        <label for="name">Message</label>
                        <textarea class="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <div class="my-3">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div class="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div> */}

                </div>

            </div>
            </section>{/* End Contact Section */}

            </main>
        )
    }
}
export default Main;