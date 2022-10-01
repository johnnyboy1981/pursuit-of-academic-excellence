import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const Button = (props) => {

    
    const icon = props.children[1] === 'LinkedIn' ? <FontAwesomeIcon icon={faLinkedin} /> : <FontAwesomeIcon icon={faTwitter} />;

    return (
    
        <a className={`text-xl leading-snug font-bold bg-black text-white px-5 py-2 rounded-md bg-button hover:bg-button-hover`} href={props.url} target="_blank"><span className="mr-2">{icon}</span>{props.children}</a>
    
  )
}

export default Button


