import * as React from 'react'
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

function Navbar({title, darkmode = false}) {
  const listClass = `border-b-4 border-transparent ${darkmode ? 'hover:border-white' : 'hover:border-gray-700'}`

  return (
    <nav className={`
      fixed top-0 inset-x-0 z-50 
      flex items-center justify-between 
      h-16 px-5 md:px-12 lg:px-20 
      backdrop-blur transition duration-400 
      ${darkmode ? 'bg-black/50 text-white' : 'bg-white/50 text-gray-700'}
    `}>
      <Link to="/" className="flex items-center gap-3">
      <StaticImage
        formats={["AUTO", "WEBP", "AVIF"]}
        placeholder="tracedSVG"
        src="../../images/logo.png"
        width={35}
        height={35}
        quality={60}
        alt="Logo"
      />
        <h1 className="text-xl font-bold">{title}</h1>
      </Link>
      <ul className="flex items-center gap-10 font-medium">
        <li className={listClass}>
          <Link to="/">Home</Link>
        </li>
        <li className={listClass}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar