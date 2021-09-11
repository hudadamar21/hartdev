import React from "react"

import Comments from "@/components/Partials/Comments"
import PaginationSimple from "@/components/Partials/PaginationSimple"

function PostFooter({post, paginate}) {
  return (
    <footer>
      <PaginationSimple previous={paginate.previous} next={paginate.next} />

      <Comments/>
    </footer>
  )
}

export default PostFooter