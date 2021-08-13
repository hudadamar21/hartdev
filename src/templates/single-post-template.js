import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx"

import Bio from "@/components/Partials/Bio"
import Seo from "@/components/Partials/Seo"
import Layout from "@/components/Base/Layout"
import SideContent from "@/components/Base/SideContent";

const BlogPostTemplate = ({ data, location }) => {
  const { previous, next, post, posts } = data

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const thumbImage = getImage(post.frontmatter.thumb)

  const listOnSeries = posts.nodes.filter(item => 
    item.frontmatter.series === post.frontmatter.series
  )

  const { collection } = post.fields
  const seriesName = listOnSeries[0].fields.slug.split('/')[1]
  const seriesSlug = `/${collection}/${seriesName}`

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
      <div className="grid grid-cols-12">
        <main className="col-span-12 lg:col-span-8">
          
          <article
            className="relative"
            itemScope
            itemType="http://schema.org/Article"
          >

            {/* Header include Title Date and Bio */}
            <header className="flex flex-col gap-3 mb-3">
              <div className="flex items-center gap-3">
                <Link to={seriesSlug}>
                  <svg 
                    className="
                      hover:-translate-x-2 
                      transition duration-200 
                      h-8 w-8 text-gray-700 hover:text-gray-500
                    " 
                    xmlns="http://www.w3.org/2000/svg" fill="none" 
                    viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg> 
                </Link>
                <h1 className="text-3xl font-bold" itemProp="headline">
                  {post.frontmatter.title}
                </h1>
              </div>

              <Link to={seriesSlug} className="text-gray-500 ">
                series of <span className="underline hover:text-gray-700">{post.frontmatter.series}</span>
              </Link>
              
              <div className="flex items-center justify-between">
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
              {/* <MDXRenderer>{post.tableOfContents}</MDXRenderer> */}
            </nav>

            {/* Content */}
            <section id="content" itemProp="articleBody" >
              <MDXRenderer>{post.body}</MDXRenderer>
            </section>

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
                    to={"/"+previous.fields.collection+previous.fields.slug} 
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
                    to={"/"+next.fields.collection+next.fields.slug} 
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
        <SideContent 
          collection={collection} 
          lists={listOnSeries} 
          seriesSlug={seriesSlug}
        />
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
    post: mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      tableOfContents
      fields {
        collection
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        dateFromNow: date(fromNow: true)
        description
        tags
        series
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
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
        collection
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
        collection
      }
      frontmatter {
        title
      }
    }
    posts: allMdx(filter: {frontmatter: {contentType: {eq: "single"}}}) {
      nodes {
        fields {
          collection
          slug
        }
        frontmatter {
          title
          series
        }
      }
    }
  }
`
