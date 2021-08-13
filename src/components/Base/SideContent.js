import React from 'react'
import { Link } from "gatsby";

import YoutubeSubscribe from '@/components/Partials/YoutubeSubscribe'
import HartButton from '@/components/Partials/HartButton'

function SideContent({ collection, lists, seriesSlug }) {

  const notSourceCode = collection !== 'source-code' ? 'sticky top-20 mt-2 left-0' : ''
  return (
    <aside className="col-span-12 lg:col-span-4 flex flex-col gap-8 pl-10">
      <div className={
        `${notSourceCode} flex flex-col shadow-lg border rounded-lg p-5`
      }>
        <h1 className="text-xl font-semibold mb-3">Series List</h1>
        <ul className="pl-2 flex flex-col divide-y">
          {
            lists.slice(0, 5).map(list => {
              const {collection, slug} = list.fields
              return (
                <li className="hover:underline py-3" key={slug}>
                  <Link to={'/'+collection+slug}>
                    {list.frontmatter.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
        {
          lists.length > 5 ? (
            <div className="pl-2 mt-3">
              <HartButton to={seriesSlug} small={true}>
                More
              </HartButton>
            </div> 
          ) : false
        } 
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