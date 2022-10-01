import * as React from "react"


const Heading = (props) => {

    return (
    
        <h1 className={`font-alkalami text-3xl md:text-5xl leading-snug md:leading-snug ${props.className}`}>{props.children}</h1>
    
  )
}

export default Heading


