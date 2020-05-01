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
          }
        }
      }
    `
  )
  const name = site.siteMetadata.name
  const phone = site.siteMetadata.phone
  const email = site.siteMetadata.email

  return (
    <div
      id="contactPage"
      class="contactPage"
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "White",
        borderBottomStyle: "solid",
      }}
    >
      <br />
      <br />
      <div>
        <h2 class="pageHeader">Contact Details</h2>
        <div class="contactInfo">
          <p className="address">
            <h4>Name:</h4>
            <h4>{name}</h4>
            <br />
            <h4>Phone:</h4>
            <h4>{phone}</h4>
            <br />
            <h4>Email:</h4>
            <a class="emailLink" href="mailto:josh1794@gmail.com">
              {email}
            </a>
          </p>
          <br />
          <p>
            <a
              target="_blank"
              rel="noreferrer noopener"
              class="resumeButton"
              href="https://drive.google.com/open?id=1ziiW5NfAuwIiLqVbRas_qrdixoK8Wshu"
              aria-label="My Resume "
            >
              My Resume <i class="fas fa-download"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
