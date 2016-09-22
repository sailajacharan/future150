var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.ts': ['webpack']
    },
    frameworks: ['jasmine'],
    files: [
      'public/app/specs.ts',
      'node_modules/babel-polyfill/dist/polyfill.js',
      { pattern: 'public/app/**/*.spec.ts', watched: false }
    ],
    webpack: webpackConfig,
    webpackServer: { noInfo: true },
    reporters: ['spec'],
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  });
};
