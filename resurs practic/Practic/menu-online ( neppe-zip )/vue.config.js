let ImageminPlugin = require('imagemin-webpack-plugin').default
let imageminMozjpeg = require('imagemin-mozjpeg')

module.exports = {
  chainWebpack: (config) => {
    // SVG-LOADER
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]',
      });

    // -----------IMAGI-WEBPACK-LOADER
    const imgRule = config.module.rule('images')
    imgRule.use('file-loader')
      .loader('image-webpack-loader')
      .tap(options => {
        const ret = options || {}
        ret.pngquant = {
          quality: '65-90',
          speed: 4
        }
        return ret;
      });
  },

  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        pngquant: {
          quality: '5-30',
          speed: 7,
          strip: true
        },
        jpegtran: {
          progressive: true

        },
        gifsicle: {
          interlaced: true
        },
        plugins: [
          imageminMozjpeg({
            quality: 85
          })
        ]
      })
    ]
  }
};
