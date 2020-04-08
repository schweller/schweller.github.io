module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`300`, `500`, `700`]
          },
        ],
      },
    }    
  ],
}
