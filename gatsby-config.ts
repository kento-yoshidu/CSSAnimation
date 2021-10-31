import type { GatsbyConfig } from "gatsby"
import { resolve } from "path"

const plugins: GatsbyConfig['plugins'] = [
  `gatsby-plugin-typescript`,
  //`gatsby-plugin-typegen`,
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
            linkImagesToOriginal: false,
          },
        },
        {
        resolve: "gatsby-remark-prismjs",
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            showLineNumbers: false,
          }
        },
      ],
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `src/posts`,
      name: `posts`
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `src/components`,
      name: `components`
    }
  },
  //`gatsby-transformer-remark`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-sass`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `CSS Animation & Tips`,
      short_name: `CSS Animation & Tips`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#666`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },
  },
  `gatsby-plugin-offline`,　
]

const siteMetadata: GatsbyConfig['siteMetadata'] = {
  title: `CSS Animation & Tips`,
  description: `CSSだけでできる色々なことの解説`,
  lang: `ja`,
  siteUrl: `https://cssanimation-and-tips.netlify.app`,
  locale: `ja_JP`,
  author: {
    name: `Kento Yoshizu`,
  },
  //description: `A starter blog demonstrating what Gatsby can do.`,
  social: {
    //twitter: `kylemathews`,
  },
}

const config: GatsbyConfig = {
  plugins,
  siteMetadata
}

export default config