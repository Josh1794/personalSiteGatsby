import React from "react"
import JS from "./skillsImages/javascript"
import ReactLogo from "./skillsImages/react"
import GatsbyLogo from "./skillsImages/gatsbyLogo"
import Next from "./skillsImages/next"
import NodeLogo from "./skillsImages/node"
import Redux from "./skillsImages/redux"
import Postgres from "./skillsImages/postgres"
import VS from "./skillsImages/vscode"
import TS from "./skillsImages/typescript"
import Mongo from "./skillsImages/mongoDB"
import Sequelize from "./skillsImages/sequelize"
import Express from "./skillsImages/express"
import SassLogo from "./skillsImages/sass"
import Html from "./skillsImages/html"
import Css from "./skillsImages/css"
import Netlify from "./skillsImages/netlify"

export default function SkillCards() {
  // if (window.screen.width > 600) {
  return (
    <div>
      <div className="skillsSection">
        <div className="skillContent">
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <JS />
              <span className="tooltiptext">Javascript</span>
            </div>
          </div>
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <TS />
              <span className="tooltiptext">Typescript</span>
            </div>
          </div>
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <Html />
              <span className="tooltiptext">HTML 5</span>
            </div>
          </div>
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <Css />
              <span className="tooltiptext">CSS 3</span>
            </div>
          </div>
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <SassLogo />
              <span className="tooltiptext">SASS/SCSS</span>
            </div>
          </div>
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <ReactLogo />
              <span className="tooltiptext">React / React Native</span>
            </div>
          </div>
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <GatsbyLogo />
              <span className="tooltiptext">Gatsby</span>
            </div>
          </div>
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <Next />
              <span className="tooltiptext">Next.js</span>
            </div>
          </div>
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <Redux />
              <span className="tooltiptext">Redux</span>
            </div>
          </div>
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <NodeLogo />
              <span className="tooltiptext">NodeJS</span>
            </div>
          </div>
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <Express />
              <span className="tooltiptext">ExpressJS</span>
            </div>
          </div>
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <Sequelize />
              <span className="tooltiptext">SequelizeJS</span>
            </div>
          </div>
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <Postgres />
              <span className="tooltiptext">PostgreSQL</span>
            </div>
          </div>
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <Mongo />
              <span className="tooltiptext">MongoDB</span>
            </div>
          </div>
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <i className="fab fa-github" style={{ fontSize: "60px" }}></i>
              <span className="tooltiptext">Github</span>
            </div>
          </div>
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <i className="fab fa-git-alt" style={{ fontSize: "60px" }}></i>
              <span className="tooltiptext">Git</span>
            </div>{" "}
          </div>
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <svg
                width="60"
                // height="60"
                viewBox="0 0 283 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                  fill="#000"
                />
              </svg>
              <span className="tooltiptext">Vercel</span>
            </div>
          </div>
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <Netlify />
              <span className="tooltiptext">Netlify</span>
            </div>
          </div>
          <div className="skills" data-sal="fade" id="splashAnimation">
            <div className="tooltip">
              <VS />
              <span className="tooltiptext">VS Code</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  // } else {
  //   // LABELS W/O TOOLTIPS
  //   return (
  //     <div>
  //       <div className="skillsSection">
  //         <div className="skillContent">
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <JS />
  //             <h6>Javascript</h6>
  //           </div>
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <TS />
  //             <h6>Typescript</h6>
  //           </div>
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <Html />
  //             <h6>HTML 5</h6>
  //           </div>
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <Css />
  //             <h6>CSS 3</h6>
  //           </div>
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <SassLogo />
  //             <h6>SASS/SCSS</h6>
  //           </div>
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <ReactLogo />
  //             <h6>React</h6>
  //           </div>
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <ReactLogo />
  //             <h6>React Native</h6>
  //           </div>
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <GatsbyLogo />
  //             <h6>Gatsby</h6>
  //           </div>
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <Next />
  //             <h6>Next.js </h6>
  //           </div>
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <Redux />
  //             <h6>Redux </h6>
  //           </div>
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <NodeLogo />
  //             <h6>Node </h6>
  //           </div>
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <Express />
  //             <br />
  //             <h6>Express </h6>
  //           </div>
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <Sequelize />
  //             <h6>Sequelize </h6>
  //           </div>
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <Postgres />
  //             <h6>PostgreSQL </h6>
  //           </div>
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <Mongo />
  //             <h6>MongoDB </h6>
  //           </div>
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <i className="fab fa-github" style={{ fontSize: "60px" }}></i>
  //             <h6>Github </h6>
  //           </div>
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <i className="fab fa-git-alt" style={{ fontSize: "60px" }}></i>
  //             <h6> Git </h6>
  //           </div>
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <VS />
  //             <h6>VS Code </h6>
  //           </div>
  //           <div className="skills" data-sal="fade" id="splashAnimation">
  //             <svg
  //               width="60"
  //               height="60"
  //               viewBox="0 0 283 64"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
  //                 fill="#000"
  //               />
  //             </svg>
  //             <h6>Vercel</h6>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
}
