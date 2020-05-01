import React from "react"
import JS from "./skillsImages/javascript"
import ReactLogo from "./skillsImages/react"
import GatsbyLogo from "./skillsImages/gatsbyLogo"
import Next from "./skillsImages/next"
import NodeLogo from "./skillsImages/node"
import Redux from "./skillsImages/redux"
import Postgres from "./skillsImages/postgres"
import VS from "./skillsImages/vscode"

export default function SkillCards() {
  return (
    <div>
      <div class="skillsSection">
        <div class="skillContent">
          <div class="skills">
            <JS />
            <h6>Javascript</h6>
          </div>
          <div class="skills">
            <ReactLogo />
            <h6>React.JS</h6>
          </div>
          <div class="skills">
            <ReactLogo />
            <h6>React Native</h6>
          </div>
          <div class="skills">
            <GatsbyLogo />
            <h6>Gatsby.js</h6>
          </div>
          <div class="skills">
            <Next />
            <h6>Next.js </h6>
          </div>
          <div class="skills">
            <Redux />
            <h6>Redux </h6>
          </div>
          <div class="skills">
            <NodeLogo />
            <h6>Node.js </h6>
          </div>
          <div class="skills">
            <h6>Express </h6>
          </div>
          <div class="skills">
            <h6>Sequelize.js </h6>
          </div>
          <div class="skills">
            <Postgres />
            <h6>PostgreSQL </h6>
          </div>
          <div class="skills">
            <i class="fab fa-github" style={{ fontSize: "60px" }}></i>
            <h6>Github </h6>
          </div>
          <div class="skills">
            <i class="fab fa-git-alt" style={{ fontSize: "60px" }}></i>
            <h6> Git </h6>
          </div>
          <div class="skills">
            <VS />
            <h6>VS Code </h6>
          </div>
        </div>
      </div>
    </div>
  )
}
