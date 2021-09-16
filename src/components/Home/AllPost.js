import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import PostCard from "@/components/Posts/PostCard";
import HartButton from "@/components/Partials/HartButton";

function AllPost() {

  const data =  useStaticQuery(graphql`
    {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 8
        filter: {frontmatter: {contentType: {eq: "single"}}}
      ) {
        edges {
          node {
            fields {
              slug
              collection
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              dateFromNow: date(fromNow: true)
              title
              description
              category
              tags
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

  const posts = data?.allMdx?.edges

  return (
    <section id="allpost" className="mx-5 md:mx-20 py-20">
      <h1 id="latest-posts" className="font-display tracking-widest justify-self-start text-xl md:text-3xl font-bold mb-3 md:mb-5 uppercase">
        All Post
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-10">
      {
        posts.slice(0, 2).map(post => {
          return (
            <PostCard 
              post={post?.node} 
              withDescription={false} 
              title={post?.node?.frontmatter?.title || 'No Title'} 
              key={post?.node?.fields?.slug}
            />
          )
        })
      } 
      </ul>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mb-10">
        {posts.slice(2).map(post => {
          return (
            <PostCard 
              post={post?.node} 
              withDescription={false} 
              title={post?.node?.frontmatter?.title || 'No Title'}
              key={post?.node?.fields?.slug}
            />
          )
        })}
      </ul>
      <div className="w-full grid place-items-center">
        <HartButton to="/posts">
          Show more
        </HartButton>
      </div>
    </section>
  )
}

export default AllPost