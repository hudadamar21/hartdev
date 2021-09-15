import React from 'react'
import PropTypes from "prop-types"

function Pagination({ pageContext }) {

  const paginationClass = `
    flex items-center gap-2 
    text-lg font-semibold
    hover:bg-gray-100 dark:hover:bg-gray-700 
    px-4 py-1.5 rounded-md
  `
  
  const paginate = (toPage) => 
    `${paginationClass} ${!toPage ? 'opacity-50 pointer-events-none' : ''}`

  const ArrowLeft = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>

  const ArrowRight = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>

  if(pageContext.numberOfPages < 2){
    return false
  }

  return (
    <div className="flex gap-3 mt-10">
      <a
        href={pageContext.previousPagePath}
        className={paginate(pageContext.previousPagePath)}
      >
        {ArrowLeft} Prev
      </a>
      <a
        href={pageContext.nextPagePath}
        className={paginate(pageContext.nextPagePath)}
      >
        Next {ArrowRight}
      </a>
    </div>
  )
}

Pagination.propTypes = {
  pageContext: PropTypes.shape({
    previousPagePath: PropTypes.string,
    nextPagePath: PropTypes.string
  }).isRequired
}

export default Pagination