import React from "react"
import { MDXProvider } from "@mdx-js/react"

import CodeBlock from "@/components/Partials/CodeBlock"

const shortcodes = {
  code: CodeBlock
}

export default ({ children }) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
)