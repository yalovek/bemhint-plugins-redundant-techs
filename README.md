# BEM hint plugin for finding redundant techs

## Config example

```json
{
    "levels": [
        "*.blocks"
    ],

    "excludePaths": [
        "node_modueles/**"
    ],

    "plugins": {
        "bemhint-plugin-redundant-techs": {
            "techs": {
                "styl|deps.js": true
            }
        }
    }
}
```
