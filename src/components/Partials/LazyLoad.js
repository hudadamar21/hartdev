import React, { Suspense } from 'react'
import SkeletonLoading from './SkeletonLoading'

function LazyLoad({children, skeletonTemplate}) {
  const isSSR = typeof window === "undefined"
  return (
    <>
      {!isSSR && (
        <Suspense fallback={<SkeletonLoading template={skeletonTemplate}/>}>
          {children}
        </Suspense>
      )}
    </>
  )
}

export default LazyLoad