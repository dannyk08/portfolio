const { STAGE_MODE_ENV } = process.env
const isProdMode = STAGE_MODE_ENV === 'production'

module.exports = {
  siteUrl: 'https://dannys.io',
  generateRobotsTxt: isProdMode,
  generateIndexSitemap: false,

}
