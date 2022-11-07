import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Charlie Alonso</h1>
          <p>
            I'm a{" "}
            <span
              className="typed"
              data-typed-items="Designer, Developer, Researcher, Problem Solver, Engineer, Self Starter, Artist"
            ></span>
          </p>
        </div>
      </section>
    );
  }
}
export default Hero;
