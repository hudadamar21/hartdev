import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import HartButton from "@/components/Partials/HartButton"
import YoutubeSubscribe from "@/components/Partials/YoutubeSubscribe"

function Thumbnail({image, title}) {
  const thumbImage = getImage(image)
  return thumbImage 
    ? <GatsbyImage image={thumbImage} alt={title} /> 
    : <div className="w-full h-full bg-gray-200"></div>
}

function SideContent({title, collection, lists, seriesSlug, contentType }) {

  const query = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          frontmatter: {
            contentType: {eq: "single"}
          }
        }
      ) {
        distinct(field: frontmatter___series)
        distinctByCollection: distinct(field: fields___collection)
        nodes {
          frontmatter {
            series
            title
          }
          fields {
            collection
            slug
          }
        }
      }
    }
  `)
  
  const collectionListNames = query.allMdx.distinctByCollection
  const seriesListNames = query.allMdx.distinct

  const categoryList = collectionListNames.map(category => {
    const seriesList = seriesListNames.map(series => {
      const posts = query.allMdx.nodes.filter(post => post.frontmatter.series === series)
      const { collection, slug } = posts[0].fields
      return {
        title: series,
        collection,
        link: `/${collection}/${slug.split('/')[1]}`,
        count: posts.length
      }
    })
    return {
      category: category.replace(/-/g, ' '),
      list: seriesList.filter(post => post.collection === category)
    }
  })

  const isSourceCode = collection === 'source-code'

  function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  const shuffledList = shuffleArray(lists)

  const contentList = shuffledList?.slice(0, 3).map(list => {
    const {collection, slug} = list.fields
    return (
      <li key={slug}>
        <Link to={'/'+collection+slug} className="flex items-center gap-3 hover:opacity-80 overflow-hidden">
          <div className="w-1/3 rounded overflow-hidden">
            <Thumbnail image={list.frontmatter.thumb} title={list.frontmatter.title} />
          </div>
          <h1 className="w-2/3 line-clamp-2">{list.frontmatter.title}</h1>
        </Link>
      </li>
    )
  })

  const listLimit = lists.length > 5 && (
    <div className="mt-5">
      <HartButton to={seriesSlug} small={true}>
        Show More
      </HartButton>
    </div> 
  )

  const pageMessage = contentType === 'list' ? 'series lain' : 'post yang related'
  const emptyList = <p className="text-gray-600 dark:text-gray-300">Tidak ada {pageMessage}</p>

  return (
    <aside className="col-span-12 lg:col-span-4 flex flex-col gap-5 lg:pl-0 xl:pl-10 mt-10 lg:mt-0">
      {isSourceCode &&  (
        <YoutubeSubscribe/>
      )}
      <div className={`
        ${lists.length > 0 ? '' : 'sticky top-20'}
        flex flex-col
        shadow-none lg:shadow-lg border 
        bg-white dark:bg-gray-800 dark:border-black
        rounded-none lg:rounded-lg p-6 mt-2
      `}>
        <h1 className="text-xl font-semibold mb-5 capitalize">
          Categories
        </h1>
        <ul className="flex flex-col gap-5">
          {categoryList.map(category => (
            <li key={category.category}>
              <h1 className="font-semibold text-lg capitalize mb-2">{category.category}</h1>
              <ul className="pl-2 space-y-1">
                {category.list.map(series => (
                  <li className="flex items-center justify-between w-full" key={series.title}>
                    <Link to={series.link} className="line-clamp-1 hover:underline">
                      {series.title}
                    </Link>
                    <span className="">({series.count})</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      {
        lists.length > 0 && (
          <div className="
            sticky top-20 left-0 
            flex flex-col 
            shadow-none lg:shadow-lg border 
            bg-white dark:bg-gray-800 dark:border-black
            rounded-none lg:rounded-lg p-6
          ">
            <h1 className="text-xl font-semibold mb-5 capitalize">
              {title} {collection.replace(/-/g, ' ')}
            </h1>
            <ul className="flex flex-col gap-5">
              {lists.length > 0 ? contentList : emptyList}
            </ul>
            {listLimit} 
          </div>
        )
      }
      <div className="sticky top-20 left-0">
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html : `
          atOptions = {
            'key' : '6b7d23175f0cd1a81c30ac40aa4d21c6',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : {}
          };
          document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://hungrylongingtile.com/6b7d23175f0cd1a81c30ac40aa4d21c6/invoke.js"></scr' + 'ipt>');
        `
        }}></script>
      </div>
    </aside>
  )
}

export default SideContent