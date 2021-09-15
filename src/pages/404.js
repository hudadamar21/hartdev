import React from "react"
import { graphql } from "gatsby"

const NotFoundPage = ({ data }) => {
  const siteTitle = data?.site?.siteMetadata?.title

  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col items-center ">
        <h1>{siteTitle}</h1>
        <h2 className="text-5xl text-gray-600 font-bold mb-5">404 Not Found</h2>
        <p>back to <a href="/" className="underline text-blue-500">home</a></p>
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
