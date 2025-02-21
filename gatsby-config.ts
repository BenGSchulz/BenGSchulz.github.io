import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `benschulz.dev`,
    siteUrl: `https://benschulz.dev`,
    description: `The personal website of Ben Schulz, a software engineer working to make an impact.`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `benschulz.dev`,
        icon: `src/images/site-icon.ico`, // This path is relative to the root of the site.
      },
    },
  ],
};

export default config;
