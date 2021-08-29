import React, { useEffect, useState, lazy, Suspense } from "react"
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "@/components/Partials/Seo"
import SkeletonLoading from "@/components/Partials/SkeletonLoading";

const Layout = lazy(() => import("@/components/Base/Layout"))
const LogoType = lazy(() => import("@/components/Partials/LogoType"))
const LatestPost = lazy(() => import("@/components/Home/LatestPost"))

const HomePage = ({ location }) => {

  const [isTop, setIsTop] = useState(true)
  const [didMount, setDidMount] = useState(false)

  useEffect(() => {
    setDidMount(true)
    window.document.addEventListener('scroll', () => {
      const height = window.innerHeight
      const topWhenScroll = window.document.body.getBoundingClientRect().top / -1
      if (height <= topWhenScroll) {
        setIsTop(false)
      } else {
        setIsTop(true)
      }
    })

    return () => setDidMount(false)
  }, [])

  if(!didMount) return false

  return (
    <Suspense fallback={<SkeletonLoading/>}>
      <Layout 
        pageActive='home'
        location={location} 
        navbarDark={isTop}
      >
        <Seo title="HartDev - Home" />
        <section className="
          relative
          h-screen overflow-hidden 
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
            <h1 className="font-bold text-4xl mb-2 tracking-wider">All Stuff Of Programmers</h1>
            <p className="mb-8 text-lg tracking-wider">Tutorial membuat aplikasi website yang cocok untuk pemula, kumpulan-kumpulan kode yang bisa langsung digunakan, dan artikel blog tentang programming.</p>
            <a 
              href="#contents"
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
            <Suspense fallback={<SkeletonLoading/>}>
              <LogoType/>
            </Suspense>
          </div>
        </section>
        <section className="flex flex-col items-center pt-20 pb-40 md:py-40 px-5 md:px-20 min-h-screen">
          <h1 id="contents" className="pt-20 -mt-20 text-2xl md:text-3xl font-bold mb-6 md:mb-10 uppercase">Content List</h1>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
              <Link 
                to="/blog"
                className="hover:opacity-90 w-full h-full block overflow-hidden group rounded-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <StaticImage
                  className="transition-transform duration-300"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  src='../images/blog.png'
                  width={500}
                  height={300}
                  quality={60}
                  alt="Artikel Blog"
                />
              </Link>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
              <Link 
                to="/source-code"
                className="hover:opacity-90 w-full h-full block overflow-hidden group rounded-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <StaticImage
                  className="transition-transform duration-300"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  src='../images/source-code.png'
                  width={500}
                  height={300}
                  quality={60}
                  alt="Source Code"
                />
              </Link>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
              <Link 
                to="/tutorial"
                className="hover:opacity-90 w-full h-full block overflow-hidden group rounded-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <StaticImage
                  className="transition-transform duration-300"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  src='../images/tutorial.png'
                  width={500}
                  height={300}
                  quality={60}
                  alt="Tutorial Ngoding"
                />
              </Link>
            </div>
          </div>
        </section>
        <Suspense fallback={<SkeletonLoading/>}>
          <LatestPost/>
        </Suspense>
      </Layout>
    </Suspense>
  )
}

export default HomePage
