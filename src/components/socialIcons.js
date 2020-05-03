import React from "react"

export default function SocialIcons() {
  return (
    <div>
      <a
        aria-label="Linkedin Profile"
        href="https://www.linkedin.com/in/joshua-grossman17/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a
        aria-label="Github Profile"
        href="https://github.com/Josh1794"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i class="fab fa-github"></i>
      </a>
      <a
        aria-label="Twitter Profile"
        href="https://twitter.com/Coding_Ginger"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i aria-hidden="false" class="fab fa-twitter"></i>
      </a>
      <a
        aria-label="Stack Overflow Profile"
        href="https://stackoverflow.com/users/12751027/josh"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i class="fab fa-stack-overflow"></i>
      </a>
    </div>
  )
}
