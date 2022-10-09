require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Pursuit of Excellence Academic Tutoring`,
    siteUrl: `https://poetutoring.com`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "GA-XXXXXX"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  'gatsby-plugin-postcss',
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `5j4d4ve70rgp`,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  },
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Alkalami`,
        `Lato\:400,700` // you can also specify font weights and styles
      ],
      display: 'block'
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Pursuit of Excellence AcademicAcademic Tutoring and Dissertation Mentorin`,
      short_name: `Pursuit of Excellenceg`,
      start_url: `/`,
      background_color: `#000000`,
      theme_color: `#000000`,
      display: `standalone`,
      icon: `src/images/icon.png`
    },
  },
  `gatsby-plugin-sitemap`]
};