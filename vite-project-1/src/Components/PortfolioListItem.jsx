import React from "react";

function PortfolioListItem(props) {

  console.log(props);


  return (
    <div className="page-margin">
      <div className="portfolio-image-description margin-top">
        <div className="margin-top">
          <h1 className="space-apart title-color">{props.projectObject.projectName}</h1>
          <div>{props.projectObject.projectDescription}</div>
          <div>
            <h1 className="title-color">Tech Stack</h1>
            <>
              <div><h2 className="text-color">Front End</h2>- {props.projectObject.frontendStack}</div>
            </>
            <>
              <h2 className="text-color">Back End</h2>- {props.projectObject.backendStack}
            </>
            <>
              <h2 className="text-color">Api's and Libraries</h2> - {props.projectObject.apis}
            </>
            <div >
                <div className="collaborator-sizing">
                  <h2 className="text-color">Collaborators</h2>{props.projectObject.partners.Steven.name}
                  <a href={props.projectObject.partners.Steven.linkedIn}><div className="link-color">Linked In</div></a>
                  <a href={props.projectObject.partners.Steven.github}><div className="link-color">Github</div></a>
                </div>
                <div className="collaborator-sizing">
                  {props.projectObject.partners.Noah.name}
                  <a href={props.projectObject.partners.Noah.linkedIn}><div className="link-color">Linked In</div></a>
                  <a href={props.projectObject.partners.Noah.github}><div className="link-color">Github</div></a>
                </div>
            </div>
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