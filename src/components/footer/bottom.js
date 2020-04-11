// Import React
import React from "react"

// Import Elements
import Section from "elements/section"

// Import Libraries
import { Column } from "rbx"

const Bottom = ({copyDate}) => {
  return (
    <Section className="footer-bottom">
      <Column.Group>
        <Column className="has-text-centered">
          Derechos Reservados {copyDate}
        </Column>
      </Column.Group>
    </Section>
  )
}

Bottom.defaultProps = {
  copyDate: new Date().getFullYear()
}

export default Bottom