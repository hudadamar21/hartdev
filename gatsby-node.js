const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const postsQuery = await graphql(
    `
      {
        allMarkdownRemark {
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
          }
        }
      }
    `
  )

  if (postsQuery.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      postsQuery.errors
    )
    return
  }


  const posts = postsQuery.data.allMarkdownRemark.edges

  if (posts.length > 0) {

    // Single Post
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].node.id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].node.id

      const { id, fields, frontmatter } = post.node

      if(frontmatter.contentType === 'single') {
        createPage({
          path: '/' + fields.collection + fields.slug,
          component: path.resolve("./src/templates/single-post-template.js"),
          context: {
            id,
            previousPostId,
            nextPostId,
            filter: {}
          },
        })
      }

    })

    // All Posts
    paginate({
      createPage,
      items: posts.filter(post => post.node.frontmatter.contentType === 'single'),
      itemsPerPage: 9,
      pathPrefix: `/posts`,
      component: path.resolve("./src/templates/series-list-template.js"),
      context: {
        title: "All Posts",
        filter: {"frontmatter": {"contentType": {"eq": "single"}}}
      },
    })

    // Collection of Post
    const mapCollections = posts.map(item => item.node.fields.collection)
    const collections = new Set([...mapCollections])

    collections.forEach(collection => {
      const items = posts.filter(({node}) => {

        return node.fields.collection === collection 
          && node.fields.slug !== '/' 
          && node.frontmatter.contentType === 'list'
      })
      paginate({
        createPage,
        items,
        itemsPerPage: 9,
        pathPrefix: `/${collection}`,
        component: path.resolve("./src/templates/series-list-template.js"),
        context: {
          title: collection,
          items,
          filter: {
            "fields": {
              "collection": {eq: collection}, 
              "slug": {ne: "/"}
            }, 
            "frontmatter": {"contentType": {eq: "list"}}
          }
        },
      })
    })

    const seriesQuery = await graphql(`
      {
        allMarkdownRemark(
          filter: {frontmatter: {contentType: {eq: "list"}}, fields: {slug: {ne: "/"}}}
        ) {
          edges {
            node {
              frontmatter {
                title
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

    const seriesList = seriesQuery.data.allMarkdownRemark.edges

    seriesList.forEach(post => {
      const { slug, collection } = post.node.fields
      const { title } = post.node.frontmatter

      const items = posts.filter(item => item.node.frontmatter.series === title)

      paginate({
        createPage,
        items,
        itemsPerPage: 8,
        pathPrefix: '/' + collection + slug.slice(0, -1),
        component: path.resolve("./src/templates/post-list-template.js"),
        context: {
          title,
          filter: {
            "frontmatter": {"series": {eq: title}}
          }
        },
      })
    })

  } // end if

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
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

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
