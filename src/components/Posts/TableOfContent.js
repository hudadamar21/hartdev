import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby";

function TableOfContent ({ title, headings }) {
  const mapHeadings = headings.map(heading => {
    return {
      ...heading,
      slug: heading.value.toLowerCase().split(' ').join('-')
    }
  })
  return (
    <nav id="table-of-contents">
      <h1 className="text-xl font-medium">
        {title}
      </h1>
      <ul>
        {mapHeadings.map(heading => (
          <li className={heading.depth !== 1 ? 'list-inside' : ''} key={heading.value}>
            <Link to={'#' + heading.slug}>
              {heading.value}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

TableOfContent.propTypes = {
  title: PropTypes.string.isRequired,
  headings: PropTypes.arrayOf(PropTypes.shape({
    depth: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
}

export default TableOfContent