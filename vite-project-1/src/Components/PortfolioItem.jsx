import React from "react";
import "../styles/Portfolio.scss";
import PortfolioList from "./PortfolioList";

function Portfolio(props) {
  return (
    <div className="page-margin">
      <PortfolioList />
    </div>

  );
}

export default Portfolio;