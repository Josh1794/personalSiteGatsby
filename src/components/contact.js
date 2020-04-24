import React from "react"
import data from "./data.json"

const Contact = props => (
  <div id="contactPage" class="contactPage">
    <h1>Get in touch</h1>
    <h2>Contact Details</h2>
    <p className="address">
      <span>{data.main.name}</span>
      <br />
      <span>{data.main.phone}</span>
      <br />
      <span>{data.main.email}</span>
    </p>
    <p>
      <a href={data.main.resumeDownload} className="button">
        <i className="fa fa-download"></i>
        My Resume
      </a>
    </p>
  </div>
)

export default Contact
