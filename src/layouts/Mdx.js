import React from "react"
import { MDXProvider } from "@mdx-js/react"
import CopyButton from "@/components/Partials/CopyButton"
import Pre from "@/components/Mdx/Pre"
import ExternalLink from "@/components/Mdx/ExternalLink"

const shortcodes = {
  precontent: CopyButton,
  pre: Pre,
  a: ExternalLink,
  wrapper: ({children}) => <>{children}</>
}

export const MdxWrapper = ({ element }) => (
  <MDXProvider components={shortcodes}>{element}</MDXProvider>
)