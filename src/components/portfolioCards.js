import React from "react"
import Cart from "./portfolioImages/cart"
import Sensor from "./portfolioImages/Sensor"
import YBR from "./portfolioImages/ybr"
import Weather from "./portfolioImages/weather"
import Recipe from "./portfolioImages/recipe"
import BLM from "./portfolioImages/blm"

export default function Cards() {
  return (
    <div>
      <div className="portfolioProjects">
        <div data-sal="fade" id="splashAnimation">
          <a
            target="_blank"
            className="projects"
            href="https://github.com/thunky-monks/graceshopper"
            rel="noreferrer noopener"
          >
            <Cart />
            <div className="projectSubsection">
              <h6 className="portfolioSubTitle">E-Commerce-Commerce</h6>
            </div>
          </a>
        </div>
        <div data-sal="fade" id="splashAnimation">
          <a
            target="_blank"
            className="projects"
            href="https://github.com/Josh1794/Sensor-app"
            rel="noreferrer noopener"
            data-sal="fade"
            id="splashAnimation"
          >
            <Sensor />
            <div className="projectSubsection">
              <h6 className="portfolioSubTitle">Sensors App</h6>
            </div>
          </a>
        </div>
        <div data-sal="fade" id="splashAnimation">
          <a
            target="_blank"
            className="projects"
            href="https://github.com/Thunkaroos/YellowBrickRoad"
            rel="noreferrer noopener"
            data-sal="fade"
            id="splashAnimation"
          >
            <YBR />
            <div className="projectSubsection">
              <h6 className="portfolioSubTitle">Yellow Brick Road</h6>
            </div>
          </a>
        </div>
        <div data-sal="fade" id="splashAnimation">
          <a
            target="_blank"
            className="projects"
            href="https://github.com/Josh1794/myWeatherApp"
            rel="noreferrer noopener"
            data-sal="fade"
            id="splashAnimation"
          >
            <Weather />
            <div className="projectSubsection">
              <h6 className="portfolioSubTitle">Weather App</h6>
            </div>
          </a>
        </div>
        <div data-sal="fade" id="splashAnimation">
          <a
            target="_blank"
            className="projects"
            href="https://github.com/Josh1794/recipeBook"
            rel="noreferrer noopener"
            data-sal="fade"
            id="splashAnimation"
          >
            <Recipe />
            <div className="projectSubsection">
              <h6 className="portfolioSubTitle">Recipe Book</h6>
            </div>
          </a>
        </div>
        <div data-sal="fade" id="splashAnimation">
          <a
            target="_blank"
            className="projects"
            href="https://github.com/Team-5-Data-Dashboard/Data-Dashboard"
            rel="noreferrer noopener"
            data-sal="fade"
            id="splashAnimation"
          >
            <BLM />
            <div className="projectSubsection">
              <h6 className="portfolioSubTitle">BLM Data Dashboard</h6>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
