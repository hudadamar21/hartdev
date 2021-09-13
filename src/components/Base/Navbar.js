import React from 'react'
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

import useDarkmode from '@/hooks/useDarkmode'
import useMenu from '@/hooks/useMenu'

function Navbar({title, darknav = false, pageActive}) {

  const { darkmode, toggleDarkmode, icons } = useDarkmode(false)
  const menuList = useMenu(pageActive)

  const listClass = `  
    ${`border-b-4 border-transparent font-semibold ${darknav ? 'hover:border-white' : 'hover:border-gray-700 dark:hover:border-white'}`}
  `

  return (
    <nav className={`
      fixed top-0 inset-x-0 z-30 
      flex items-center justify-between 
      h-16 px-5 md:px-12 lg:px-20 
      backdrop-blur-md transition duration-400 
      ${darknav ? 'bg-transparent text-white' : 'bg-white/80 text-gray-700 dark:bg-transparent dark:text-white'}
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
      <div className="flex items-start gap-10">
        <ul className="hidden md:flex items-center gap-10 font-medium">
          {menuList.map(menu => (
            <li className={listClass} key={menu.slug} >
              <Link to={menu.to}>{menu.name}</Link>
            </li>
          ))}
        </ul>
        <button onClick={toggleDarkmode} name="change-theme">
          {darkmode ? icons.light : icons.dark}
        </button>
      </div>
    </nav>
  )
}

export default Navbar