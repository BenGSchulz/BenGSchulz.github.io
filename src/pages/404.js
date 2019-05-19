import React from "react"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <div 
    style={
      { 
        textAlign: "center",
        margin: 0,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '100%' 
      }
  }>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist :( </p>
    <a href='/' className='link'>Home</a>
  </div>
)

export default NotFoundPage
