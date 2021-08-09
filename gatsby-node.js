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
                collection
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

      const { id, fields, frontmatter, contentType } = post.node

      if(contentType !== 'list') {
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
      items: posts,
      itemsPerPage: 8,
      pathPrefix: `/posts`,
      component: path.resolve("./src/templates/post-list-template.js"),
      context: {
        title: "All Posts",
        filter: {}
      },
    })

    // Posts By Collection
    const mapCollections = posts.map(item => item.node.fields.collection)
    const collections = new Set([...mapCollections])

    console.log(collections);

    collections.forEach(collection => {
      paginate({
        createPage,
        items: posts,
        itemsPerPage: 8,
        pathPrefix: `/${collection}`,
        component: path.resolve("./src/templates/post-list-template.js"),
        context: {
          title: collection,
          filter: { 
            "frontmatter": { 
              "collection": { "eq": collection } 
            } 
          } 
        },
      })
    })
  }

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
