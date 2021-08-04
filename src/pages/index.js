import React, {useEffect, useState} from "react"
import { Link, graphql, useStaticQuery } from "gatsby";
import LogoType from "../components/LogoType";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";

const HomePage = ({ location }) => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 9
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              dateFromNow: date(fromNow: true)
              title
              description
              category
              thumb {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    transformOptions: {fit: COVER}
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges
  
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    window.document.addEventListener('scroll', () => {
      const height = window.innerHeight
      const topWhenScroll = window.document.body.getBoundingClientRect().top / -1
      if (height <= topWhenScroll) {
        setIsTop(false)
      } else {
        setIsTop(true)
      }
    })
  }, [])

  const contents = [
    {
      to: '/blog',
      imageSrc: '/artikel_blog.svg',
      name: 'Artikel Blog'
    },
    {
      to: '/tailwindcss-components',
      imageSrc: '/tailwind_components.svg',
      name: 'Tailwind Components'
    },
    {
      to: '/tutorial',
      imageSrc: '/tutorial.svg',
      name: 'Tutorial'
    },

  ]

  return (
    <Layout location={location} navbarDark={isTop}>
      <section className="
        relative
        h-screen overflow-hidden 
        grid grid-cols-1 lg:grid-cols-2 items-center
        bg-black
        px-5 lg:px-20
      ">
        <img 
          src="/banner-background.jpg" 
          className="absolute bottom-0 left-0 z-0 opacity-30" 
          alt=""
        />
        <div className="text-white relative z-10">
          <h1 className="font-bold text-4xl mb-2">All Stuff Of Programmers</h1>
          <p className="mb-8">Tutorial membuat aplikasi website yang cocok untuk pemula, kumpulan-kumpulan kode yang bisa langsung digunakan, dan artikel blog tentang programming.</p>
          <a 
            href="#contents"
            className="
              flex items-end gap-2 w-max
              bg-gray-800 hover:bg-gray-700
              border-b-4 border-gray-600 
              font-medium px-3 py-2 text-base md:text-lg
            "
          >
            Ngoding Sekarang
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
        
        <div className="hidden lg:block justify-self-end relative z-10">
          <LogoType/>
        </div>
      </section>
      <section className="flex flex-col items-center pt-20 pb-40 md:py-40 px-5 md:px-20">
        <h1 id="contents" className="pt-20 -mt-20 text-2xl md:text-3xl font-bold mb-6 md:mb-10 uppercase">Content List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
          {
            contents.map(({to, imageSrc, name}) => {
              return (
                <Link 
                  to={to}
                  key={to}
                  className="hover:opacity-90 overflow-hidden group"
                >
                  <img 
                    className="group-hover:scale-110 transition-transform duration-300 group-hover:rotate-2" 
                    src={imageSrc} 
                    alt={name}
                  />
                </Link>
              )
            })
          }
        </div>
      </section>
      <section className="flex flex-col items-center pb-40 px-5 md:px-20">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 uppercase">
          Postingan Terbaru
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {posts.map(post => {
            const title = post.node.frontmatter.title || post.node.fields.slug
            return (
              <PostCard 
                post={post.node} 
                withDescription={false} 
                title={title} 
                key={post.node.fields.slug} 
              />
            )
          })}
        </ul>
        <a 
          href="#"
          className="
            flex items-end gap-2 w-max
            bg-gray-700 hover:bg-gray-600
            border-b-4 border-gray-500
            text-white font-medium text-base md:text-lg
            px-6 py-2.5 mt-10
          "
        >
          LIHAT SEMUA
        </a>
      </section>
    </Layout>
  )
}

export default HomePage
