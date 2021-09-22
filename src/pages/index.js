import React, { useState } from "react"
import loadable from "@loadable/component"
import { useStaticQuery, graphql } from "gatsby"

const Layout = loadable(() => import("@/layouts/Main"))
const Banner = loadable(() => import( "@/components/Home/Banner"))
const AllPost = loadable(() => import( "@/components/Home/AllPost"))
const TutorialList = loadable(() => import("@/components/Home/TutorialList"))
const SourceCodeList = loadable(() => import("@/components/Home/SourceCodeList"))
const BlogList = loadable(() => import("@/components/Home/BlogList"))

function HomePage ({ location }) {

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

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
      seo={{ 
        title: 'HartDev - Home', 
        image: '/banner.webp' 
      }}
      pageActive='home'
      location={location}
      navbarDark={isTop}
    >
      <Banner description={site.siteMetadata.description}/>
      <AllPost/>
      <div className="grid grid-cols-4 gap-10 pt-20 mx-5 md:mx-20 border-t dark:border-gray-600">
        <div className="col-span-4 lg:col-span-3 space-y-24">
          <TutorialList/>
          <SourceCodeList/>
          <BlogList/>
        </div>
        <div className="col-span-4 lg:col-span-1 pr-5 lg:pr-20 pt-20">
          {/* Adsterra Ads */}
          <div id="container-c6cb249243f68f49699f7911e0405f8d"></div> 
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
