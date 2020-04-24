import React from "react"
import data from "./data.json"

const About = () => (
  <div id="aboutPage" class="aboutPage">
    <h1>About me</h1>
    <body>{data.main.bio}</body>
    <br />

    <body>{data.main.tech}</body>
    <br />
    <ul>
      <li>JavaScript (ES6+)</li>
      <li>ReactJS</li>
      <li>React-Native</li>
      <li>Gatsby.js</li>
      <li>Next.js</li>
      <li>Redux.js</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>Sequelize.js</li>
      <li>PostgreSQL</li>
    </ul>
  </div>
)

export default About
