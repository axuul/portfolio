// Imort React
import React from "react"

// Import Blocks
import Layout from "components/layout/index"

// Import Elements
import Section from "elements/section"
import SectionTitle from "elements/sectionTitle"

// Import Libraries
import { Column } from "rbx"

const StyleGuide = () => {
  return (
    <Layout>
      <Section>
        <Column.Group>
          <Column size={6}>
            <SectionTitle
              text="Section title"
              description="This is a small description on top"
              topDescription={true}
            />
          </Column>

          <Column size={6}>
            <SectionTitle
              text="Section title"
              description="This is a small description on bottom"
            />
          </Column>
        </Column.Group>
      </Section>
    </Layout>
  )
}

export default StyleGuide