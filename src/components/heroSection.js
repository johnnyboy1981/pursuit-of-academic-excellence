import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Heading from '../components/ui-items/heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons"

const HeroSection = () => {

  const data = useStaticQuery(
    graphql`query MyQuery {  
      allContentfulHomePage {
        nodes {
          heroSubTitle
          heroText
          heroImage {
            gatsbyImageData(layout: FULL_WIDTH)
          }  
        }
      }
    }`
  )

  const scrollToIntro = () => {
    document.getElementById('intro').scrollIntoView({ behavior: 'smooth', block: 'start' });

  }

  const pageData = data.allContentfulHomePage.nodes[0];

  return (
    
    <section className="relative flex justify-center w-full h-screen">
      <GatsbyImage className="absolute w-full h-screen top-0 right-0 -z-50" style={{ position: "absolute" }} image={pageData.heroImage.gatsbyImageData} alt=""/>
      <div className="absolute w-full h-screen top-0 right-0 -z-25 bg-black-overlay"></div>
      <div className="flex flex-col justify-center items-center text-white z-10 text-center">
        <Heading className="text-5xl max-w-2xl leading-snug">{pageData.heroText}</Heading>
        <h2 className="text-sm">{pageData.heroSubTitle}</h2>
        <FontAwesomeIcon className="mt-10 hover:cursor-pointer hover:scale-110 duration-500" size="2x" icon={faAnglesDown} onClick={scrollToIntro} />
      </div>
    </section>
    
  )
}

export default HeroSection

export const Head = () => <title>Home Page</title>
