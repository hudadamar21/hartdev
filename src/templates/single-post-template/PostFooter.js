import React, { lazy } from "react"

import LazyLoad from "@/components/Partials/LazyLoad"
const Comments = lazy(() => import("@/components/Partials/Comments"))
const PaginationSimple = lazy(() => import("@/components/Partials/PaginationSimple"))

function PostFooter({post, paginate}) {
  return (
    <footer>
      <LazyLoad skeletonTemplate="box">
        <PaginationSimple previous={paginate.previous} next={paginate.next} />
      </LazyLoad>

      <LazyLoad skeletonTemplate="big-box">
        <Comments/>
      </LazyLoad>
    </footer>
  )
}

export default PostFooter