# [Bem hint](https://github.com/bem/bemhint) plugin for finding redundant techs

## Config example

```json
module.exports = {
    levels: [
        "*.blocks"
    ],

    excludePaths: [
        "node_modueles/**"
    ],

    plugins: {
        "bemhint-plugins-redundant-techs": {
            techs: {
                "styl|deps.js": true
            }
        }
    }
}
```
