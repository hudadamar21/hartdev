import React, { lazy, Suspense } from 'react'
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import SkeletonLoading from '@/components/Partials/SkeletonLoading';

function Thumbnail({image, title}) {
  const thumbImage = getImage(image)
  return thumbImage 
    ? <GatsbyImage image={thumbImage} alt={title} /> 
    : <div className="w-full h-full bg-gray-200"></div>
}

function SideContent({title, collection, lists, seriesSlug, contentType }) {

  const query = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          frontmatter: {
            contentType: {eq: "single"}
          }
        }
      ) {
        distinct(field: frontmatter___series)
        distinctByCollection: distinct(field: fields___collection)
        nodes {
          frontmatter {
            series
            title
          }
          fields {
            collection
            slug
          }
        }
      }
    }
  `)
  
  const collectionListNames = query.allMdx.distinctByCollection
  const seriesListNames = query.allMdx.distinct

  const categoryList = collectionListNames.map(category => {
    const seriesList = seriesListNames.map(series => {
      const posts = query.allMdx.nodes.filter(post => post.frontmatter.series === series)
      const { collection, slug } = posts[0].fields
      return {
        title: series,
        collection,
        link: `/${collection}/${slug.split('/')[1]}`,
        count: posts.length
      }
    })
    return {
      category: category.replace(/-/g, ' '),
      list: seriesList.filter(post => post.collection === category)
    }
  })

  const HartButton = lazy(() => import("@/components/Partials/HartButton"))
  const YoutubeSubscribe = lazy(() => import("@/components/Partials/YoutubeSubscribe"))
  const isSourceCode = collection === 'source-code'

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
      <HartButton to={seriesSlug} small={true}>
        Show More
      </HartButton>
    </div> 
  )

  const pageMessage = contentType === 'list' ? 'series lain' : 'post yang related'
  const emptyList = <p className="text-gray-600 dark:text-gray-300">Tidak ada {pageMessage}</p>

  return (
    <aside className="col-span-12 lg:col-span-4 flex flex-col gap-5 lg:pl-10 mt-10 lg:mt-0">
      {isSourceCode &&  (
        <Suspense fallback={<SkeletonLoading/>}>
          <YoutubeSubscribe/>
        </Suspense>
      )}
      <div className={`
        ${!collection ? 'sticky top-20' : ''}
        flex flex-col
        shadow-none lg:shadow-lg border 
        bg-white dark:bg-gray-800 dark:border-black
        rounded-none lg:rounded-lg p-6 mt-2
      `}>
        <h1 className="text-xl font-semibold mb-5 capitalize">
          Categories
        </h1>
        <ul className="flex flex-col gap-5">
          {categoryList.map(category => (
            <li key={category.category}>
              <h1 className="font-semibold text-lg capitalize mb-2">{category.category}</h1>
              <ul className="pl-2 space-y-1">
                {category.list.map(series => (
                  <li className="flex items-center justify-between w-full" key={series.title}>
                    <Link to={series.link} className="line-clamp-1 hover:underline">
                      {series.title}
                    </Link>
                    <span className="">({series.count})</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      {
        collection && (
          <div className="
            sticky top-20 left-0 
            flex flex-col 
            shadow-none lg:shadow-lg border 
            bg-white dark:bg-gray-800 dark:border-black
            rounded-none lg:rounded-lg p-6
          ">
            <h1 className="text-xl font-semibold mb-5 capitalize">
              {title} {collection.replace(/-/g, ' ')}
            </h1>
            <ul className="flex flex-col gap-5">
              {lists.length > 0 ? contentList : emptyList}
            </ul>
            {listLimit} 
          </div>
        )
      }
      <script async="async" data-cfasync="false" src="//hungrylongingtile.com/f322d3f05a05bdf9446863398c6a1a90/invoke.js"></script>
      <div id="container-f322d3f05a05bdf9446863398c6a1a90"></div>
    </aside>
  )
}

export default SideContent