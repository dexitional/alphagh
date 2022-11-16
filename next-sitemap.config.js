/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://alphahour.news',
    generateRobotsTxt: true,
}
  
  module.exports =  config