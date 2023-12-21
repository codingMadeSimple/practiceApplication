import React from "react";
import '../styles/LandingPage.scss';


function LandingPage(props) {
  return (
    <div className="page-margin">
      <div className="profile-description ">
        <img src="docs/Headshot1.jpg" className="headshot-sizing horizonal-padding"></img>
        <div className="horizonal-padding">I am a LightHouseLabs Web Development Graduate and a Full Stack Web Developer who leans slightly towards frontend. From Climbing to Coding and everything in-between. I would love to meet and collaborate with others in the industry to grow my knowledge and abilities.</div>
      </div>

      <div className="project-image-description">
        <div>
          A web application for restaurants that allows users to reserve specific seating while booking a reservation. A user can register and log in. A user is able to store their favorites between sessions. A user will also receive texts that update their delivery status.
        </div>
        <a href="https://github.com/codingMadeSimple/Charcoal-Cabernet">
          <img className="margin-top" src="https://raw.githubusercontent.com/NeonWaffles222/Charcoal-Cabernet/master/docs/Top%20of%20Homepage.png" alt="Charcoal and Cabernet Screenshot Placeholder" ></img>
        </a>
      </div>
      <div className="horizonal-padding">
        <img src="docs/Wedding Photo.jpg" className="wedding-photo"></img>
        <div>Why the gap on github? Because I got Married!</div>
      </div>
    </div>
  );
}

export default LandingPage;