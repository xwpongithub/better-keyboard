const path = require('path');
const webpack = require('webpack');

const pkgConfig = require('./package.json');

const version = pkgConfig.version;

module.exports = {
  entry: './src/index.js',
  output:{
    path:path.resolve(__dirname,'build'),
    filename:'jkeyboard.js',
    library:'JKeyboard',
    libraryTarget: "umd",
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['.js','.styl']
  },
  module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: [{
                    loader: 'eslint-loader',
                    options: {
                        formatter: require('eslint-friendly-formatter')
                    }
                }],
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude:/node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: '/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: '/fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    {
                        "loader":"css-loader",
                        "options":{"minimize":false,"sourceMap":false}
                    },
                    {
                        "loader":'postcss-loader',
                        "options":{
                            plugins:function(){
                                return [
                                    require('autoprefixer')({
                                        browsers: ["> 1%",
                                            "last 2 versions",
                                            "not ie <= 8"]
                                    })
                                ];
                            }
                        }
                    }
                ]
            },
            {
              test:/\.styl$/,
              use:[
                  "style-loader",
                   {
                    "loader":"css-loader",
                    "options":{"minimize":false,"sourceMap":false}
                   },
                   {
                     "loader":'postcss-loader',
                     "options":{
                          plugins:function(){
                              return [
                                  require('autoprefixer')({
                                      browsers: ["> 1%",
                                          "last 2 versions",
                                          "not ie <= 8"]
                                  })
                              ];
                          }
                      }
                   },
                   {
                     "loader":"stylus-loader",
                     "options":{"sourceMap":false}
                   }
                  ]
            }
        ]
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
        new webpack.DefinePlugin({
            __VERSION__: JSON.stringify(version)
        })
  ]
};