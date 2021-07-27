/* eslint-disable */

const webpackConfig = require('../../webpack.dev.config.ts');
const { startDevServer } = require('@cypress/webpack-dev-server');
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = (on, config) => {
  on('dev-server:start', (options) =>
    startDevServer({
      options,
      webpackConfig,
    }),
  )
  on('file:preprocessor', cucumber())
  on('task', {
    log(message) {
      console.log(message)
      return null
    },
    table(message) {
      console.table(message)
      return null
    }
  })
  return config;
};
