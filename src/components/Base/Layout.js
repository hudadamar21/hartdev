import FloatingMenu from "@/components/Partials/FloatingMenu";
import { useStaticQuery, graphql } from "gatsby";
import React from "react"
import Navbar from "./Navbar";


const Layout = ({ location, children, mainClass, navbarDark, pageActive }) => {
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
    <div 
      className="text-gray-700 dark:text-white min-h-screen flex flex-col bg-white dark:bg-gray-800 transition"
      data-is-root-path={isRootPath}
    >
      <Navbar title={title} darknav={navbarDark} pageActive={pageActive} />
      <main className={`flex-grow ${mainClass}`}>
        {children}
      </main>
      <footer className="text-center py-5">
        Copyright © {new Date().getFullYear()} {title}
      </footer>

      <FloatingMenu pageActive={pageActive}/>
      
    </div>
  )
}

export default Layout
