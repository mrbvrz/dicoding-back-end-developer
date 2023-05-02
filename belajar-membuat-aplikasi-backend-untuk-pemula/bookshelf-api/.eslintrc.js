module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: 'eslint:recommended',
    overrides: [
        {
            files: ['**/*.test.js'],
            env: {
                jest: true,
            },
            plugins: ['jest'],
            rules: {
                'jest/no-disabled-tests': 'warn',
                'jest/no-focused-tests': 'error',
                'jest/no-identical-title': 'error',
                'jest/prefer-to-have-length': 'warn',
                'jest/valid-expect': 'error',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {},
};
