// Import React
import React from "react"

// Import Elements
import Section from "elements/section"

// Import Libraries
import { Column, Title } from "rbx"

const Top = () => {
  return (
    <Section className="footer-top">
      <Column.Group>
        <Column size={4}>
          <Title as="h4">
            ¡Contáctanos!
          </Title>
        </Column>
      </Column.Group>
    </Section>
  )
}

export default Top