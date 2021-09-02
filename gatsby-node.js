const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const postsQuery = await graphql(
    `
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
          }
        }
      }
    `
  )

  if (postsQuery.errors) {
    reporter.panicOnBuild(
      `There was an error loading your posts`,
      postsQuery.errors
    )
    return
  }


  const posts = postsQuery.data.allMdx.edges

  if (posts.length > 0) {

    // Single Post
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].node.id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].node.id

      const { id, fields, frontmatter } = post.node

      if(frontmatter.contentType === 'single') {
        const seriesSlug = fields.slug.split('/')[1]
        createPage({
          path: '/' + fields.collection + fields.slug,
          component: path.resolve("./src/templates/single-post-template/index.js"),
          context: {
            id,
            pathSeries: `/${fields.collection}/${seriesSlug}`,
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
      itemsPerPage: 10,
      pathPrefix: `/posts`,
      component: path.resolve("./src/templates/post-list-template.js"),
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
          collection,
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
          collection,
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
    createNodeField({
      node,
      name: 'birthTime',
      value: parent.birthTime
    })
    createNodeField({
      node,
      name: 'modifiedTime',
      value: parent.modifiedTime
    })
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
  `)
}
