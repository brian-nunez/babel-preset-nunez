const envPreset = require('@babel/preset-env');
const reactPreset = require('@babel/preset-react');
const syntaxDynamicImport = require('@babel/plugin-syntax-dynamic-import').default;
const transformRuntime = require('@babel/plugin-transform-runtime').default;
const proposalClassProperties = require('@babel/plugin-proposal-class-properties').default;
const exportDefaultFrom = require('@babel/plugin-proposal-export-default-from').default;
const proposalOptionalChaining = require('@babel/plugin-proposal-optional-chaining').default;
const removePropTypes = require('babel-plugin-transform-react-remove-prop-types').default;

const { browserList, legacyBrowserList } = require('./browserlist');

module.exports = (api = {}, opts = {}) => {
  const serverOnly = opts.serverOnly || (api.env && api.env('server'));
  const isModern = opts.modern || (api.env && api.env('modern'));

  const targets = {
    node: 'current',
  };

  if (!serverOnly) {
    targets.browsers = isModern ? browserList : legacyBrowserList;
  }

  const presetEnvOptions = Object.assign(
    {},
    { targets },
    opts['preset-env']
  );

  const reactPresetOptions = Object.assign({}, opts['react-preset']);

  return {
    presets: [
      [
        envPreset,
        presetEnvOptions,
      ],
      [
        reactPreset,
        reactPresetOptions,
      ],
    ],
    plugins: [
      syntaxDynamicImport,
      transformRuntime,
      proposalClassProperties,
      exportDefaultFrom,
      proposalOptionalChaining,
      removePropTypes,
    ],
  };
};