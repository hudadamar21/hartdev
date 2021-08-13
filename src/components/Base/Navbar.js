import * as React from 'react'
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

function Navbar({title, darkmode = false}) {
  const listClass = `border-b-4 border-transparent font-semibold ${darkmode ? 'hover:border-white' : 'hover:border-gray-700 '}`

  const links = [
    {
      to: '/',
      name: 'Home',
    },
    {
      to: '/blog',
      name: 'Blog',
    },
    {
      to: '/tutorial',
      name: 'Tutorial',
    },
    {
      to: '/source-code',
      name: 'Source Code',
    },
    {
      to: '/about',
      name: 'About',
    },
  ]

  return (
    <nav className={`
      fixed top-0 inset-x-0 z-50 
      flex items-center justify-between 
      h-16 px-5 md:px-12 lg:px-20 
      backdrop-blur-md transition duration-400 
      ${darkmode ? 'bg-black/80 text-white' : 'bg-white/80 text-gray-700'}
    `}>
      <Link to="/" className="flex items-center gap-3">
      <StaticImage
        formats={["AUTO", "WEBP", "AVIF"]}
        placeholder="tracedSVG"
        src="../../images/logo.png"
        width={30}
        height={30}
        quality={60}
        alt="Logo"
      />
        <h1 className="text-xl font-bold">{title}</h1>
      </Link>
      <ul className="flex items-center gap-10 font-medium">
      {
        links.map(link => (
          <li className={listClass} key={link.name}>
            <Link to={link.to}>{link.name}</Link>
          </li>
        ))
      }
      </ul>
    </nav>
  )
}

export default Navbar