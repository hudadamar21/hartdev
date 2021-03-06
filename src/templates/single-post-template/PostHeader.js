import React from 'react'

function PostHeader({post, pathSeries}) {
  
  const { title, series, date, dateFromNow } = post?.frontmatter

  const arrowLeft = (
    <svg className="hover:-translate-x-2 transition duration-200 h-8 w-8 text-gray-700 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
    </svg> 
  )

  return (
    <header className="flex flex-col text-gray-500 dark:text-gray-200">
      <div className="flex flex-col xl:flex-row items-start gap-3 xl:-translate-x-11">
        <a href={pathSeries} className="pt-1" aria-label="back">
          {arrowLeft}
        </a>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-700 dark:text-white mb-1" itemProp="headline">
          {title}
        </h1>
      </div>
      <a href={pathSeries} className="text-sm lg:text-base">
        from: <span className="underline hover:text-gray-700 dark:hover:text-white">{series}</span>
      </a>
      <div className="flex items-center justify-between text-sm mt-5 mb-2">
        <span>{date}</span>
        <span>{dateFromNow}</span>
      </div>
    </header>
  )
}

export default PostHeader