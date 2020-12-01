/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: `Almir`,
		description: `Almir - Web Developer and User Interface Designer`,
		author: `Almir`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `Almir`,
				start_url: `/`,
				background_color: `#14181c`,
				theme_color: `#14181c`,
				display: `minimal-ui`,
				icon: `src/images/AM-logo.svg` // This path is relative to the root of the site.
			}
		}
	]
};
