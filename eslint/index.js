module.exports = {
    extends: [
        'eslint-config-airbnb',
        './rules/react',
        './rules/react-a11y'
    ].map(require.resolve),
    ecmaFeatures: {
        impliedStrict: true,
        modules: true,
        jsx: true
    },
    env: {
        browser: true,
        node: true,
        amd: true,
        mocha: true,
        jquery: true,
        es6: true
    },
    rules: {
        quotes: [2, 'single'],
        indent: ['error', 4],
        'comma-dangle': [2, 'never'],
        'max-len': [2, {
            code: 100,
            ignoreComments: true,
            ignoreTrailingComments: true,
            ignoreUrls: true
        }]
    }
};
