// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const friendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = {
  //sourceMap 原映射
  devtool: "inline-source-map",
  // 打包环境 默认是生产环境 production
  // 如果是开发环境 这里需要换成 development
  // 接下来为了观察打包后的文件，使用 development
  mode: "development",
  entry: "./src/Components/index.ts",
  output: {
    //出口文件
    publicPath: "/",
    path: path.resolve(__dirname, "./public"),
    filename: "component.js",
    chunkFilename: '[name].bundle.js', // 1.bundle.js
    library: {
      name: "CORE",
      type: "umd"
    }
  },
  devtool: "source-map", // 代码映射，增强调试，以构建速度为代价
  context: __dirname, // string (绝对路径) //webpack的主目录
  target: "web",
  optimization: {
    minimize: false, // <---- 禁用 uglify.
    // minimizer: [new UglifyJsPlugin()] 使用自定义压缩工具
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          // 删除注释
          output: {
            comments: false
          },
          // 删除console debugger 删除警告
          compress: {
            drop_console: true, //console
            drop_debugger: false,
            pure_funcs: ["console.log"] //移除console
          },
        },
        parallel: true
      })
    ],
    splitChunks: {
      name: "test"
    }
  },
  module: {
    rules: [
      {
        // es5转换es5
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node-modules/",
      },
      {
        // Images
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        //解析字体文件
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        // CSS, PostCSS, and Sass
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    //命令行友好提示-
    new friendlyErrorsWebpackPlugin(),
  ],
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": require("path").resolve(__dirname, "./src"),
    },
  },
};
