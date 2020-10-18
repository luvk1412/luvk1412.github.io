module.exports = {
  siteMetadata: {
    title: `Learn Competive Programming and Interview Prepartion Tips`,
    name: `Luv`,
    siteUrl: `https://luvk1412.github.io`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to my blog`,
      maxWidth: 652,
    },
    social: [
      {
        name: `youtube`,
        url: `https://www.youtube.com/c/LuvIsMe?sub_confirmation=1`,
      },

      {
        name: `instagram`,
        url: `https://www.instagram.com/i._m_.luv/`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/luvk1412`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/luvk1412/`,
      },
      {
        name: `github`,
        url: `https://github.com/luvk1412`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Code With Luv`,
        short_name: `Luv`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
};
