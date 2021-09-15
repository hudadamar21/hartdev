import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Seo from "@/components/Layout/Seo"
import loadable from "@loadable/component"

const Navbar = loadable(() => import("@/components/Layout/Navbar")) 
const FloatingMenu = loadable(() => import("@/components/Layout/FloatingMenu")) 

function Layout ({ seo, location, children, mainClass, navbarDark, pageActive }) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata

  return <>
    <Seo 
      title={seo.title || title} 
      image={seo.image || ''} 
      description={seo.description || description}
    />
    <div 
      className="text-gray-700 dark:text-gray-100 min-h-screen flex flex-col bg-white dark:bg-gray-900 transition"
      data-is-root-path={isRootPath}
    >
      <Navbar title={title} darknav={navbarDark} pageActive={pageActive} />
      <main className={`flex-grow ${mainClass}`}>
        {children}
      </main>
      <footer className="text-center py-5 ">
        Copyright © {new Date().getFullYear()} {title}
      </footer>
      <FloatingMenu pageActive={pageActive}/>
    </div>
  </>
}

export default Layout
