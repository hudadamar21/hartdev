// require('dotenv').config({
//   path: `.env`,
// });

// const config = require('gatsby-plugin-config').default;

module.exports = {
  siteMetadata: {
    title: `HartDev`,
    author: {
      name: `Huda Damar`,
      summary: `Search A New Somethings`,
    },
    description: `All Stuff for Web Developers`,
    keywords: ['tutorial', 'source code'],
    siteUrl: `https://hartdev.site`,
    social: {
      facebook: `https://facebook.com/hudadamar21`,
    },
  },
  plugins: [
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/_contents/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/_contents/source-code`,
        name: `source-code`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/_contents/tutorial`,
        name: `tutorial`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/layouts/MdxDefault.js"),
        },  
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-code-titles',
            options: {
              className: 'gatsby-code-title',
            },
          }, 
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `heading-content`,
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
              </svg>`,
              isIconAfterHeader: true,
              elements: [`h1`, `h2`, `h3`],
            },
          },
          `gatsby-remark-smartypants`,
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: f => `files/${f.hash}/${f.name}`
            },
          },

        ],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": "src",
        },
        extensions: [
          "js",
          "jpg",
          "png",
          "svg"
        ],
      }
    },
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#2b83d6`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        }
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    body
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HartDev`,
        short_name: `Hartdev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preact`
  ],
}
