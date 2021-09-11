import React from "react"
import Seo from "@/components/Partials/Seo"
import Layout  from "@/components/Base/Layout"
import PostCard  from "@/components/Posts/PostCard"
import Pagination  from "@/components/Partials/Pagination"
import SideContent  from "@/components/Base/SideContent"

const PostList = ({ data, pageContext, location }) => {
  const posts = data?.posts?.nodes

  const gatsbyImage = data?.mdx?.frontmatter?.thumb?.childImageSharp?.gatsbyImageData
  const thumb = gatsbyImage?.images?.sources[1]?.srcSet

  const listOfCollection = data?.listOfCollection?.nodes

  const seriesName = posts.map(post => post?.frontmatter?.series)[0]

  const seriesByCollection = listOfCollection.filter(series => 
    series?.fields.collection === pageContext?.collection
    && series?.frontmatter?.title !== seriesName
  )
  
  const postList = posts?.map(post => (
    <PostCard 
      post={post} 
      title={post?.frontmatter?.title} 
    />
  ))

  return (
    <Layout
        pageActive={pageContext?.collection}
        location={location}
        mainClass="pt-20 w-full p-0 lg:p-20"
      >
        <Seo title={"HartDev - " + seriesName} image={thumb} />
        <div className="grid grid-cols-12 gap-10 w-full ">
          <main className="col-span-12 lg:col-span-8 p-3 lg:p-0">
            <div className="mt-5 mb-7 py-3 border-l-8 pl-4 border-gray-600">
              <h1 className="font-display text-3xl tracking-widest mb-1">
                {pageContext?.title} 
              </h1>
              <p className="w-[95%] text-sm lg:text-base">
                {pageContext?.description}
              </p>
            </div>
            {
              posts.length > 0 
                ? <ul className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
                    {postList}
                  </ul>
                : <div>Tidak Ada Posts</div>
            }
            <Pagination pageContext={pageContext}/>
          </main>
          <SideContent
            title="Another"
            collection={pageContext?.collection} 
            lists={seriesByCollection}
            seriesSlug={"/"+ pageContext?.collection}
            contentType="list"
          />
        </div>
      </Layout>
  )
}

export default PostList
