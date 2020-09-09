## Usage

### Installation

```bash
npm install --save-dev babel-preset-nunez
```

### Add to your `.babelrc` file

```json
{
  "presets": ["nunez"],
  // or
  "presets": ["babel-preset-nunez"]
}
```

#### Options

By default `babel-preset-nunez` will transpile for the "last 2 versions" and "not dead" browsers.

```json
{
  "presets": [[
    "nunez",
    {
      "serverOnly": true,
      "modern": true,
    }
  ]]
}
```

`serverOnly` - Will transpile only for node.
`modern` - Will transpile for [common browsers](./browserlist.js).

#### Customizing Babel Config

Preset includes:

Presets
- [preset-env](https://babeljs.io/docs/en/babel-preset-env)
- [preset-react](https://babeljs.io/docs/en/babel-preset-react)

Plugins
- [plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import)
- [plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)
- [plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)
- [plugin-proposal-export-default-from](https://babeljs.io/docs/en/babel-plugin-proposal-export-default-from)
- [plugin-proposal-optional-chaining](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining)
- [babel-plugin-transform-react-remove-prop-types](https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types)

You can customize presets in the `.babelrc` file through the `nunez` preset.

```json
{
  "presets": [
    [
      "nunez",
      {
        "preset-env": {},
        "preset-react": {}
      }
    ]
  ]
};
```
