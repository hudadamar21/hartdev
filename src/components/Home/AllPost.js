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
                    formats: [WEBP, AVIF]
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
      <div className="flex items-center gap-2 mb-3 md:mb-5">
        <h1 id="latest-posts" className="font-display tracking-widest justify-self-start text-xl md:text-3xl font-bold uppercase">
          All Post
        </h1>
        <a href="/posts" aria-label="show-more" className="block opacity-60 px-2 py-1 rounded hover:bg-black/10 dark:hover:bg-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
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