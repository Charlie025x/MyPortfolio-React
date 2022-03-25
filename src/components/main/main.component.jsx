import React, { Component } from "react";

import PortfolioSection from "../portfolio-section/portfolio-section.component";

class Main extends Component {
  render() {
    return (
      <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>About</h2>
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img
                  src="assets/img/profile-img.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div
                className="col-lg-8 pt-4 pt-lg-0 content"
                data-aos="fade-left"
              >
                <h3>Front End Web Developer.</h3>
                <p className="fst-italic">
                  Hi, I'm a self-taught Front end Web Developer, born and raised
                  in the state of Texas. For as far back as I can remember, I
                  always loved makeing art and playing challenging games.
                  Eventually I was introduced to web development, a profession
                  that essientialy combines my two favorite hobbies. Web Sites
                  then became my canvas, VScode is my paint-brush, and
                  programing became my favorite game.
                  <br />I finally found my calling.
                </p>
                {/* <div className="row">
                    <div className="col-lg-6">
                        <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span> </span></li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span> </span></li>
                        </ul>
                    </div>
                    </div> */}
                {/* <p>
                    </p> */}
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}

        {/* ======= Skills Section ======= */}
        <section id="skills" className="skills section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Skills</h2>
              <p>Technologies I have utilized</p>
            </div>

            <div className="row skills-content">
              <div className="col-lg-6" data-aos="fade-up">
                <div className="progress">
                  <span className="skill">
                    HTML <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    JavaScript <i className="val">75%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="progress">
                  <span className="skill">
                    React <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Sass <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Git <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Skills Section */}

        {/* ======= Resume Section ======= */}
        <section id="resume" className="resume">
          <div className="container">
            <div className="section-title">
              <h2>Resume</h2>
              {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">Sumary</h3>
                <div className="resume-item pb-0">
                  <h4>Charlie Alonso</h4>
                  <p>
                    <em>
                      An aspiring self taught web developer. Chasing my dream of
                      becoming a professional web developer, one step at a time.
                      As of right now, I've been polishing my front-end skills
                      with personal projects and research, and can now say with
                      full confidence that I am ready to contribute to a team
                      and further grow.
                    </em>
                  </p>
                  <ul>
                    <li>(956) 278-0553</li>
                    <li>charliealonso002@gmail.com</li>
                  </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Zero to Mastery Academy</h4>
                  {/* <h5>2015 - 2016</h5> */}
                  <p>
                    <em>Andrei Neagoie's Udemy Course</em>
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Complete React Developer in 2021</h4>
                  <p>
                    <em>Andrei Neagoie's Udemy Course</em>
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Associate's degree in interdisciplinary studies</h4>
                  <p>
                    <em>South Texas College</em>
                  </p>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Projects</h3>
                <div className="resume-item">
                  <h4>CRWN Clothing</h4>
                  <p>
                    <em>E-commerce React app</em>
                  </p>
                  {/* <ul>
                        <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                        <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                        <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                        <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                    </ul> */}
                </div>
                {/* <div className="resume-item">
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

        <PortfolioSection />

        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
              <p>Reach me though linkedin, email, or by phone.</p>
            </div>

            <div className="row" data-aos="fade-in">
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>charliealonso2001@gmail.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>956 292 9046</p>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="row">
                        <div className="form-group col-md-6">
                        <label for="name">Your Name</label>
                        <input type="text" name="name" className="form-control" id="name" required/>
                        </div>
                        <div className="form-group col-md-6">
                        <label for="name">Your Email</label>
                        <input type="email" className="form-control" name="email" id="email" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="name">Subject</label>
                        <input type="text" className="form-control" name="subject" id="subject" required/>
                    </div>
                    <div className="form-group">
                        <label for="name">Message</label>
                        <textarea className="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div> */}
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
    );
  }
}
export default Main;
