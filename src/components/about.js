import React from "react"
import Image from "./image"

import data from "./data.json"

export default function About() {
  return (
    <div id="aboutPage" class="aboutPage">
      {/* <div data-sal="fade" id="aboutAnimation"> */}
      <h1>
        About me
        <Image />
      </h1>
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
      {/* </div> */}
    </div>
  )
}
