import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo ({ description, lang, meta, title, image }){
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
        { name: `description`, content: metaDescription },
        { property: `og:title`, content: title },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { name: `twitter:url`, content: site.siteMetadata.siteUrl },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: metaDescription },
      ]
        .concat(
          image
          ? [
              { property: "og:image", content: imagePath },
              { property: "og:image:width", content: 500 },
              { property: "og:image:height", content: 300 },
              { property: "twitter:image", content: imagePath },
              { property: "twitter:image:width", content: 500 },
              { property: "twitter:image:height", content: 300 },
              { name: "twitter:card", content: "summary_large_image" }
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
