import React from 'react'

function SkeletonLoading({ skeletonTemplate }) {

  const card = (
    <div className="w-56">
      <div className="w-full h-28 bg-gray-300 mb-3"></div>
      <div className="w-1/2 h-3 mb-3"></div>
      <div className="w-2/3 h-5 mb-3"></div>
      <div className="w-full h-3"></div>
      <div className="w-1/2 h-3"></div>
      <div className="w-2/3 h-3"></div>
    </div>
  )

  const box = <div className="w-56 h-32"></div>

  const skeletons = {
    box,
    card
  }

  return skeletons[skeletonTemplate] || skeletons['box']
}

export default SkeletonLoading