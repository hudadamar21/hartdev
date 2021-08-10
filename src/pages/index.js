import React, {useEffect, useState} from "react"
import { Link } from "gatsby";
import LogoType from "@/components/Partials/LogoType";
import Layout from "@/components/Base/Layout";
import Seo from "@/components/Partials/Seo";
import LatestPost from "@/components/Home/LatestPost";

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

  const contents = [
    {
      to: '/blog',
      imageSrc: '/artikel_blog.svg',
      name: 'Artikel Blog'
    },
    {
      to: '/source-code',
      imageSrc: '/tailwind_components.svg',
      name: 'Tailwind Components'
    },
    {
      to: '/tutorial',
      imageSrc: '/tutorial.svg',
      name: 'Tutorial'
    },

  ]

  return (
    <Layout location={location} navbarDark={isTop}>
      <Seo title="HartDev - Home" />
      <section className="
        relative
        h-screen overflow-hidden 
        grid grid-cols-1 lg:grid-cols-2 items-center
        bg-black
        px-5 lg:px-20
      ">
        <img 
          src="/banner-background.jpg" 
          className="absolute bottom-0 left-0 z-0 opacity-30" 
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
          <LogoType/>
        </div>
      </section>
      <section className="flex flex-col items-center pt-20 pb-40 md:py-40 px-5 md:px-20">
        <h1 id="contents" className="pt-20 -mt-20 text-2xl md:text-3xl font-bold mb-6 md:mb-10 uppercase">Content List</h1>
        <div className="flex flex-wrap justify-center">
          {
            contents.map(({to, imageSrc, name}) => {
              return (
                <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                  <Link 
                    to={to}
                    key={to}
                    className="hover:opacity-90 w-full h-full block overflow-hidden group rounded-md"
                  >
                    <img 
                      className="group-hover:scale-110 transition-transform duration-300 group-hover:rotate-2" 
                      src={imageSrc} 
                      alt={name}
                    />
                  </Link>
                </div>
              )
            })
          }
        </div>
      </section>
      <LatestPost/>
    </Layout>
  )
}

export default HomePage
