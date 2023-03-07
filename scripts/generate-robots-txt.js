const fs = require('fs')

const { BUILD_MODE } = process.env
const productionEnv = BUILD_MODE === 'production'
const crawlableRobotsTxt = `User-agent: *\nAllow: /`
const unCrawlableRobotsTxt = `User-agent: *\nDisallow: /`

function generateRobotsTxt() {
  const robotsTxt = productionEnv ? crawlableRobotsTxt : unCrawlableRobotsTxt
  fs.writeFileSync('public/robots.txt', robotsTxt)
}

module.exports = generateRobotsTxt
