import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import loadable from "@loadable/component"

const PostFooter = loadable(() => import("./PostFooter"))
const PostHeader = loadable(() => import("./PostHeader"))
const PostFeaturedImage = loadable(() => import("./PostFeaturedImage"))
const Layout = loadable(() => import("@/layouts/Main"))
const SideContent = loadable(() => import("@/components/Layout/Sidebar/SideContent"))
const TableOfContent = loadable(() => import("@/components/Posts/TableOfContent"))

const SinglePostTemplate = ({ data, location, pageContext }) => {
  const { previous, next, post, posts, site } = data
  const {title, description, thumb, series} = post?.frontmatter
  const siteTitle = site?.siteMetadata?.title || `Title` 
  const metaImage = thumb?.childImageSharp?.gatsbyImageData?.images?.sources[1]?.srcSet
  
  const listOnSeries = posts?.nodes?.filter(item => 
    item.frontmatter?.series === series 
    && item?.frontmatter?.title !== title
  )
  const { collection } = post?.fields

  return (
    <Layout
        seo={{
          title,
          image: metaImage,
          description: description || post?.excerpt
        }}
        location={location} 
        title={siteTitle}
        mainClass="pt-20 w-full p-3 lg:p-20"
      >
        <div className="grid grid-cols-12 xl:pl-36 -mt-5 md:mt-0">
          <main className="col-span-12 lg:col-span-8">
            <article className="relative" itemScope itemType="http://schema.org/Article">

              <PostHeader post={post} pathSeries={pageContext?.pathSeries} />
              <PostFeaturedImage image={thumb} title={title} />
              <TableOfContent title="Daftar Isi" headings={post?.headings} />

              <section id="content" itemProp="articleBody" >
                <MDXRenderer>{post?.body}</MDXRenderer>
              </section>

              <PostFooter post={post} paginate={{previous, next}}/>
              
            </article>

          </main>
          <SideContent
            title="Related"
            collection={collection} 
            lists={listOnSeries}
            seriesSlug={pageContext.pathSeries}
            contentType="single"
          />
        </div>
      </Layout>
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
      }
      headings {
        depth
        value
      }
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        dateFromNow: date(fromNow: true, locale: "id-ID")
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
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        fields {
          slug
          collection
        }
        frontmatter {
          title
          series
          date(formatString: "DD MMMM YYYY")
          dateFromNow: date(fromNow: true, locale: "id-ID")
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
