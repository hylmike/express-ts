import path from "path";
import nodeExternals from "webpack-node-externals";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

const { NODE_ENV = "production" } = process.env;

module.exports = {
  entry: ["regenerator-runtime/runtime", "./src/index.ts"],
  mode: NODE_ENV,
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-typescript"],
            },
          },
          { loader: "ts-loader" },
        ],
      },
    ],
  },
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  //watch: NODE_ENV === 'development',
  externals: [nodeExternals()],
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          //inversify use func name to idenfy if controller was initialized
          keep_fnames: true,        
        },
        parallel: true,
      }),
    ],
  },
};
