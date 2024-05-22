const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Handlebars = require("handlebars");
// const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
  mode: "production",
  
  entry: {
    app: [
      path.resolve(__dirname, "./src/index.js"),
      path.resolve(__dirname, "./src/templates/countries_tpl.hbs"),
    ],
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          {loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.config.js")
              }
            }
        },
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.hbs$/i,
        loader: "handlebars-loader",
        exclude: /(node_modules)/,
      },
      {
        test: /\.(ico|png|jp?g|webp|svg)$/,
        type: "asset/resource",
        // use: {
        //   loader: "url-loader",
        //   options: {
        //     limit: false,
        //     filename: "img/[name].[hash:8][ext][query]"
        //   }
        // },
        generator: {
          filename: "img/[name].[hash:8][ext][query]",
        },
        // loader: "file-loader",
        // options: {
        //   limit: 200000,
        //   filename: "img/[name].[hash:8][ext][query]"
        // }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "New Page",
      filename: "index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new CleanWebpackPlugin(),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 0,
    maxAssetSize: 512000
  },
  devServer: {
    port: 4444,
    open: true,
  },
};

