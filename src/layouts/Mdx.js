import React from "react"
import { MDXProvider } from "@mdx-js/react"
// import BlockCode from "@/components/Posts/BlockCode"
// import Pre from "@/components/Partials/Pre"

const shortcodes = {
  // code: BlockCode,
  // pre: Pre,
  wrapper: ({children}) => <>{children}</>
}

export const MdxWrapper = ({ element }) => (
  <MDXProvider components={shortcodes}>{element}</MDXProvider>
)