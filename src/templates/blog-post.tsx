import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

interface Props {
  data?: string
  location: string
}
const Blog = ({ data, location }) => (
  <Layout
    location={location}
  >
    <MDXRenderer frontmatter={data.mdx.frontmatter}>{data.mdx.body}</MDXRenderer>
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