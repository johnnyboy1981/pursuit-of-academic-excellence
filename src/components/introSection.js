import * as React from "react"
import Layout from "../layout/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import {renderRichText} from "gatsby-source-contentful/rich-text"
import Heading from "./ui-items/heading"

const IntroSection = () => {

  const data = useStaticQuery(
    graphql`query IntroQuery {
      allContentfulHomePage {
        nodes {
          introQuote {
            raw
          }
          introHeading
          introBody {
            raw
          }
        }
      }
    }
    `
  )
  console.log(data.allContentfulHomePage.nodes[0])
  const pageData = data.allContentfulHomePage.nodes[0];

  return (
    
    <section id="intro" className="px-[5%] py-[5%] md:px-[25%] md:py-[7%]">
      
      {renderRichText(pageData.introQuote)}
      <Heading className="text-center my-20">{pageData.introHeading}</Heading>
      {renderRichText(pageData.introBody)}
      
    </section>
    
  )
}

export default IntroSection

export const Head = () => <title>Home Page</title>
