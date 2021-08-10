import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby";

import YoutubeSubscribe from '@/components/Partials/YoutubeSubscribe'

function SideContent({ collection }) {

  const querySeries = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {fields: {slug: {ne: "/"}}, frontmatter: {contentType: {eq: "list"}}}
      ) {
        nodes {
          fields {
            collection
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `)
  const seriesList = querySeries.allMarkdownRemark.nodes

  const seriesByCollection = seriesList.filter(series => series.fields.collection === collection)

  return (
    <aside className="col-span-4 lg:col-span-1 flex flex-col gap-8">
      <div className="flex flex-col shadow-lg border rounded-lg p-5">
        <h1 className="text-xl font-semibold mb-3">Series List</h1>
        <ul className="pl-2 flex flex-col divide-y">
          {
            seriesByCollection.map(series => {
              const {collection, slug} = series.fields
              return (
                <li className="hover:underline py-3" key={slug}>
                  <Link to={'/'+collection+slug}>
                    {series.frontmatter.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      {
        collection === 'source-code' && <YoutubeSubscribe/>
      }
      <script async="async" data-cfasync="false" src="//hungrylongingtile.com/f322d3f05a05bdf9446863398c6a1a90/invoke.js"></script>
      <div id="container-f322d3f05a05bdf9446863398c6a1a90"></div>
    </aside>
  )
}

export default SideContent