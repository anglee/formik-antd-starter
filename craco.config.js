/* eslint-disable @typescript-eslint/no-var-requires */
const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#029aa6',
          '@link-color': '#029aa6',
        },
      },
    },
  ],
  jest: {
    // see https://github.com/DocSpring/craco-antd/issues/10#issuecomment-504181528
    configure(config) {
      // eslint-disable-next-line no-param-reassign
      config.transformIgnorePatterns = [
        '/node_modules/(?!antd|rc-pagination|rc-calendar|rc-tooltip)/.+\\.js$',
      ];
      return config;
    },
  },
};
