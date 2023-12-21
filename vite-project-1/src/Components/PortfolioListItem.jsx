import React from "react";

function PortfolioListItem(props) {

  console.log(props);


  return (
    <div className="page-margin">
      <div className="portfolio-image-description margin-top">
        <div className="margin-top">
          <h1 className="space-apart">{props.projectObject.projectName}</h1>
          <div>{props.projectObject.projectDescription}</div>
          <div>
            <h2>Tech Stack</h2>
            <>
              <h4>Front End</h4>
              <div>{props.projectObject.frontendStack}</div>
            </>
            <>
              <h4>Back End</h4>
              <div>{props.projectObject.backendStack}</div>
            </>
            <>
              <h4>Api's and Libraries</h4>
              <div>{props.projectObject.apis}</div>
            </>
          </div>
        </div>
        <a href="https://github.com/codingMadeSimple/Charcoal-Cabernet">
          <img className="margin-top" src="https://raw.githubusercontent.com/NeonWaffles222/Charcoal-Cabernet/master/docs/Top%20of%20Homepage.png" alt="Charcoal and Cabernet Screenshot Placeholder" ></img>
        </a>
      </div>
    </div>

  );
}

export default PortfolioListItem;