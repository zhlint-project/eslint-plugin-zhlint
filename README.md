# <img src="https://raw.githubusercontent.com/Jinjiang/zhlint/master/docs/logo.svg" style="vertical-align: middle;"> eslint-plugin-zhlint

Linting Chinese typographies in JavaScript/TypeScript with [zhlint](https://github.com/Jinjiang/zhlint).

![VSCode Linting Preview](https://raw.githubusercontent.com/stackia/eslint-plugin-zhlint/master/linting-in-vscode.png)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```shell
npm i eslint --save-dev
```

Next, install `eslint-plugin-zhlint`:

```shell
npm install eslint-plugin-zhlint --save-dev
```

## Usage

Add `zhlint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["zhlint"]
}
```

Then configure the `zhlint/zhlint` rule under the rules section.

```json
{
  "rules": {
    "zhlint/zhlint": ["warn"]
  }
}
```

or with options:

```json
{
  "rules": {
    "zhlint/zhlint": [
      "warn",
      {
        "lintComments": true,
        "lintStringLiterals": true,
        "zhlint": {
          "rules": {
            "fullWidthPunctuation": "，。：；？！“”‘’（）",
            "unifiedPunctuation": "traditional"
          }
        }
      }
    ]
  }
}
```

## Options

- `lintComments` (boolean, default `true`): `true` to enable zhlint in `//` or `/* ... */` comments
- `lintStringLiterals` (boolean, default `true`): `true` to enable zhlint in string literals (single-quoted / double-quoted strings, and template literals)
- `zhlint` (object): options passed down to [zhlint](https://github.com/Jinjiang/zhlint#other-type-defs-and-advanced-usage)

## Supported rules

See <https://github.com/Jinjiang/zhlint#supported-rules>. If no `zhlint.rules` option provided, all rules are enabled by default.
