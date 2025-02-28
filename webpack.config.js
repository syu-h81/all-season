const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

module.exports = {
  // コンパイルモード
  mode: 'production',
  // エントリーポイントの設定
  entry: {
    // コンパイル対象のファイルを指定
    'main': path.resolve(__dirname, './src/assets/js/main.js'),
    'styles.css': path.join(__dirname, './src/assets/css/styles.css'),
  },
  // 出力設定
  output: {
      path: path.resolve(__dirname, './dist/'), // 出力先フォルダを絶対パスで指定
      filename: 'assets/js/[name].js'// [name]にはentry:で指定したキーが入る
  },
  module: {
    rules: [
      // sassのコンパイル設定
      {
        test: /\.(sa|sc|c)ss$/, // 対象にするファイルを指定
        use: [
          MiniCssExtractPlugin.loader, // JSとCSSを別々に出力する
          {
            loader: 'css-loader',
            options: {
              import: false,
              url: false, //URL の解決を無効に
            }
          },
          'postcss-loader', // オプションはpostcss.config.jsで指定
          'sass-loader',
          // 下から順にコンパイル処理が実行されるので、記入順序に注意
        ]
      },
      {
        // Babel 用のローダー
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new TerserPlugin(), //JSファイルの圧縮
    new FixStyleOnlyEntriesPlugin(), // CSS別出力時の不要JSファイルを削除
    new CssMinimizerPlugin(), // CSSファイルの圧縮
    new MiniCssExtractPlugin({ // CSSの出力先
      filename: 'assets/css/[name]'// 出力ファイル名を相対パスで指定（[name]にはentry:で指定したキーが入る）
    }),
    //PHPファイル、画像ファイルの出力
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/images', to: 'assets/images' },
      ]
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/index.php', to: 'index.php' },
      ]
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/form-complete.php', to: 'form-complete.php' },
      ]
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/mailform.php', to: 'mailform.php' },
      ]
    }),
  ],
  // node_modules を監視（watch）対象から除外
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  }
};