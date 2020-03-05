/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Geist Software`,
    siteUrl: `https://www.geistsoftware.io`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdownBios`,
        path: `${__dirname}/src/pages/markdown/bios`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `packages`,
        path: `${__dirname}/src/pages/markdown`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
