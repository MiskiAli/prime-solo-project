import React from 'react';
import "./AboutPage.css";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>

        <h3>Technologies I used</h3>
        <form className="about-form">
        <ul>
          <li>React</li>
          <li>Redux-Sagas</li>
          <li>CSS</li>
          <li>Material UI</li>
          <li>Sweet Alerts</li>
          <li>PostgresSQL</li>
        </ul>
        </form>

        <h3>What is next for my app?</h3>
        <form className="about-form" >
        <ul>
          <li>Add a cart and payment</li>
          <li>Add filtering system</li>
          <li> Ability to upload products on the admin side</li>
        </ul>
        </form>

        <h3>Thanks to:</h3>
        <form className="about-form">
        <ul>
          <li>The Great Jemisin cohort!</li>
          <li>Our super supportive instrutor Liz and everyone at Prime</li>
          <li>Friends & Family</li>
        </ul>
        </form>

        <p></p>
      </div>
    </div>
  );
}

export default AboutPage;
