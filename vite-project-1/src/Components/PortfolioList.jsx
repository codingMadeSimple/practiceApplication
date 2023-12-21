import React from "react";
import "../styles/Portfolio.scss";
import PortfolioListItem from "./PortfolioListItem";

function PortfolioList(props) {
  const portfolioArray = props.projectObject.map((project)=>{
    return <PortfolioListItem 
    key={project} 
    projectObject={project}
    />
  })

  return (
    <div>
      {portfolioArray}
    </div>

  );
}

export default PortfolioList;