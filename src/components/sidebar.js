import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Typist from "react-typist"

const Sidebar = ({ siteTitle }) => (
  <header
    style={{
      background: `#202228`,
      color: `#fdfbf3`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#fdfbf3`,
            textDecoration: `none`,
          }}
        >
        <Typist>
          {siteTitle}
        </Typist>
        </Link>
      </h1>
    </div>
  </header>
)

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
