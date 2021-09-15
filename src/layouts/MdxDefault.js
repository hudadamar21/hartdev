import React from "react"
import { MDXProvider } from "@mdx-js/react"
import loadable from "@loadable/component"

const CodeBlock = loadable(() => import("@/components/Posts/CodeBlock")) 

const shortcodes = {
  code: CodeBlock
}

export default ({ children }) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
)