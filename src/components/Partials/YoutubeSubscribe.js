import React, { lazy } from 'react'

import LazyLoad from './LazyLoad';
const LogoType = lazy(() => import('./LogoType'))

function YoutubeSubscribe() {
  return (
    <div className="sticky top-20 mt-2 left-0 flex flex-col justify-center items-center shadow-lg border dark:border-gray-700 rounded-lg p-5 py-8">
      <LazyLoad skeletonTemplate="circle">
        <LogoType width={180}/>
      </LazyLoad>
      <p className="text-center my-5 text-gray-600 dark:text-gray-300">
        Silahkan berkunjung juga ke channel Youtube HartDev
        </p>
      <a 
        href="https://www.youtube.com/channel/UCPB7PB6y30lJ2miy5hHODEw" 
        className="
          flex items-center justify-center gap-2 
          bg-red-500/10 hover:bg-red-500/20 
          w-full py-3
          rounded-md cursor-pointer"
        target="_blank"
        title="pergi ke youtube channel hartdev"
        rel="noreferrer"
      >
        <img src="/youtube-logo.svg" width="35" alt="youtube logo"/>
        <p className="font-medium">Open in new tab</p>
      </a>
    </div>
  )
}

export default YoutubeSubscribe