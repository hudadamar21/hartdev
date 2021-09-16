import React, {useRef} from 'react'
import { StaticImage } from "gatsby-plugin-image"

import useDarkmode from '@/hooks/useDarkmode'
import useMenu from '@/hooks/useMenu'

function Navbar({title, darknav = false, pageActive}) {

  const { darkmode, toggleDarkmode, icons } = useDarkmode(false)
  const menuList = useMenu(pageActive)

  const menuIndicator = useRef(null)

  const IndicatorMove = (e) => {
    menuIndicator.current.classList.remove('opacity-0')
    menuIndicator.current.style.left = `${e.target.offsetLeft}px`
    menuIndicator.current.style.width = `${e.target.offsetWidth}px`
  }

  const indicatorHide = () => {
    menuIndicator.current.classList.add('opacity-0')
  }

  const listClass = `
    font-semibold px-3 py-1.5 rounded relative z-10`

  return (
    <div className={`
      fixed top-0 inset-x-0 z-30 
      flex items-center justify-between 
      h-16 px-5 md:px-12 lg:px-20 
      backdrop-blur-md transition duration-400 
      ${darknav 
        ? 'bg-transparent text-white' 
        : 'bg-white/80 text-gray-700 dark:bg-transparent dark:text-white'
      }
    `}>
      <a href="/" className="flex items-center gap-3">
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
      </a>
      <div className="flex items-start gap-10">
        <nav className="relative hidden md:flex items-center gap-5 font-medium">
          {menuList.map(menu => (
            <a 
              href={menu.to}
              onMouseOver={IndicatorMove}
              onMouseOut={indicatorHide}
              onFocus={IndicatorMove}
              onBlur={indicatorHide}
              className={`
                ${listClass} 
                ${pageActive === menu.slug && darknav 
                  ? 'bg-white/5' 
                  : pageActive === menu.slug && !darknav 
                  ? 'bg-black/5'
                  : '' 
                }
              `}
              partiallyActive={true}
              key={menu.slug}
            >
              {menu.name}
            </a>
          ))}
          <div 
            ref={menuIndicator} 
            className={`
              absolute top-0 rounded h-full transtion duration-200
              ${darknav 
                ? 'bg-white/5' 
                : 'bg-black/5 dark:bg-white/5'
              }
            `}
          ></div>
        </nav>
        <button onClick={toggleDarkmode} name="change-theme" aria-label="change-theme">
          {darkmode ? icons.light : icons.dark}
        </button>
      </div>
    </div>
  )
}

export default Navbar