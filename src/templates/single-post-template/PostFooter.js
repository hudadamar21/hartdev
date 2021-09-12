import React from "react"

import Comments from "@/components/Partials/Comments"
import PaginationSimple from "@/components/Partials/PaginationSimple"

function PostFooter({post, paginate}) {
  return (
    <footer>
      <PaginationSimple previous={paginate.previous} next={paginate.next} />
      {
        typeof window !== 'undefined' && <>
          <script async="async" data-cfasync="false" src="//hungrylongingtile.com/c6cb249243f68f49699f7911e0405f8d/invoke.js"></script>
          <div id="container-c6cb249243f68f49699f7911e0405f8d"></div>
        </>
      }
      <Comments/>
    </footer>
  )
}

export default PostFooter