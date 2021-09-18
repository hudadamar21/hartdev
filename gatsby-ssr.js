import React from 'react'
import { MdxWrapper } from '@/layouts/Mdx'

export const wrapRootElement = MdxWrapper

const HeadComponents = [
  <script async="async" data-cfasync="false" src="//hungrylongingtile.com/c6cb249243f68f49699f7911e0405f8d/invoke.js"></script>
]

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents)
}