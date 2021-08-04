import React from "react"
import { Link, graphql } from "gatsby"

import Seo from "../components/Seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <div className="grid place-items-center h-screen">
      <Seo title="404 Not Found" />
      <div className="flex flex-col items-center ">
        <h1>{siteTitle}</h1>
        <h1 className="text-5xl text-gray-600 font-bold mb-5">404 Not Found</h1>
        <p>back to <Link to="/" className="underline text-blue-500">home</Link></p>
      </div>
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
