/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Menu from "./menu/menu"
import Content from "./content/content"
import Header from "./header/header";

const Layout = ({ children }) => (
      <>
        <Header />
        <Menu />
        <Content />
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
