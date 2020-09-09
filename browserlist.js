const browserList = [
  'Chrome',
  'ChromeAndroid',
  'Edge',
  'Firefox',
  'iOS',
  'Safari',
].map(browser => `last 2 ${browser} versions`);

const legacyBrowserList = ['last 2 versions', 'not dead'];

module.exports = { browserList, legacyBrowserList };
