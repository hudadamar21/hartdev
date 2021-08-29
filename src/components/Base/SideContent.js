import React, { lazy, Suspense } from 'react'
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import SkeletonLoading from '@/components/Partials/SkeletonLoading';

function Thumbnail({image, title}) {
  const thumbImage = getImage(image)
  return thumbImage 
    ? <GatsbyImage image={thumbImage} alt={title} /> 
    : <div className="w-full h-full bg-gray-200"></div>
}

function SideContent({title, collection, lists, seriesSlug, contentType }) {
  
  function toCapitalize (text) {
    return text.split('-').map(txt => 
      txt.split('').map((t,i) => 
        i === 0 ? t.toUpperCase() : t).join('')
    ).join(' ')
  }
  
  const HartButton = lazy(() => import("@/components/Partials/HartButton"))
  const YoutubeSubscribe = lazy(() => import("@/components/Partials/YoutubeSubscribe"))

  const isSourceCode = collection === 'source-code'

  const collectionCapitalize = toCapitalize(collection)

  const contentList = lists.slice(0, 5).map(list => {
    const {collection, slug} = list.fields
    return (
      <li key={slug}>
        <Link to={'/'+collection+slug} className="flex items-center gap-3 hover:opacity-80 overflow-hidden">
          <div className="w-1/3 rounded overflow-hidden">
            <Thumbnail image={list.frontmatter.thumb} title={list.frontmatter.title} />
          </div>
          <h1 className="w-2/3 line-clamp-2">{list.frontmatter.title}</h1>
        </Link>
      </li>
    )
  })

  const listLimit = lists.length > 5 && (
    <div className="mt-5">
      <Suspense fallback={<SkeletonLoading/>}>
        <HartButton to={seriesSlug} small={true}>
          Show More
        </HartButton>
      </Suspense>
    </div> 
  )

  const pageMessage = contentType === 'list' ? 'series lain' : 'post yang related'

  const emptyList = <p className="text-gray-600 dark:text-gray-300">Tidak ada {pageMessage}</p>

  return (
    <aside className="col-span-12 lg:col-span-4 flex flex-col gap-8 lg:pl-10 mt-10 lg:mt-5">
      <div className={
        `${!isSourceCode ? 'sticky top-20 mt-2 left-0' : ''} 
        flex flex-col shadow-lg border dark:border-gray-700 rounded-lg p-6`
      }>
        <h1 className="text-xl font-semibold mb-5">
          { title } ({collectionCapitalize})
        </h1>
        <ul className="flex flex-col gap-5">
          { lists.length > 0 ? contentList : emptyList }
        </ul>
        { listLimit } 
      </div>
      { isSourceCode &&  (
        <Suspense fallback={<SkeletonLoading/>}>
          <YoutubeSubscribe/>
        </Suspense>
      ) }
      <script async="async" data-cfasync="false" src="//hungrylongingtile.com/f322d3f05a05bdf9446863398c6a1a90/invoke.js"></script>
      <div id="container-f322d3f05a05bdf9446863398c6a1a90"></div>
    </aside>
  )
}

export default SideContent