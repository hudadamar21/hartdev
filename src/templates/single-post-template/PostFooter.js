import React from "react"

import Comments from "@/components/Partials/Comments"
import PaginationSimple from "@/components/Partials/PaginationSimple"

function PostFooter({ paginate }) {
  return (
    <footer>
      <div id="container-c6cb249243f68f49699f7911e0405f8d"></div>
      <PaginationSimple previous={paginate.previous} next={paginate.next} />
      <Comments/>
    </footer>
  )
}

export default PostFooter