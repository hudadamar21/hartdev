import React from 'react'

function YoutubePlay({id}) {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden">
      <iframe 
        src={`https://www.youtube.com/embed/${id}`} 
        className="absolute top-0 lef-0 w-full h-full border-none" 
        allowFullScreen 
        title="YouTube Video">
      </iframe>
    </div>
  )
}

export default YoutubePlay
