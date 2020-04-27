import React from "react"
import SVGTitle from "./titleSVG"
import data from "./data.json"
const Splash = () => (
  <div class="splash">
    <div class="headerPage">
      <div id="splashAnimation" data-sal="slide-up">
        <SVGTitle />
        <h3 class="subTitle" align="center">
          {data.main.description}
        </h3>
      </div>
      <section>
        <div class="skewed"></div>
      </section>
    </div>
  </div>
)

export default Splash
