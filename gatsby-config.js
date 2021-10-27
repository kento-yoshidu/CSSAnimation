module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    //`gatsby-plugin-typegen`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
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
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  ],
}
