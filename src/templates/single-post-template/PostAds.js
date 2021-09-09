import React from 'react'

function PostAds() {
  const isSSR = typeof window === "undefined"
  return !isSSR && (
    <>
      <script async="async" data-cfasync="false" src="//hungrylongingtile.com/c6cb249243f68f49699f7911e0405f8d/invoke.js"></script>
      <div id="container-c6cb249243f68f49699f7911e0405f8d"></div>
    </>
  )
}

export default PostAds