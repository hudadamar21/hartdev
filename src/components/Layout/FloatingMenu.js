import React, { useEffect, useState, useRef } from 'react'
// import { Link } from 'gatsby';
import useMenu from '@/hooks/useMenu';

function FloatingMenu({ pageActive }) {

  const menuList = useMenu(pageActive)

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu(current => !current)
  const closeMenu = () => setMenu(false)

  const menuOverlay = useRef(null)

  useEffect(() => {
    if(menu) {
      menuOverlay.current?.classList.remove('hidden')
      setTimeout(() => {
        menuOverlay.current?.classList.remove('opacity-0')
      }, 200);
    } else {
      menuOverlay.current?.classList.add('opacity-0')
      setTimeout(() => {
        menuOverlay.current?.classList.add('hidden')
      }, 500);
    }
  }, [menu])  

  const listClass = `block text-lg font-bold w-full text-center py-3 hover:bg-gray-100 dark:hover:bg-gray-600`

  const list = menuList.map(menu => (
    <li key={menu.slug} className="w-full">
      <a 
        href={menu.to} 
        className={listClass}
      >
        {menu.name}
      </a>
    </li>
  ))

  const menuClasses = `
    fixed bottom-0 left-0 right-0
    pb-12 px-5 z-50 
    bg-white dark:bg-gray-700
    block md:hidden
    text-gray-700 dark:text-gray-100
    transition-all duration-500
    ${menu ? 'translate-y-0 rounded-t-2xl ' : 'translate-y-[89%] rounded-t-none'}
  `
  const shadowStyle = {
    boxShadow: '0 -2px 15px rgba(0,0,0,0.15)'
  }

  return (
    <>
      <button ref={menuOverlay} onClick={closeMenu} className="fixed inset-0 bg-black/50 z-40 opacity-0 transition duration-500 hidden">
      </button>
      <div className={menuClasses} style={shadowStyle}>
        <button onClick={toggleMenu} className="w-full grid justify-center cursor-pointer hover:opacity-80 transition">
          {
            menu
            ? <div className="bg-gray-400 dark:bg-gray-500 w-10 rounded-full h-1 my-4"></div>
            : <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 dark:text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
          }
          
        </button>
        <ul className="flex flex-col items-center justify-center divide-y divide-gray-300 dark:divide-gray-600">
          {list}
        </ul>
      </div>
    </>
  )
}

export default FloatingMenu