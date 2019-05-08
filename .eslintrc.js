module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react", "prettier"
    ],
    "rules": {
        'prettier/prettier': 'error',
        'comma-dangle': ['error', 'never'],
        'no-underscore-dangle': [2, { enforceInMethodNames: false }],
        'arrow-parens': ['error', 'as-needed'],
        'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
        'react/prop-types': 0,
        'react/destructuring-assignment': [1, 'always'],
        'import/no-unresolved': 'off',
        'react/prefer-stateless-function': [0, { "ignorePureComponents": false }],
        'import/prefer-default-export': 'off',
        'linebreak-style': ["error", "windows"],
        "react/jsx-one-expression-per-line": [1, { "allow": "literal" }],
        "no-param-reassign": ["error", { "props": false }]
    }
};
