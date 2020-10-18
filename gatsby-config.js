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
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: (videoId) =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            },
          },
        ],
      },
    },
  ],
};
