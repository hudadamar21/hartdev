import React from 'react'
import { graphql, useStaticQuery } from "gatsby";

import PostCard from "@/components/Posts/PostCard";
import HartButton from "@/components/Partials/HartButton";
import LazyLoad from '@/components/Partials/LazyLoad';

function LatestPost() {

  const data =  useStaticQuery(graphql`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
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

  const posts = data.allMdx.edges

  return (
    <section className="flex flex-col items-center pb-40 px-5 md:px-20">
      <h1 id="latest-posts" className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 uppercase">
        Latest Posts
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-10">
      {
        posts.slice(0, 2).map(post => {
          return (
            <LazyLoad skeletonTemplate="big-post-card">  
              <PostCard 
                post={post.node} 
                withDescription={false} 
                title={post.node.frontmatter.title || 'No Title'} 
                key={post.node.fields.slug} 
              />
            </LazyLoad>
          )
        })
      } 
      </ul>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mb-10">
        {posts.slice(2).map(post => {
          return (
            <LazyLoad skeletonTemplate="post-card">
              <PostCard 
                post={post.node} 
                withDescription={false} 
                title={post.node.frontmatter.title || 'No Title'} 
                key={post.node.fields.slug} 
              />
            </LazyLoad>
          )
        })}
      </ul>
      <LazyLoad skeletonTemplate="box">
        <HartButton to="/posts">
          Show more
        </HartButton>
      </LazyLoad>
    </section>
  )
}

export default LatestPost