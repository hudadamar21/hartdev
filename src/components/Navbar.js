import * as React from 'react'
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

function Navbar({title}) {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur flex items-center justify-between h-16 px-5 md:px-12 lg:px-20  bg-white/50">
      <Link to="/" className="flex items-center gap-3">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          placeholder="tracedSVG"
          src="../images/logo.png"
          width={35}
          height={35}
          quality={95}
          alt="Profile picture"
        />
        <h1 className="text-xl font-bold">{title}</h1>
      </Link>
      <ul className="flex items-center gap-10">
        <li className="border-b-2 border-transparent hover:border-gray-700">
          <Link to="/">Home</Link>
        </li>
        <li className="border-b-2 border-transparent hover:border-gray-700">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar