import React from "react"
import Cart from "./portfolioImages/cart"
import Sensor from "./portfolioImages/Sensor"
import YBR from "./portfolioImages/ybr"
import Weather from "./portfolioImages/weather"
import Recipe from "./portfolioImages/recipe"

export default function Cards() {
  return (
    <div>
      <div class="portfolioProjects">
        <a
          target="_blank"
          class="projects"
          href="https://github.com/thunky-monks/graceshopper"
          rel="noreferrer noopener"
          data-sal="fade"
          id="splashAnimation"
        >
          <Cart />
          <div class="projectSubsection">
            <h6 class="portfolioSubTitle">E-Commerce-Commerce</h6>
          </div>
        </a>
        <a
          target="_blank"
          class="projects"
          href="https://github.com/Josh1794/Sensor-app"
          rel="noreferrer noopener"
          data-sal="fade"
          id="splashAnimation"
        >
          <Sensor />
          <div class="projectSubsection">
            <h6 class="portfolioSubTitle">Sensors App</h6>
          </div>
        </a>
        <a
          target="_blank"
          class="projects"
          href="https://github.com/Thunkaroos/YellowBrickRoad"
          rel="noreferrer noopener"
          data-sal="fade"
          id="splashAnimation"
        >
          <YBR />
          <div class="projectSubsection">
            <h6 class="portfolioSubTitle">Yellow Brick Road</h6>
          </div>
        </a>
        <a
          target="_blank"
          class="projects"
          href="https://github.com/Josh1794/myWeatherApp"
          rel="noreferrer noopener"
          data-sal="fade"
          id="splashAnimation"
        >
          <Weather />
          <div class="projectSubsection">
            <h6 class="portfolioSubTitle">Weather App</h6>
          </div>
        </a>
        <a
          target="_blank"
          class="projects"
          href="https://github.com/Josh1794/recipeBook"
          rel="noreferrer noopener"
          data-sal="fade"
          id="splashAnimation"
        >
          <Recipe />
          <div class="projectSubsection">
            <h6 class="portfolioSubTitle">Recipe Book</h6>
          </div>
        </a>
      </div>
    </div>
  )
}
