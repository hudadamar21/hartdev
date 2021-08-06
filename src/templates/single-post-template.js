import * as React from "react"
import { Link,navigate, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Bio from "../components/Partials/Bio"
import Seo from "../components/Partials/Seo"
import Layout from "../components/Base/Layout"
import SideContent from "../components/Base/SideContent";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const thumbImage = getImage(post.frontmatter.thumb)

  return (
    <Layout 
      location={location} 
      title={siteTitle}
      mainClass="pt-20 w-full p-5 lg:p-20"
    >
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="grid grid-cols-4 gap-10">
        <main className="
          col-span-4 lg:col-span-3 md:px-10 lg:pl-36 lg:pr-0
        ">
          
          <article
            className="relative col-span-8"
            itemScope
            itemType="http://schema.org/Article"
          >

            <button className="lg:absolute top-0 -left-16 mb-5" onClick={() => navigate(-1)}>
              <svg 
                className="
                  hover:-translate-x-2 
                  transition duration-200 
                  h-10 w-10 text-gray-400 hover:text-gray-300
                " 
                xmlns="http://www.w3.org/2000/svg" fill="none" 
                viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg> 
            </button>

            {/* Header include Title Date and Bio */}
            <header>
              <h1 className="text-3xl font-bold" itemProp="headline">
                {post.frontmatter.title}
              </h1>
              <div className="flex items-center justify-between my-5">
                <div className="flex items-center gap-3 divide-x text-sm">
                  <span className="text-gray-500">
                    {post.frontmatter.date}
                  </span>
                  <span className="pl-3 text-gray-500">
                    {post.frontmatter.dateFromNow}
                  </span>
                </div>
                <Bio />
              </div>
            </header>

            {/* Feature Image */}
            <GatsbyImage image={thumbImage} alt={post.frontmatter.title} />
            <script async="async" data-cfasync="false" src="//hungrylongingtile.com/f322d3f05a05bdf9446863398c6a1a90/invoke.js"></script>
            <div id="container-f322d3f05a05bdf9446863398c6a1a90"></div>

            {/* Table Of Contents */}
            <nav id="table-of-contents">
              <h1 className="text-xl font-medium -mb-4">
                Daftar isi
              </h1>
              <div 
                className="pl-3" 
                dangerouslySetInnerHTML={{ __html: post.tableOfContents }} 
              />
            </nav>

            {/* Content */}
            <section
              id="content"
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />

            {/* Footer */}
            <footer className="mt-10">
              <Bio />
            </footer>

          </article>


          {/* Paginate to Prev and Next Post */}
          <nav className="mt-10">
            <ul className="flex flex-wrap justify-between">
              <li>
                {previous && (
                  <Link 
                    className="
                      group
                      flex items-center gap-2
                      transition duration-200 
                      px-3 py-2 
                      font-semibold
                    " 
                    to={previous.fields.slug} 
                    rel="prev"
                  >
                    <svg 
                      className="
                        group-hover:-translate-x-2 
                        transition-transform duration-200 
                        h-6 w-6
                      " 
                      xmlns="http://www.w3.org/2000/svg" fill="none" 
                      viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg> 
                    {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link 
                    className="
                      group
                      flex items-center gap-2
                      transition duration-200 
                      px-3 py-2 
                      font-semibold
                    " 
                    to={next.fields.slug} 
                    rel="next"
                  >
                    {next.frontmatter.title} 
                    <svg 
                      className="
                        group-hover:translate-x-2 
                        transition-transform duration-200 
                        h-6 w-6
                      "
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
              </li>
            </ul>
          </nav>

        </main>
        <SideContent/>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        dateFromNow: date(fromNow: true)
        description
        thumb {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              quality: 100
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
