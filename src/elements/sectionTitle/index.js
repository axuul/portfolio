// Import React
import React from "react"

// Import Libraries
import { Generic, Title } from "rbx"
import PropTypes from 'prop-types'

const SectionTitle = ({text, description, centered, topDescription}) => {
  return (
    <Title as="h2" className={centered ? `has-text-centered` : null}>
      {(description && topDescription) &&
        <Generic as="span" className="section-title-span-top">
          {description}
        </Generic>
      }

      {text}

      {(description && !topDescription) && 
        <Generic as="span" className="section-title-span-bottom">
          {description}
        </Generic>
      }
    </Title>
  )
}

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
  centered: PropTypes.bool,
  topDescription: PropTypes.bool,
  description: PropTypes.string
}

SectionTitle.defaultProps = {
  centered: true,
  topDescription: false,
  description: null
}

export default SectionTitle