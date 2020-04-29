import React from "react"
import Cart from "./portfolioImages/cart"
import Sensor from "./portfolioImages/Sensor"
import YBR from "./portfolioImages/ybr"
import Weather from "./portfolioImages/weather"
import Recipe from "./portfolioImages/recipe"

const Portfolio = () => (
  <div id="portfolioPage" class="portfolioPage">
    <br />
    <br />
    <div>
      <h2>My Portfolio</h2>
      <div>
        <h3 align="center">Check out some of my projects</h3>
        <div class="portfolioProjects">
          <a
            class="projects"
            href="https://github.com/thunky-monks/graceshopper"
          >
            <Cart />
            <h6 class="portfolioSubTitle">E-Commerce-Commerce</h6>
          </a>
          <a class="projects" href="https://github.com/Josh1794/Sensor-app">
            <Sensor />
            <h6 class="portfolioSubTitle">Sensors App</h6>
          </a>
          <a
            class="projects"
            href="https://github.com/Thunkaroos/YellowBrickRoad"
          >
            <YBR />
            <h6 class="portfolioSubTitle">Yellow Brick Road</h6>
          </a>
          <a class="projects" href="https://github.com/Josh1794/myWeatherApp">
            <Weather />
            <h6 class="portfolioSubTitle">Weather App</h6>
          </a>
          <a class="projects" href="https://github.com/Josh1794/recipeBook">
            <Recipe />
            <h6 class="portfolioSubTitle">Recipe Book</h6>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Portfolio
