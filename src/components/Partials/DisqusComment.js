import * as React from "react";
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const DisqusComment = ({post}) => {
  let disqusConfig = {
    url: window.location.href,
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