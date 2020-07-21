import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button className="ErrorButton">
        <AniLink
          swipe
          direction="left"
          to="/"
          // color="orange"
          duration={3}
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          Return Home
        </AniLink>
      </button>
      <br />
      <h1>Page Not Found</h1>
      <p>
        Im sorry but the page your trying to visit does not exist. If you think
        this is a mistake please feel free to contact me.
      </p>
    </div>
  </div>
)

export default NotFoundPage
