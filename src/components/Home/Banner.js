import React from 'react'
import loadable from "@loadable/component"
const LogoType = loadable(() => import("@/components/Partials/LogoType"))

function Banner({ description }) {
  return (
    <section className="
      relative
      h-[95vh] overflow-hidden 
      grid grid-cols-1 lg:grid-cols-2 items-center
      bg-black
      px-5 lg:px-20
    ">
      <img 
        src="/banner-background.svg" 
        className="absolute bottom-0 w-full h-full left-0 z-0" 
        alt="banner"
      />
      <article className="text-white relative z-10">
        <h1 className="font-display font-semibold text-5xl leading-tight mb-3 tracking-widest uppercase">All Stuff Of Programmers</h1>
        <p className="mb-8 text-xl tracking-wider">
          {description}
        </p>
        <a 
          href="#allpost"
          className="
            flex items-center gap-2 w-max rounded-md
            bg-gradient-to-r from-gray-800 to-gray-700 hover:saturate-150
            font-medium px-3 py-2 text-base md:text-lg tracking-wider
          "
        >
          Let's Code
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </article>
      
      <div className="hidden lg:block justify-self-end relative z-10">
      <LogoType/>
      </div>
    </section>
  )
}

export default Banner