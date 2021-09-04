import React from 'react'
import { Link } from "gatsby";

function PaginationSimple({previous, next}) {

  const paginationStyle = `
    group
    flex items-center gap-2
    transition duration-200 
    px-3 py-2 
    font-semibold
  `

  return (
    <nav className="mt-10">
      <ul className="flex flex-wrap  justify-between">
        <li>
          {previous && (
            <Link 
              className={paginationStyle}
              to={"/"+previous.fields.collection+previous.fields.slug} 
              rel="prev"
            >
              <svg 
                className="
                  group-hover:-translate-x-2 
                  transition-transform duration-200 
                  h-6 w-6
                " 
                xmlns="http://www.w3.org/2000/svg" fill="none" 
                viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg> 
              {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link 
              className={paginationStyle}
              to={"/"+next.fields.collection+next.fields.slug} 
              rel="next"
            >
              {next.frontmatter.title} 
              <svg 
                className="
                  group-hover:translate-x-2 
                  transition-transform duration-200 
                  h-6 w-6
                "
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default PaginationSimple