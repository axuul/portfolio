// Import React
import React from "react"

// Import Libraries
import { Generic, Title } from "rbx"
import PropTypes from 'prop-types'

const SectionTitle = ({text, description, centered}) => {
  return (
    <Title as="h2" className={centered ? `has-text-centered` : null}>
      {text}

      {description && 
        <Generic as="span">
          {description}
        </Generic>
      }
    </Title>
  )
}

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
  centered: PropTypes.bool,
  description: PropTypes.string
}

SectionTitle.defaultProps = {
  centered: true,
  description: null
}

export default SectionTitle