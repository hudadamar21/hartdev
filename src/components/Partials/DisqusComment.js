import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const DisqusComment = ({post}) => {

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const url = site.siteMetadata.siteUrl + '/' + post.fields.collection + post.fields.slug

  let disqusConfig = {
    url,
    identifier: post.id,
    title: post.title,
  }
  return (
    <>
      <h1>{post.title}</h1>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      <Disqus config={disqusConfig} />
    </>
  )
}

export default DisqusComment