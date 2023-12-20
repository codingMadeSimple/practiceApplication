import React from "react";

function PortfolioList(props) {
  return (
  <div className="page-margin">
      <div className="portfolio-image-description">
        <div>
          <h2>Charcoal & Cabernet</h2>
          <div>A web application for restaurants that allows users to reserve specific seating while booking a reservation. A user can register and log in. A user is able to store their favorites between sessions. A user will also recieve texts that update their delivery status.</div>
          <div>
            <h3>Tech Stack</h3>
            <div>React front-end, Ruby on Rails back-end, CSS, SCSS, Stripe, Twilio,
              Material-UI, React Router</div>
          </div>
        </div>
        <a href="https://github.com/codingMadeSimple/Charcoal-Cabernet">
          <img className="top-margin" src="https://raw.githubusercontent.com/NeonWaffles222/Charcoal-Cabernet/master/docs/Top%20of%20Homepage.png" alt="Charcoal and Cabernet Screenshot Placeholder" ></img>
        </a>
      </div>
  </div>

)}

export default PortfolioList