import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby";

import YoutubeSubscribe from '../Partials/YoutubeSubscribe'

function SideContent() {

  const queryCategories = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            category
          }
        }
      }
    }
  `)
  const mapCategories = new Set(queryCategories.allMarkdownRemark.nodes
    .map(c => c.frontmatter.category))
  const categories = [...mapCategories]

  return (
    <aside className="col-span-4 lg:col-span-1 flex flex-col gap-8">
      <div className="flex flex-col shadow-lg border rounded-lg p-5">
        <h1 className="text-xl font-semibold mb-3">Kategori</h1>
        <ul className="pl-2 flex flex-col gap-2">
          {
            categories.map(category => {
              return (
                <li className="hover:underline" key={category}>
                  <Link to={`/${category.replace(" ", "-").toLowerCase()}`} className="capitalize">
                    {category}
                  </Link>
                </li>
              )
            })
          }
          <li className="hover:underline">
            <Link to="/blog">Artikel Blog</Link>
          </li>
          
        </ul>
      </div>
      <YoutubeSubscribe/>
      <script async="async" data-cfasync="false" src="//hungrylongingtile.com/f322d3f05a05bdf9446863398c6a1a90/invoke.js"></script>
      <div id="container-f322d3f05a05bdf9446863398c6a1a90"></div>
    </aside>
  )
}

export default SideContent