module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
          alias: {
            '@components': './src/components',
            '@pages': './src/pages',
            '@routes': './src/routes',
            '@services': './src/services',
            '@assets': './src/assets'
          }
        }
      ]
    ]
  };
};
