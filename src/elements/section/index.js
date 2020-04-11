// Import React
import React from "react"

// Import Libraries
import { Section as RbxSection } from "rbx"

const Section = props => {
  return (
    <RbxSection {...props}>
      {props.children}
    </RbxSection>
  )
}

export default Section