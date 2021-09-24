module.exports = {
  mode: 'development',
  resolve: {
    extensions: [ '.js', '.vue' ],
    alias: {
      'vue$': 'vue/dist/vue.esm-bundler.js',
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

