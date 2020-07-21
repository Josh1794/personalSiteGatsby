import React from "react"
import Cards from "./portfolioCards"

const Portfolio = () => (
  <div
    id="portfolioPage"
    className="portfolioPage"
    style={{
      borderBottomWidth: 1,
      borderBottomColor: "White",
      borderBottomStyle: "solid",
    }}
  >
    <br />
    <br />
    <div>
      <h2 className="pageHeader">My Portfolio</h2>
      <div>
        <h3 className="pageSubTitle" align="center">
          Check out some of my projects
        </h3>
        <Cards />
      </div>
    </div>
  </div>
)

export default Portfolio
