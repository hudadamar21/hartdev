import React, { useState } from 'react'
import menulist from '@/data/menulist'
import { Link } from 'gatsby';

function FloatingMenu({ pageActive }) {

  const [menu, setMenu] = useState(false);

  const showMenu = () => setMenu(true)
  const closeMenu = () => setMenu(false)

  const listClass = `block text-lg font-bold w-full text-center py-3 hover:bg-gray-100 dark:hover:bg-gray-600`

  const list = menulist.map(link => (
    <li key={link.name} className="w-full">
      <Link 
        to={link.to} 
        className={`
          ${pageActive === link.slug && link.slug === 'home' ? 'border-white' 
            : pageActive === link.slug ? 'border-gray-700' 
            : ''
          }    
          ${listClass}
        `}
      >
        {link.name}
      </Link>
    </li>
  ))

  const hamburgerMenuIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )

  const buttonClasses = `
    fixed md:hidden bottom-5 right-5 
    bg-gray-700 text-white 
    rounded-full p-3 z-40
    shadow-md
  `

  const menuClasses = `
    fixed bottom-0 left-0 right-0
    pb-12 px-5 z-50 
    bg-white dark:bg-gray-700 rounded-t-2xl 
    block md:hidden
    text-gray-700 dark:text-gray-100
    transition-transform duration-500
    ${menu ? 'translate-y-0' : 'translate-y-full'}
  `
  const shadowStyle = {
    boxShadow: '0 -2px 15px rgba(0,0,0,0.15)'
  }

  return (
    <>
      <button onClick={showMenu} className={buttonClasses} name="show-menu">
        {hamburgerMenuIcon}
      </button>
      <div className={menuClasses} style={shadowStyle}>
        <button onClick={closeMenu} className="pt-5 pb-8 w-full grid justify-center cursor-pointer">
          <div className="bg-gray-300 dark:bg-gray-500 w-20 rounded-full h-1.5"></div>
        </button>
        <ul className="flex flex-col items-center justify-center divide-y divide-gray-300 dark:divide-gray-600">
          {list}
        </ul>
      </div>
    </>
  )
}

export default FloatingMenu