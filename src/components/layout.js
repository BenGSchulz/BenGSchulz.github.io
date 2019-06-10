/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Navigation from "./navigation/navigation"
import ContentArea from "./contentArea/contentArea"
import Footer from "./footer/footer"

const Layout = ({ children }) => (
      <>
        <ContentArea />
        <Navigation />
        <Footer />
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
