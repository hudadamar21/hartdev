import * as React from "react"
import { Link } from "gatsby";

const HomePage = () => {
  return (
    <div>
      <Link to="/blog">Blog</Link>
      <Link to="/tailwindcss-components">Tailwindcss Components</Link>
      <Link to="/tutorials">Tutorials</Link>
    </div>
  )
}

export default HomePage
