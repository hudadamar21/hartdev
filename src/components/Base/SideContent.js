import React from 'react'
import { Link } from "gatsby";

import YoutubeSubscribe from '../Partials/YoutubeSubscribe'

function SideContent() {
  return (
    <aside className="col-span-4 lg:col-span-1 flex flex-col gap-8">
      <div className="flex flex-col shadow-lg border rounded-lg p-5">
        <h1 className="text-xl font-semibold mb-3">Kategori</h1>
        <ul className="pl-2 flex flex-col gap-2">
          <li className="hover:underline">
            <Link to="/blog">Artikel Blog</Link>
          </li>
          <li className="hover:underline">
            <Link to="/tailwindcss-components">Tailwindcss Components</Link>
          </li>
          <li className="hover:underline">
            <Link to="/tutorial">Tutorial</Link>
          </li>
        </ul>
      </div>
      <YoutubeSubscribe/>
    </aside>
  )
}

export default SideContent