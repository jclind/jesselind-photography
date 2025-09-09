/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jesselindphoto.vercel.app',
  generateRobotsTxt: true, // (optional)
  exclude: ['/admin', '/admin/*'],
  // ...other options
}
