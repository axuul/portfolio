// Import React
import React from "react"

// Import Components
import Footer from "components/footer"

const Layout = props => {
  return (
    <>
      {props.children}
      <Footer />
    </>
  )
}

export default Layout