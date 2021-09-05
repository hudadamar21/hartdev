import React, {useRef, useEffect} from 'react'

// import useDarkmode from '@/hooks/useDarkmode'

const isBrowser = typeof window !== "undefined"

const Comment = () => {
  const commentBox = useRef(null)

  useEffect(() => {
    if(isBrowser){
      const scriptEl = document.createElement('script')
      scriptEl.async = true
      scriptEl.src = 'https://utteranc.es/client.js'
      scriptEl.setAttribute('repo', 'hudadamar21/hartdev')
      scriptEl.setAttribute('issue-term', 'pathname')
      scriptEl.setAttribute('id', 'utterances')
      scriptEl.setAttribute('theme', 'github-light')
      scriptEl.setAttribute('crossorigin', 'anonymous')
      const body = window.document.body
      if(body.classList.contains('dark')) {
        scriptEl.setAttribute('theme', 'github-dark')
      } else {
        scriptEl.setAttribute('theme', 'github-light')
      }
      if (commentBox && commentBox.current) {
        commentBox.current.appendChild(scriptEl)
      } else {
        console.log(`Error adding utterances comments on: ${commentBox}`)
      }
    }
  }, [])

  return (
    <>
      <p className="mt-10 text-sm pl-5 opacity-80">* reload halaman jika kamu mengubah tema ke dark/light mode, agar tema komen berubah</p>
      <div ref={commentBox} className="comments"></div>
    </>
  )
}
export default Comment