import React from "react"
import Layout from "../components/layout"
import Splash from "../components/splash"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"
import SEO from "../components/seo"
import Skills from "../components/skills"

export default function IndexPage() {
  console.log(
    "\n\
    ╭━━╮╭━━━┳━━━┳━━━╮╭╮╱╱╭┳━━━┳╮╱╭╮\n\
    ╰┫┣╯┃╭━╮┃╭━━┫╭━━╯┃╰╮╭╯┃╭━╮┃┃╱┃┃\n\
    ╱┃┃╱┃╰━━┫╰━━┫╰━━╮╰╮╰╯╭┫┃╱┃┃┃╱┃┃\n\
    ╱┃┃╱╰━━╮┃╭━━┫╭━━╯╱╰╮╭╯┃┃╱┃┃┃╱┃┃\n\
    ╭┫┣╮┃╰━╯┃╰━━┫╰━━╮╱╱┃┃╱┃╰━╯┃╰━╯┃\n\
    ╰━━╯╰━━━┻━━━┻━━━╯╱╱╰╯╱╰━━━┻━━━╯\n\
    "
  )
  return (
    <Layout>
      <SEO title="Joshua Grossman" />
      <Splash />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </Layout>
  )
}
