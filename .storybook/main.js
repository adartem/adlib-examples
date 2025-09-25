module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async (config) => {
    // Assurer que Babel compile JSX
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    });
    return config;
  }
};
