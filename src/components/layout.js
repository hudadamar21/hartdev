import { useStaticQuery, graphql } from "gatsby";
import * as React from "react"
import Navbar from "./Navbar";

const Layout = ({ location, children, mainClass }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  const title = data.site.siteMetadata.title

  return (
    <div className="text-gray-700 min-h-screen flex flex-col" data-is-root-path={isRootPath}>
      <Navbar title={title} />
      <main className={`flex-grow pt-20 ${mainClass}`}>{children}</main>
      <footer className="text-center py-5">
        Copyright © {new Date().getFullYear()} {title}
      </footer>
    </div>
  )
}

export default Layout
