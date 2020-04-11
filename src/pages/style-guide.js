// Imort React
import React from "react"

// Import Blocks
import Layout from "components/layout/index"

// Import Elements
import Section from "elements/section"
import SectionTitle from "elements/sectionTitle"

const StyleGuide = () => {
  return (
    <Layout>
      <Section>
        <SectionTitle
          text="Section title"
          description="This is a small description"
        />
      </Section>
    </Layout>
  )
}

export default StyleGuide