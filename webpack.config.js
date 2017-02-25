const productName = 'bookcontrol';
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './client/'),
  entry: path.resolve(__dirname, './client/application.js'),
  output: {
    path: path.resolve(__dirname, `./public/${productName}`),
    filename: 'bundle.js',
    publicPath: `/${productName}/`
  },
  resolve: {
    alias: {
  'react': path.join(__dirname, 'node_modules', 'react')
    },
    modulesDirectories: ['./node_modules'],
    extensions: ['', '.js', '.jsx', '.scss'],
    root: [path.resolve(__dirname, './client/')]
  },
  eslint: {
    configFile: path.resolve(__dirname,'./.eslintrc')
  },
  module: {
    // preLoaders: [
    //   {
    //     loader: 'eslint-loader',
    //     test: /\.js?$/,
    //     exclude: /node_modules/
    //   }
    // ],
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      {
        loader: 'babel-loader',
        test: /\.js?$/,
        exclude: /node_modules/
      },
      {
        loader: 'url-loader',
        query: {
          limit: 8192,
        },
        test: /\.(jpe?g|png|gif)$/,
      },
      {
        loader: 'url-loader',
        query: {
          limit: 999999999,
        },
        test: /\.(svg|ttf|eot|woff|woff2|otf)$/,
      },
      {
        loader: 'style-loader!css-loader!sass-loader',
        test: /\.scss$/
      }
    ],
    postLoaders: [
      { loader: 'transform?brfs', test: /(pdfkit\/js|png-js\/png-node)(.*)\.js$/ },
    ],
  },
  plugins: []
};

if (process.env.RAILS_ENV == 'production' || 1==1) {
  // Hashing of this kind happens only in prod.
  module.exports.output.filename = 'bundle-[hash].js';
  module.exports.plugins.push(function () {
    this.plugin('done', function (stats) {
      var statsFile = path.resolve(__dirname,'webpack.json')
      var data = stats.toJson({version: true, hash: true, assets: true});
      delete data.warnings;
      delete data.chunks;
      delete data.modules;
      fs.writeFileSync(statsFile, JSON.stringify(data));
    });
  });
  module.exports.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    })
  );
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
    })
  );
}
