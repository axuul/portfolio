import React from "react"

// Import Sub elements
import Top from "./top"
import Bottom from "./bottom"

// Import Elements
import Section from "elements/section"

const Footer = ({props}) => {
  return (
    <Section className="footer">
      <Top />
      <Bottom />
    </Section>
  )
}

export default Footer