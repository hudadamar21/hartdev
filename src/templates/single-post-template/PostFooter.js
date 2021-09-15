import React from "react"
import loadable from "@loadable/component"

const Comments = loadable(() => import("@/components/Posts/Comments"))
const PaginationSimple = loadable(() => import("@/components/Posts/PaginationSimple"))

function PostFooter({ paginate }) {
  return (
    <footer>
      <PaginationSimple previous={paginate.previous} next={paginate.next} />
      <Comments/>
    </footer>
  )
}

export default PostFooter