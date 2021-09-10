/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title, image }) => {
  const { site } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            author {
              name
              summary
            }
            description
            keywords
            siteUrl
            social {
              facebook
            }
          }
        }
      }
    `
  )

  let imagePath = ''

  if(typeof image === 'string') {
    imagePath = site.siteMetadata.siteUrl + image?.split(' ')[0]
  }


  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: imagePath,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
      .concat(
        image
        ? [
            {
              property: "og:image",
              content: imagePath,
            },
            {
              property: "og:image:width",
              content: 500,
            },
            {
              property: "og:image:height",
              content: 300,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            }
          ]
        : [
            {
              name: "twitter:card",
              content: "summary",
            }
      ])
      .concat(meta)
    }
      
    >
      <script async src="https://arc.io/widget.min.js#uUD29b4D" />
      <script type='text/javascript' src='//hungrylongingtile.com/ed/52/f0/ed52f0aa3cc0de5a2c1077b75a19c44c.js'></script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
