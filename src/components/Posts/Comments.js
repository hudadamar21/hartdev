import React, {useRef, useEffect} from 'react'
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
      <div className="mt-5 pt-5 pl-5 border-t">
        <h3 className="text-2xl font-bold mb-2">
          Comment Section
        </h3>
        <p className="text-sm opacity-80">
          * reload halaman jika kamu mengubah tema ke dark/light mode, agar tema komen berubah
        </p>
      </div>
      <div ref={commentBox} className="comments"></div>
    </>
  )
}
export default Comment