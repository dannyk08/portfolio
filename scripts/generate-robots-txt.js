const fs = require('fs')

const { STAGE_MODE_ENV } = process.env
const isProdMode = STAGE_MODE_ENV === 'production'
const crawlableRobotsTxt = `User-agent: *\nAllow: /`
const unCrawlableRobotsTxt = `User-agent: *\nDisallow: /`

function generateRobotsTxt() {
  const robotsTxt = isProdMode ? crawlableRobotsTxt : unCrawlableRobotsTxt
  fs.writeFileSync('public/robots.txt', robotsTxt)
}

module.exports = generateRobotsTxt
