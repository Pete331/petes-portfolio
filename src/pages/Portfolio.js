import React from "react";
import Data from "../utils/PortfolioLinks.json";
import Project from "../components/Project";

function Portfolio() {
  return (
    <div className="container">
      <div className="row bg-white border border-secondary">
        <div className="col-12 p-4">
          <div className="border-bottom border-secondary mb-3">
            <h2 className="text-info">Portfolio</h2>
          </div>
          <div className="container-fluid mt-4">
            <div className="row">
              <Project data={Data[1]} />
              <Project data={Data[2]} />
              <Project data={Data[3]} />
              <Project data={Data[4]} />
              <Project data={Data[5]} />
              <Project data={Data[6]} />
              <Project data={Data[7]} />
              <Project data={Data[8]} />
              <Project data={Data[9]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
