import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`, `portfolio`, `web development`, `Ben Schulz`]} />
    <Link to="/">Here</Link>
  </Layout>
)

export default IndexPage
