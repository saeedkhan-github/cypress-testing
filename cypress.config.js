const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'gdhvo4',
  chromeWebSecurity: false,
  report: 'mochawesome',
  reportOptions: {
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: 'cyress/reports/mocha',
  },
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
  "includeShadowDom":true,
  env:{
    username:'sq.test1',
    password:'Saeed123@'

  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    projectId:"gdhvo4",
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      blockHosts:['pagead2.googlesyndication.com','googleads.g.doubleclick.net/','googleads.g.doubleclick.net/'


    ]
    },
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });
      require('cypress-mochawesome-reporter/plugin')(on)
      // on('after:run', async () => {
      //   console.log('override after:run');
      //   await afterRunHook();
      // });
      
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
