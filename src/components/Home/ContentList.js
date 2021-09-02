import React from 'react'
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

function ContentList() {
  return (
    <section className="flex flex-col items-center pt-20 pb-40 md:py-40 px-5 md:px-20 min-h-screen">
      <h1 id="contents" className="pt-20 -mt-20 text-2xl md:text-3xl font-bold mb-6 md:mb-10 uppercase">Content List</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-3">
          <Link 
            to="/blog"
            className="hover:opacity-90 w-full h-full block overflow-hidden group rounded-md transition hover:-translate-y-1 hover:shadow-lg"
          >
            <StaticImage
              className="transition-transform duration-300"
              formats={["AUTO", "WEBP", "AVIF"]}
              src='../images/blog.png'
              width={500}
              height={300}
              quality={60}
              alt="Artikel Blog"
            />
          </Link>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-3">
          <Link 
            to="/source-code"
            className="hover:opacity-90 w-full h-full block overflow-hidden group rounded-md transition hover:-translate-y-1 hover:shadow-lg"
          >
            <StaticImage
              className="transition-transform duration-300"
              formats={["AUTO", "WEBP", "AVIF"]}
              src='../images/source-code.png'
              width={500}
              height={300}
              quality={60}
              alt="Source Code"
            />
          </Link>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-3">
          <Link 
            to="/tutorial"
            className="hover:opacity-90 w-full h-full block overflow-hidden group rounded-md transition hover:-translate-y-1 hover:shadow-lg"
          >
            <StaticImage
              className="transition-transform duration-300"
              formats={["AUTO", "WEBP", "AVIF"]}
              src='../images/tutorial.png'
              width={500}
              height={300}
              quality={60}
              alt="Tutorial Ngoding"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContentList