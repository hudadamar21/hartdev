import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import CopyButton from "@/components/Partials/CopyButton"

function BlockCode ({children,codeString, className}) {
  const language = className.replace(/language-/, '')
  console.log("codeString",codeString)
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      
    </Highlight>
  )
}

export default BlockCode