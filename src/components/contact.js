import React from "react"
import data from "./data.json"

const Contact = () => (
  <div id="contactPage" class="contactPage">
    <h1>Contact Details</h1>
    <div class="contactInfo">
      <p className="address">
        <h4>Name:</h4>
        <h5>{data.main.name}</h5>
        <br />
        <h4>Phone:</h4>
        <h5>{data.main.phone}</h5>
        <br />
        <h4>Email:</h4>
        <a class="emailLink" href="mailto:josh1794@gmail.com">
          {data.main.email}
        </a>
      </p>
      <br />
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
  </div>
)

export default Contact
