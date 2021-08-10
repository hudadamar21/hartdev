import React from 'react'
import LogoType from './LogoType'

function YoutubeSubscribe() {
  return (
    <div className="sticky top-20 mt-2 left-0 flex flex-col justify-center items-center shadow-lg border rounded-lg p-5 py-8">
      <LogoType width={180}/>
      <p className="text-center mt-2 text-sm text-gray-500">page source code ini adalah source code yang digunakan pada konten saya di youtube</p>
      <p className="text-center mt-2 text-sm text-gray-500">Silahkan berkunjung juga ke Channel Youtube HartDev</p>
      <a 
        href="https://www.youtube.com/channel/UCPB7PB6y30lJ2miy5hHODEw" 
        className="flex items-center justify-center gap-2 hover:bg-red-500/10 w-full py-2 rounded-md cursor-pointer mt-3"
        target="_blank"
        title="pergi ke youtube channel hartdev"
        rel="noreferrer"
      >
        <img src="/youtube_logo.svg" width="35" alt="youtube logo"/>
        <p className="font-medium">Open in new tab</p>
      </a>
    </div>
  )
}

export default YoutubeSubscribe