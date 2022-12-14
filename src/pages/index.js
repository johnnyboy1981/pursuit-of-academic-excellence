import * as React from "react"
import Layout from "../layout/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import HeroSection from "../components/heroSection"
import IntroSection from "../components/introSection"
import AboutMeSection from "../components/aboutMeSection"
import FooterSection from "../components/footerSection"

const IndexPage = () => {

  

  return (
    <Layout>
      <HeroSection></HeroSection>
      <IntroSection></IntroSection>
      <AboutMeSection></AboutMeSection>
      <FooterSection></FooterSection>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <><title>Pursuit of Academic Excellence | Dr. Amy McCroy</title><meta type="description" content="I offer academic tutoring and thesis mentoring to undergraduate, master's and doctoral students who are looking for assistance with any aspect of their academic journey." /></>
