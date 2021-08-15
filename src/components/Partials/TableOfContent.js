import React from 'react'
import { Link } from "gatsby";

function TableOfContent({ title, headings }) {
  return (
    <nav id="table-of-contents">
      <h1 className="text-xl font-medium">
        {title}
      </h1>
      <ul>
        {headings.map(heading => (
          <li className={heading.depth !== 1 ? 'list-inside' : ''} key={heading.value}>
            <Link to={'#' + heading.value.toLowerCase().replaceAll(' ', '-')}>
              {heading.value}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TableOfContent