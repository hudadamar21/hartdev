import React, {useState} from "react"
import { Link } from "gatsby";
import LogoType from "../components/LogoType";
import Navbar from "../components/Navbar";

const HomePage = () => {

  const [isTop, setIsTop] = useState(true)

  document.addEventListener('scroll', () => {
    const height = window.innerHeight
    const topWhenScroll = window.document.body.getBoundingClientRect().top / -1
    console.log(topWhenScroll)
    if (height <= topWhenScroll) {
      setIsTop(false)
    } else {
      setIsTop(true)
    }
  })

  return (
    <>
      <Navbar title="HartDev" darkmode={isTop} />
      <section className="
        relative
        h-screen overflow-hidden 
        grid grid-cols-2 items-center
        bg-black
        px-20
      ">
        <img 
          src="/banner-background.jpg" 
          className="absolute bottom-0 left-0 z-0 opacity-30" 
          alt=""
        />
        <div className="text-white relative z-10">
          <h1 className="font-bold text-4xl mb-2">All Stuff Of Programmers</h1>
          <p className="text-lg mb-8">Tutorial membuat aplikasi website yang cocok untuk pemula, kumpulan-kumpulan kode yang bisa langsung digunakan, dan artikel blog tentang programming.</p>
          <a 
            href="#contents"
            className="
              flex items-end gap-2 w-max
              bg-gray-800 hover:bg-gray-700
              border-b-4 border-gray-600 
              font-medium px-3 py-2 text-lg
            "
          >
            Ngoding Sekarang
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
        
        <div className="justify-self-end relative z-10">
          <LogoType/>
        </div>
      </section>
      <section id="contents" className="h-screen flex flex-col items-center pt-20 px-10">
        <h1 className="text-4xl font-bold mb-10 uppercase">Content List</h1>
        <div className="grid grid-flow-col place-items-center gap-5">
          <Link className="hover:opacity-90 overflow-hidden group" to="/blog">
            <img className="group-hover:scale-110 transition-transform duration-300 group-hover:rotate-2" src="/artikel_blog.svg" alt="artikel blog"/>
          </Link>
          <Link className="hover:opacity-90 overflow-hidden group" to="/tailwindcss-components">
            <img className="group-hover:scale-110 transition-transform duration-300 group-hover:rotate-2" src="/tailwind_components.svg" alt="tailwind components"/>
          </Link>
          <Link className="hover:opacity-90 overflow-hidden group" to="/tutorials">
            <img className="group-hover:scale-110 transition-transform duration-300 group-hover:rotate-2" src="/tutorial_ngoding.svg" alt="tutorial ngoding"/>
          </Link>
        </div>
      </section>
      <section className="h-screen">

      </section>
    </>
  )
}

export default HomePage
