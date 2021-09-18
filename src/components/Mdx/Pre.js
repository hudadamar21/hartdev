import React from "react"

const Pre = props => {
  console.log(props)
  const {children, className} = props.children.props
  return (
    <div className="relative">
      <div className="absolute select-none top-1 left-3 text-[13px] text-white/40 z-50">{props['data-language']}</div>
      <pre 
        className={props.className}
        data-language={props['data-language']}
        data-index={props['data-index']}
      >
        <code className={`${className} pt-3`}>
          {children}
        </code>
      </pre>
    </div>
  )
}

export default Pre