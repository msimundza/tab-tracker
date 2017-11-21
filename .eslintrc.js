module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2017
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": 0,
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-console": ["error", {
            allow: ["log", "error"]
        }],
        "space-before-function-paren": ["error", "always"],
        "no-process-env": "off"
    }
};