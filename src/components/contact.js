import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Contact() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            name
            phone
            email
            resumedownload
          }
        }
      }
    `
  )
  const { name, phone, email, resumedownload } = site.siteMetadata

  return (
    <div
      id="contactPage"
      className="contactPage"
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "White",
        borderBottomStyle: "solid",
      }}
    >
      <br />
      <br />
      <div>
        <h2 className="pageHeader">Contact Details</h2>
        <div className="contactInfo">
          <div className="address">
            <h4>Name:</h4>
            <p>{name}</p>
            <br />
            <h4>Phone:</h4>
            <p>{phone}</p>
            <br />
            <h4>Email:</h4>
            <p>
              <a className="emailLink" href="mailto:josh1794@gmail.com">
                {email}
              </a>
            </p>
          </div>
          <br />
          <p>
            <a
              target="_blank"
              rel="noreferrer noopener"
              className="resumeButton"
              href={resumedownload}
              aria-label="My Resume "
            >
              My Resume <i className="fas fa-file"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
