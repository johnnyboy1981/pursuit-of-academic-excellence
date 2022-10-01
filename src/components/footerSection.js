import * as React from "react"
import Layout from "../layout/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import {renderRichText} from "gatsby-source-contentful/rich-text"
import Heading from "./ui-items/heading"
import { GatsbyImage } from "gatsby-plugin-image"
import { FadeIn } from "react-slide-fade-in"


const FooterSection = () => {

  const data = useStaticQuery(
    graphql`query footerQuery {
      allContentfulHomePage {
        nodes {
          footerFeesBody {
            raw
          }
          footerFeesHeading
          footerImage {
            gatsbyImageData
            title
          }
          footerHeadingQuote
          footerStudentReviewsHeading
          footerWhatToExpectBody {
            raw
          }
          footerWhatToExpectHeading
          footerTestimonials {
            key
            value
          }
        }
      }
    }
    
    `
  )
  console.log(data.allContentfulHomePage.nodes[0])
  const pageData = data.allContentfulHomePage.nodes[0];

  return (
    
    <section className="px-[5%] py-[5%] md:px-[25%] md:py-[7%]">
      
      <Heading className="text-center my-20">{pageData.footerHeadingQuote}</Heading>
      <Heading className="text-center my-20">{pageData.footerWhatToExpectHeading}</Heading>
      {renderRichText(pageData.footerWhatToExpectBody)}
      <Heading className="text-center my-20">{pageData.footerFeesHeading}</Heading>
      <div className="text-center">
        {renderRichText(pageData.footerFeesBody)}
      </div>
      <FadeIn
              from="bottom"
              positionOffset={100}
              triggerOffset={200}
              delayInMilliseconds={400}>
      <GatsbyImage className="m-auto mt-20 block max-w-[100%]" image={pageData.footerImage.gatsbyImageData} alt=""/>
      </FadeIn>
      <Heading className="text-center my-20">{pageData.footerStudentReviewsHeading}</Heading>

      {
        pageData.footerTestimonials.map((testimonial) => {
          return(
            <FadeIn
              from="left"
              positionOffset={100}
              triggerOffset={0}
              delayInMilliseconds={200}>
                <div className="flex flex-col testimonial relative pl-20">
                  <span className="font-bold">{testimonial.value}</span>
                  <span className="my-4">&mdash; {testimonial.key}</span>
                </div>
              </FadeIn>
          )
        })
      }
      
      
    </section>
    
  )
}

export default FooterSection

