import React, { useState } from "react"
import Layout from "@/layouts/Main"
import Seo from "@/components/Layout/Seo"
import LogoType from "@/components/Partials/LogoType"
import AllPost  from "@/components/Home/AllPost"
import TutorialList from "@/components/Home/TutorialList"
import SourceCodeList from "@/components/Home/SourceCodeList"
import BlogList from "@/components/Home/BlogList"

function HomePage ({ location }) {

  const [isTop, setIsTop] = useState(true)

  const isSSR = typeof window === 'undefined'

  if(!isSSR) {
    window.document.addEventListener('scroll', () => {
      const height = window.innerHeight - 100
      const topWhenScroll = window.document.body.getBoundingClientRect().top / -1
      if (height <= topWhenScroll) {
        setIsTop(false)
      } else {
        setIsTop(true)
      }
    })
  }

  return (
    <Layout 
      pageActive='home'
      location={location}
      navbarDark={isTop}
    >
      <Seo title="HartDev - Home" />
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
          alt=""
        />
        <div className="text-white relative z-10">
          <h1 className="font-display font-semibold text-5xl leading-tight mb-3 tracking-widest uppercase">All Stuff Of Programmers</h1>
          <p className="mb-8 text-xl tracking-wider">Tutorial website dari yang basic sampai advance, kumpulan-kumpulan kode yang bisa digunakan untuk mempermudah pembuatan website-mu, dan artikel blog tentang dunia programming.</p>
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
        </div>
        
        <div className="hidden lg:block justify-self-end relative z-10">
        <LogoType/>
        </div>
      </section>
      <AllPost/>
      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-4 lg:col-span-3">
          <TutorialList/>
          <SourceCodeList/>
          <BlogList/>
        </div>
        <div className="col-span-4 lg:col-span-1 pr-20 pt-20">
          <div id="container-c6cb249243f68f49699f7911e0405f8d"></div> 
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
