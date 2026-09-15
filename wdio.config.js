exports.config = {
  runner: 'local',
  protocol: 'https',
  hostname: 'ondemand.saucelabs.com',
  port: 443,
  path: '/wd/hub',

  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,

  specs: ['./test/fluxo-compra-ios.test.js'],
  maxInstances: 1,

  capabilities: [{
    platformName: 'iOS',
    'appium:platformVersion': '16.0',
    'appium:deviceName': 'iPhone 14 Simulator',
    'appium:automationName': 'XCUITest',
    'appium:app': 'sauce-storage:LojaEBAC.ipa'
  }],

  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec'],

  mochaOpts: {
    timeout: 60000
  }
};
