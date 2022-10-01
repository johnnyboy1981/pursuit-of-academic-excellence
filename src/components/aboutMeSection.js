import * as React from "react"
import Layout from "../layout/layout"
import Heading from "./ui-items/heading"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Button from '../components/ui-items/button'



const AboutMeSection = () => {


  const data = useStaticQuery(
    graphql`query AboutMeQuery {
      allContentfulHomePage {
        nodes {
          aboutMeButtons {
            key
            value
          }
          aboutMeHeading
          aboutMeImage {
            gatsbyImageData
            title
          }
          aboutMeSideImage{
            gatsbyImageData
            
          }
          aboutMeLowerBody {
            raw
          }
          aboutMeUpperBody {
            raw
          }
          heroImage{
            gatsbyImageData
          }
        }
      }
    }
    `
  )

  const pageData = data.allContentfulHomePage.nodes[0];
    
  return (
    
    <section className="relative flex w-full">
      
      <div className="hidden md:block md:w-1/2">
        <GatsbyImage className="top-0 right-0 -z-50 sticky h-screen" style={{ position: "absolute" }} objectFit="cover" objectPosition="left" image={pageData.aboutMeSideImage.gatsbyImageData} alt=""/>
      </div>
      <div className="md:w-1/2 px-5 md:px-20">
        <Heading className="text-center mb-10">{pageData.aboutMeHeading}</Heading>
        <GatsbyImage className="m-auto block max-w-[250px]" image={pageData.aboutMeImage.gatsbyImageData} alt=""/>
        <span className="text-sm text-center block mt-2">{pageData.aboutMeImage.title}</span>
        
        
        {renderRichText(pageData.aboutMeUpperBody)}
        
        <div className="py-20 flex flex-col items-center gap-5">
          {pageData.aboutMeButtons.map((button) => {
            return(
              <Button url={button.value}> {button.key}</Button>
            )
          })}
        </div>
        {renderRichText(pageData.aboutMeLowerBody)}
       
      </div>

      
    </section>
    
  )
}

export default AboutMeSection


