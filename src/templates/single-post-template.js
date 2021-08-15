import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx"

import Seo from "@/components/Partials/Seo"
import Layout from "@/components/Base/Layout"
import SideContent from "@/components/Base/SideContent";
import DisqusComment from "@/components/Partials/DisqusComment";
import PaginationSimple from "@/components/Partials/PaginationSimple";
import TableOfContent from "@/components/Partials/TableOfContent";

const BlogPostTemplate = ({ data, location }) => {
  const { previous, next, post, posts, site } = data

  const siteTitle = site.siteMetadata?.title || `Title`
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
      <div className="grid grid-cols-12 lg:pl-36">
        <main className="col-span-12 lg:col-span-8">
          
          <article
            className="relative"
            itemScope
            itemType="http://schema.org/Article"
          >

            {/* Header include Title, Series of, Date */}
            <header className="flex flex-col">
              <div className="flex items-center gap-3 lg:-translate-x-11">
                <Link to={seriesSlug}>
                  {/* Arrow Left */}
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
                <h1 className="text-2xl font-bold" itemProp="headline">
                  {post.frontmatter.title}
                </h1>
              </div>
              <Link to={seriesSlug} className="text-gray-500 text-sm">
                series of <span className="underline hover:text-gray-700">{post.frontmatter.series}</span>
              </Link>

              <div className="flex items-center justify-between text-[0.8rem] text-gray-500 mt-5 mb-2">
                <span>{post.fields.birthTime}</span>
                <span>{post.fields.birthTimeFormNow}</span>
              </div>
            </header>

            {/* Feature Image */}
            {thumbImage && <GatsbyImage image={thumbImage} alt={post.frontmatter.title} />}
            <script async="async" data-cfasync="false" src="//hungrylongingtile.com/f322d3f05a05bdf9446863398c6a1a90/invoke.js"></script>
            <div id="container-f322d3f05a05bdf9446863398c6a1a90"></div>

            <TableOfContent title="Daftar Isi" headings={post.headings} />

            {/* Content */}
            <section id="content" itemProp="articleBody" >
              <MDXRenderer>{post.body}</MDXRenderer>
            </section>

            <PaginationSimple previous={previous} next={next} />

            <DisqusComment post={post} />

          </article>

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
        siteUrl
      }
    }
    post: mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      tableOfContents
      fields {
        slug
        collection
        birthTime(formatString: "DD MMMM YYYY", locale: "id-ID")
        birthTimeFormNow: birthTime(fromNow: true, locale: "id-ID")
      }
      headings {
        depth
        value
      }
      frontmatter {
        title
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
    posts: allMdx(
      filter: {frontmatter: {contentType: {eq: "single"}}}
      sort: {fields: frontmatter___date, order: ASC}
    ) {
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
