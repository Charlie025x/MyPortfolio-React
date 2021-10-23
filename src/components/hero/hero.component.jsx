import React, { Component } from 'react';
 
class Hero extends Component {
    render() {
        return (
            <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
                <div class="hero-container" data-aos="fade-in">
                    <h1>Charlie Alonso</h1>
                    <p>I'm a <span class="typed" data-typed-items="Designer, Developer, Researcher"></span></p>
                </div>
            </section>
        )
    }
}
export default Hero;