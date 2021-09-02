import React, {useRef, useEffect} from 'react'

import useDarkmode from '@/hooks/useDarkmode'

const isBrowser = typeof window !== "undefined"

const Comment = () => {
  const commentBox = useRef(null)
  const { darkmode } = useDarkmode(false)

  useEffect(() => {
    if(isBrowser){
      const scriptEl = document.createElement('script')
      scriptEl.async = true
      scriptEl.src = 'https://utteranc.es/client.js'
      scriptEl.setAttribute('repo', 'hudadamar21/hartdev')
      scriptEl.setAttribute('issue-term', 'pathname')
      scriptEl.setAttribute('id', 'utterances')
      if(darkmode) {
        scriptEl.setAttribute('theme',  'github-dark')
      } else {
        scriptEl.setAttribute('theme',  'github-light')
      }
      scriptEl.setAttribute('crossorigin', 'anonymous')
      if (commentBox && commentBox.current) {
        commentBox.current.appendChild(scriptEl)
      } else {
        console.log(`Error adding utterances comments on: ${commentBox}`)
      }
    }
  }, [])

  return (
    <div ref={commentBox} className="comments"></div>
  )
}
export default Comment