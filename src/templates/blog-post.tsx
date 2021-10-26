import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

import 'prismjs/themes/prism-twilight.css'
interface Props {
  data?: string
  location: string
}
const Blog: React.VFC<Props> = ({ data, location }) => (
  <Layout
    location={location}
  >
    <MDXRenderer
      frontmatter={data?.mdx?.frontmatter}
    >
      {data?.mdx?.body}
    </MDXRenderer>
  </Layout>
)
export default Blog

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        slug
      }
    }
  }
`