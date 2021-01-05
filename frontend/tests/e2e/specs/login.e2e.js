// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'login test': browser => {
    browser
      .init()
      .url(process.env.VUE_DEV_SERVER_URL + 'login')
      .waitForElementVisible('#app', 15000)      
      .assert.containsText('h1', 'TaskAgile')      
      .end()
  },

  // 'example e2e test using a custom command': browser => {
  //   browser
  //     .openHomepage()
  //     .assert.elementPresent('.hello')
  //     .end()
  // }
}
