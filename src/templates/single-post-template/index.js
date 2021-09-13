import React from "react"
import { graphql } from "gatsby"

import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "@/components/Partials/Seo"
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import PostFeaturedImage from "./PostFeaturedImage";

import Layout from "@/components/Base/Layout"
import SideContent from "@/components/Base/SideContent"
import TableOfContent from "@/components/Partials/TableOfContent"

const SinglePostTemplate = ({ data, location, pageContext }) => {
  const { previous, next, post, posts, site } = data
  const {title, description, thumb, series} = post?.frontmatter
  const siteTitle = site?.siteMetadata?.title || `Title` 

  const listOnSeries = posts?.nodes?.filter(item => 
    item.frontmatter?.series === series 
    && item?.frontmatter?.title !== title
  )
  const { collection } = post?.fields

  return (
    <Layout 
        location={location} 
        title={siteTitle}
        mainClass="pt-20 w-full p-3 lg:p-20"
      >
        <Seo
          title={title}
          image={thumb?.childImageSharp?.gatsbyImageData?.images?.sources[1]?.srcSet}
          description={description || post?.excerpt}
        />
        <div className="grid grid-cols-12 lg:pl-36 -mt-5 md:mt-0">
          <main className="col-span-12 lg:col-span-8">
            <article className="relative" itemScope itemType="http://schema.org/Article">

              <PostHeader post={post} pathSeries={pageContext?.pathSeries} />
              <PostFeaturedImage image={thumb} title={title} />
              <TableOfContent title="Daftar Isi" headings={post?.headings} />

              <section id="content" itemProp="articleBody" >
                <MDXRenderer>{post?.body}</MDXRenderer>
              </section>

              <ins class="adsbygoogle"
                  style={{display:"block"}}
                  data-ad-client="ca-pub-1247746409733600"
                  data-ad-slot="1182638127"
                  data-ad-format="auto"
                  data-full-width-responsive="true"></ins>
              <script dangerouslySetInnerHTML={{ __html: `
                (adsbygoogle = window.adsbygoogle || []).push({});
              `}}></script>

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
