import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo ({ 
  title: propTitle, 
  description: propDescription, 
  lang, 
  image, 
  pathname,
  meta,
  isArticle
}){
  const { site } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            siteName
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

  const { title, siteUrl, description, keywords, siteName } = site.siteMetadata

  const imagePath = typeof image === 'string' ? siteUrl + image?.split(' ')[0] : ''
  const metaDescription = propDescription || description
  const metaTitle = propTitle || title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={title ? `%s | ${title}` : null}
      link={[
        { rel: `canonical`, href: siteUrl+pathname}
      ]}
      meta={[
        { name: 'title', content: metaTitle},
        { name: `description`, content: metaDescription },
        { name: `keywords`, content: keywords },

        { property: `og:title`, content: metaTitle },
        { property: `og:site_name`, content: siteName },
        { property: `og:url`, content: siteUrl+pathname },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: isArticle ? `article` : `website` },

        { name: `twitter:title`, content: metaTitle },
        { name: `twitter:url`, content: siteUrl+pathname },
        { name: `twitter:description`, content: metaDescription },
      ]
        .concat(
          image
          ? [
              { property: "og:image", content: imagePath },
              { property: "og:image:width", content: 500 },
              { property: "og:image:height", content: 300 },

              { property: "twitter:card", content: "summary_large_image" },
              { property: "twitter:image", content: imagePath },
              { property: "twitter:image:width", content: 500 },
              { property: "twitter:image:height", content: 300 },
            ]
          : [
              { name: "twitter:card", content: "summary" }
        ])
        .concat(meta)
      }
    >
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
