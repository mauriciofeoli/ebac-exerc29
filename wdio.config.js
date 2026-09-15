const requiredEnvironmentVariables = [
  'SAUCE_USERNAME',
  'SAUCE_ACCESS_KEY',
  'SAUCE_APP'
];

const missingEnvironmentVariables = requiredEnvironmentVariables.filter(
  (name) => !process.env[name]
);

if (missingEnvironmentVariables.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missingEnvironmentVariables.join(', ')}`
  );
}

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
    'appium:platformVersion': process.env.SAUCE_PLATFORM_VERSION || '16.0',
    'appium:deviceName': process.env.SAUCE_DEVICE_NAME || 'iPhone 14 Simulator',
    'appium:automationName': 'XCUITest',
    'appium:app': process.env.SAUCE_APP || 'sauce-storage:LojaEBAC.ipa',
    'sauce:options': {
      build: process.env.SAUCE_BUILD || `ebac-exerc30-${process.env.GITHUB_RUN_NUMBER || 'local'}`,
      name: 'Fluxo de compra iOS'
    }
  }],

  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec'],

  mochaOpts: {
    timeout: 60000
  }
};
