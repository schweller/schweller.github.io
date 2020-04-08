import React from "react"
import { Link, graphql } from "gatsby"

import App from '../screens/App'

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <div>
      <h1>Awesome MDX Blog</h1>

      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.frontmatter.path}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

const SiteIndex = ({data}) => {
  return <App><BlogIndex data={data}/></App>
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default SiteIndex