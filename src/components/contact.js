import React from "react"
import data from "./data.json"

const Contact = () => (
  <div id="contactPage" class="contactPage">
    <h1>Contact Details</h1>
    <p className="address">
      <span>{data.main.name}</span>
      <br />
      <span>{data.main.phone}</span>
      <br />
      <a class="emailLink" href="mailto:josh1794@gmail.com">
        {data.main.email}
      </a>
    </p>
    <p>
      <a
        class="resumeButton"
        href="../../public/Joshua Grossman's Resume (Alt Format).pdf"
        download
      >
        My Resume
      </a>
    </p>
  </div>
)

export default Contact
