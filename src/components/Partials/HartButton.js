import React from 'react'
// import { Link } from "gatsby";

function HartButton({ to, children, small }) {

  const isSmall = small ? 'px-2.5 py-1.5 text-base' : 'px-3 py-2 text-base md:text-lg'
  return (
    <a 
      href={to}
      className={
        `${isSmall} font-medium
        flex items-center gap-2 w-max rounded-md text-white
        bg-gradient-to-r from-gray-800 to-gray-700 hover:saturate-200`
      }
    >
      {children}
    </a>
  )
}

export default HartButton