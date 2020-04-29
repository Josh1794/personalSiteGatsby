/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "./navBar"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            borderTopColor: "black",
            borderTopStyle: "solid",
            borderTopWidth: 1,
          }}
        >
          <br />© {new Date().getFullYear()}, Built with
          {` `}
          <a style={{ color: "white" }} href="https://www.gatsbyjs.org">
            Gatsby
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
