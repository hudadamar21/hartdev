import React, { lazy } from "react"
import { graphql } from "gatsby"

import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "@/components/Partials/Seo"
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import PostFeaturedImage from "./PostFeaturedImage";
import PostAds from "./PostAds";
import LazyLoad from "@/components/Partials/LazyLoad";

const Layout = lazy(() => import("@/components/Base/Layout"))
const SideContent = lazy(() => import("@/components/Base/SideContent"))

const TableOfContent = lazy(() => import("@/components/Partials/TableOfContent"))

const SinglePostTemplate = ({ data, location, pageContext }) => {
  const { previous, next, post, posts, site } = data
  const {title, description, thumb, series} = post.frontmatter
  const siteTitle = site.siteMetadata?.title || `Title` 

  const listOnSeries = posts.nodes.filter(item => 
    item.frontmatter?.series === series
    && item.frontmatter.title !== title
  )
  const { collection } = post.fields

  return (
    <LazyLoad skeletonTemplate="box">
      <Layout 
        location={location} 
        title={siteTitle}
        mainClass="pt-20 w-full p-5 lg:p-20"
      >
        <Seo
          title={title}
          description={description || post.excerpt}
        />
        <div className="grid grid-cols-12 lg:pl-36">
          <main className="col-span-12 lg:col-span-8">
            <article className="relative" itemScope itemType="http://schema.org/Article">

              <LazyLoad skeletonTemplate="box">
                <PostHeader post={post} pathSeries={pageContext.pathSeries} />
              </LazyLoad>

              <PostFeaturedImage image={thumb} title={title} />

              <PostAds/>

              <LazyLoad skeletonTemplate="box">
                <TableOfContent title="Daftar Isi" headings={post.headings} />
              </LazyLoad>
              
              <section id="content" itemProp="articleBody" >
                <MDXRenderer>{post.body}</MDXRenderer>
              </section>

                <PostFooter post={post} paginate={{previous, next}}/>

            </article>

          </main>
          <LazyLoad skeletonTemplate="box">
            <SideContent
              title="Related"
              collection={collection} 
              lists={listOnSeries}
              seriesSlug={pageContext.seriesSlug}
              contentType="single"
            />
          </LazyLoad>
        </div>
      </Layout>
    </LazyLoad>
  )
}

export default SinglePostTemplate

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
    }
  }
`
