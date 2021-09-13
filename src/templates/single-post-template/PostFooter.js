import React from "react"

import Comments from "@/components/Posts/Comments"
import PaginationSimple from "@/components/Posts/PaginationSimple"

function PostFooter({ paginate }) {
  return (
    <footer>
      <PaginationSimple previous={paginate.previous} next={paginate.next} />
      <Comments/>
    </footer>
  )
}

export default PostFooter