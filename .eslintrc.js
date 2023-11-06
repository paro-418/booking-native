module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'prettier/prettier': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react-native/no-inline-styles': 'off',
        'react/no-unstable-nested-components': 'off',
        curly: 'off',
      },
    },
  ],
};
