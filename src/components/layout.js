/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Menu from "./menu/menu"
import ContentArea from "./contentArea/contentArea"
import Header from "./header/header";

const Layout = ({ children }) => (
      <>
      
        <Header />
        
        <ContentArea />

        <Menu />

      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
