import React, { useState } from "react"
import PropTypes from "prop-types"

function copyToClipboard(content) {
  const el = document.createElement(`textarea`)
  el.value = content
  el.setAttribute(`readonly`, ``)
  el.style.position = `absolute`
  el.style.left = `-9999px`
  document.body.appendChild(el)
  el.select()
  document.execCommand(`copy`)
  document.body.removeChild(el)
}

function delay (duration){
  new Promise(resolve => setTimeout(resolve, duration))
}

function Copy({ content, duration = 2500, trim = false }) {
  const [text, setText] = useState(`Copy`)

  return (
    <button 
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        border: "none",
        boxShadow: "none",
        textDecoration: "none",
        margin: "8px",
        padding: "8px 12px",
        background: "#E2E8F022",
        borderRadius: "8px",
        cursor: "pointer",
        color: "#E2E8F0",
        fontSize: "14px",
        fontFamily: "sans-serif",
        lineHeight: "1",
      }}
      onClick={async () => {
        copyToClipboard(trim ? content.trim() : content)

        setText(`Copied`)

        await delay(duration)

        setText(`Copy`)
      }}
    >
      {text}
    </button>
  )
}

Copy.propTypes = {
  content: PropTypes.string.isRequired,
  duration: PropTypes.number,
  trim: PropTypes.bool,
}

Copy.defaultProps = {
  duration: 2500,
}

export default Copy