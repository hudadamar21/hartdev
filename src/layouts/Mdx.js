import React from "react"
import { MDXProvider } from "@mdx-js/react"
import CopyButton from "@/components/Partials/CopyButton"
import { Pre, A } from "@/components/Mdx"

const shortcodes = {
  precontent: CopyButton,
  pre: Pre,
  a: A,
  wrapper: ({children}) => <>{children}</>
}

export const MdxWrapper = ({ element }) => (
  <MDXProvider components={shortcodes}>{element}</MDXProvider>
)