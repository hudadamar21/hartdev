require('dotenv').config({
  path: `.env`,
});

const config = require('gatsby-plugin-config').default;

module.exports = {
  siteMetadata: {
    title: `HartDev`,
    author: {
      name: `Huda Damar`,
      summary: `Search A New Somethings`,
    },
    description: `All Stuff for Web Developers`,
    siteUrl: `https://hartdev.site`,
    social: {
      facebook: `https://facebook.com/hudadamar21`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `hartdev-site`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          // posts: require.resolve("./src/components/posts-layout.js"),
          default: require.resolve("./src/components/Layouts/default.js"),
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
              icon: false,
              maintainCase: false,
              removeAccents: false,
              isIconAfterHeader: false,
              elements: [`h1`, `h2`, `h3`],
            },
          },
          `gatsby-remark-smartypants`,
          // `gatsby-remark-copy-linked-files`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts/source-code`,
        name: `source-code`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts/tutorial`,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.GOOGLE_ANALYTIC_TRACKING_ID,
      },
    },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, AllMdx } }) => {
    //           return AllMdx.nodes.map(node => {
    //             return Object.assign({}, node.frontmatter, {
    //               description: node.excerpt,
    //               date: node.frontmatter.date,
    //               url: site.siteMetadata.siteUrl + node.fields.slug,
    //               guid: site.siteMetadata.siteUrl + node.fields.slug,
    //               custom_elements: [{ "content:encoded": node.html }],
    //             })
    //           })
    //         },
    //         query: `
    //           {
    //             allMdx(
    //               sort: { order: DESC, fields: [frontmatter___date] },
    //             ) {
    //               nodes {
    //                 excerpt
    //                 body
    //                 fields {
    //                   slug
    //                 }
    //                 frontmatter {
    //                   title
    //                   date
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: "/rss.xml",
    //       },
    //     ],
    //   },
    // },
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
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
