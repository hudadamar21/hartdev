import React from "react"
import { MDXProvider } from "@mdx-js/react"
// import loadable from "@loadable/component"
import Pre from "@/components/Partials/Pre"

// const CodeBlock = loadable(() => import("@/components/Posts/CodeBlock")) 

const shortcodes = {
  // code: CodeBlock,
  pre: Pre
}

export default ({ children }) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
)