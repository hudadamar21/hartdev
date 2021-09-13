const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const postsQuery = await graphql(`
    {
      allMdx {
        edges {
          node {
            fields {
              slug
              collection
            }
            frontmatter {
              title
              contentType
              series
            }
            id
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }
    }
  `)

  if (postsQuery.errors) {
    reporter.panicOnBuild(
      `There was an error loading your posts`,
      postsQuery.errors
    )
    return
  }


  const posts = postsQuery.data.allMdx.edges

  if (posts.length > 0) {

    const singlePostsQuery = await graphql(`
      {
        allMdx(filter: {frontmatter: {contentType: {eq: "single"}}}) {
          edges {
            previous {
              id
            }
            node {
              id
              fields {
                slug
                collection
              }
            }
            next {
              id
            }      
          }
        }
      }
    `)

    const singlePosts = singlePostsQuery.data.allMdx.edges

    // Single Post
    singlePosts.forEach((post) => {
      const previousPostId = post.previous?.id
      const nextPostId = post.next?.id

      const { id, fields } = post.node

      const seriesSlug = fields.slug.split('/')[1]
        createPage({
          path: '/' + fields.collection + fields.slug,
          component: path.resolve("./src/templates/single-post-template/index.js"),
          context: {
            id,
            pathSeries: `/${fields.collection}/${seriesSlug}`,
            previousPostId,
            nextPostId
          },
        })
    })

    // All Posts
    paginate({
      createPage,
      items: posts.filter(post => post.node.frontmatter.contentType === 'single'),
      itemsPerPage: 10,
      pathPrefix: `/posts`,
      component: path.resolve("./src/templates/allpost-template.js"),
      context: {
        title: "All Posts",
      },
    })

    
    // Collection of Post
    const collectionPostsQuery = await graphql(`
      {
        allMdx(
          filter: {frontmatter: {contentType: {eq: "list"}}, fields: {slug: {eq: "/"}}}
        ) {
          nodes {
            frontmatter {
              title
              collection
              description
            }
          }
        }
      }
    `)
    
    const collectionPosts = collectionPostsQuery.data.allMdx.nodes

    collectionPosts.forEach(collection => {
      const { title, collection: collectionName, description } = collection.frontmatter

      const items = posts.filter(({node}) => (
        node.fields.collection === collectionName
        && node.fields.slug !== '/' 
        && node.frontmatter.contentType === 'list'
      ))
      paginate({
        createPage,
        items,
        itemsPerPage: 9,
        pathPrefix: `/${collectionName}`,
        component: path.resolve("./src/templates/series-list-template.js"),
        context: {
          title,
          collection: collectionName,
          description
        },
      })
    })

    const seriesQuery = await graphql(`
      {
        allMdx(
          filter: {frontmatter: {contentType: {eq: "list"}}, fields: {slug: {ne: "/"}}}
        ) {
          edges {
            node {
              frontmatter {
                title
                description
              }
              fields {
                collection
                slug
              }
            }
          }
        }
      }
    `)

    const seriesList = seriesQuery.data.allMdx.edges

    seriesList.forEach(post => {
      const { slug, collection } = post.node.fields
      const { title, description } = post.node.frontmatter

      const items = posts.filter(item => item.node.frontmatter.series === title)

      paginate({
        createPage,
        items,
        itemsPerPage: 8,
        pathPrefix: '/' + collection + slug.slice(0, -1),
        component: path.resolve("./src/templates/post-list-template.js"),
        context: {
          title,
          description,
          collection
        },
      })
    })

  } // end if

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })

    const parent = getNode(node.parent);
    let collection = parent.sourceInstanceName;
    createNodeField({
      node,
      name: 'collection',
      value: collection,
    });
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  
  createTypes(`
    type SiteSiteMetadata {
      title: String
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      facebook: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      category: String
      contentType: String
      date: Date @dateformat
      description: String
      keyword: [String]
      series: String
      tags: [String]
      title: String
    }

    type Fields {
      birthTime: Date @dateformat
      collection: String
      modifiedTime: Date @dateformat
      slug: String
    }

    type Equal {
      eq: String
    }

    type ContentTypeEqual {
      contentType: Equal
    }

    type FrontmatterContentTypeEqual {
      frontmatter: ContentTypeEqual
    }

  `)
}
