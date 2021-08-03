import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Bio from "../components/Bio"
import Seo from "../components/Seo"
import Layout from "../components/Layout"

const BlogPostTemplate = ({ data, location }) => {
  console.log(data)
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const thumbImage = getImage(post.frontmatter.thumb)

  console.log(thumbImage)

  return (
    <Layout 
      location={location} 
      title={siteTitle}
      mainClass="w-full p-5 lg:p-20"
    >
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="grid grid-cols-4 gap-6 pl-36">
        <main className="col-span-4 md:col-span-3">
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h1 className="text-3xl font-bold" itemProp="headline">{post.frontmatter.title}</h1>
              <div className="flex items-center justify-between my-5">
                <div className="flex items-center gap-3 divide-x text-sm">
                  <span className="text-gray-500">{post.frontmatter.date}</span>
                  <span className="pl-3 text-gray-500">{post.frontmatter.dateFromNow}</span>
                </div>
                <Bio />
              </div>
            </header>
              <GatsbyImage image={thumbImage} alt={post.frontmatter.title} />
            <nav 
              id="table-of-contents"
              dangerouslySetInnerHTML={{ __html: post.tableOfContents }} 
            />
            <section
              id="content"
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />  
            <footer>
              <Bio />
            </footer>
          </article>
          <nav className="mt-10">
            <ul className="flex flex-wrap justify-between">
              <li>
                {previous && (
                  <Link 
                    className="hover:bg-gray-50 rounded-lg hover:shadow transition duration-200 px-3 py-2 font-semibold" 
                    to={previous.fields.slug} 
                    rel="prev"
                  >
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link 
                    className="hover:bg-gray-50 rounded-lg hover:shadow transition duration-200 px-3 py-2 font-semibold" 
                    to={next.fields.slug} 
                    rel="next"
                  >
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </main>
        <aside className="sticky top-20 left-0 bg-red-500 col-span-4 md:col-span-1 h-64">

        </aside>
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
