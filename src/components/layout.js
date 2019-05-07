/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Sidebar from "./sidebar/sidebar"

const Layout = ({ children }) => (
      <>
        <Sidebar />
        <main>{children}</main>
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
