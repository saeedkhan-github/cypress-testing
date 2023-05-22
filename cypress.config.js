const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  report: 'mochawesome',
  reportOptions: {
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: 'cyress/reports/',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
