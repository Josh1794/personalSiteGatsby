import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Resume from "../components/resume"

export default function ResumePage() {
  return (
    <div title="My Resume" className="resumePage">
      <div className="resumePageTop">
        <h1 className="pageHeader">My Resume</h1>
        <AniLink
          className="resumePageButton"
          swipe
          direction="right"
          to=""
          duration={1}
        >
          <i className="fas fa-arrow-left"></i> Back
        </AniLink>
        <br />
      </div>
      <Resume />
    </div>
  )
}
