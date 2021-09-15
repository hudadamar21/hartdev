import React from "react"
import loadable from "@loadable/component"

const Layout = loadable(() => import("@/layouts/Main"))
const PostCard = loadable(() => import("@/components/Posts/PostCard"))
const Pagination = loadable(() => import("@/components/Posts/Pagination"))
const SideContent = loadable(() => import("@/components/Layout/Sidebar/SideContent"))

const PostList = ({ data, pageContext, location }) => {
  const posts = data?.posts?.nodes
  const listOfCollection = data?.listOfCollection?.nodes

  const gatsbyImage = data?.mdx?.frontmatter?.thumb?.childImageSharp?.gatsbyImageData
  const metaImage = gatsbyImage?.images?.sources[1]?.srcSet

  const seriesByCollection = listOfCollection.filter(series => 
    series?.fields.collection === pageContext?.collection
    && series?.frontmatter?.title !== pageContext?.title
  )
  
  const postList = posts?.map(post => (
    <PostCard 
      post={post} 
      title={post?.frontmatter?.title} 
      key={post?.fields?.slug}
    />
  ))

  return (
    <Layout
        seo={{
          title: "HartDev - " + pageContext?.title,
          description: pageContext?.description,
          image: metaImage
        }}
        pageActive={pageContext?.collection}
        location={location}
        mainClass="pt-20 w-full p-0 lg:p-20"
      >
        <div className="grid grid-cols-12 gap-5 w-full">
          <main className="col-span-12 lg:col-span-8 p-3 lg:p-0">
            <article className="mt-5 mb-12 py-3 border-l-8 pl-4 border-gray-600">
              <h1 className="font-display text-3xl tracking-widest mb-1">
                {pageContext?.title} 
              </h1>
              <p className="w-[95%] text-sm lg:text-base opacity-80">
                {pageContext?.description}
              </p>
            </article>
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
