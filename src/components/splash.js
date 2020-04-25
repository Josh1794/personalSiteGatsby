import React from "react"
import SVGTitle from "./titleSVG"
import data from "./data.json"
const Splash = () => (
  <div class="headerPage">
    <SVGTitle />
    <h3 class="subTitle" align="center">
      {data.main.description}
    </h3>
  </div>
)

export default Splash
