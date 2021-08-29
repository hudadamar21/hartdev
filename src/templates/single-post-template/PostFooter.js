import React, { lazy } from "react"

import LazyLoad from "@/components/Partials/LazyLoad"
const DisqusComment = lazy(() => import("@/components/Partials/DisqusComment"))
const PaginationSimple = lazy(() => import("@/components/Partials/PaginationSimple"))

function PostFooter({post, paginate}) {
  return (
    <footer>
      <LazyLoad skeletonTemplate="box">
        <PaginationSimple previous={paginate.previous} next={paginate.next} />
      </LazyLoad>

      <LazyLoad skeletonTemplate="big-box">
        <DisqusComment post={post} />
      </LazyLoad>
    </footer>
  )
}

export default PostFooter