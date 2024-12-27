const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true, // 기존 빌드 파일 정리
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@components": path.resolve(__dirname, "src/components"), // 별칭 설정
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // CSS 파일 처리
        use: ["style-loader", "css-loader", "postcss-loader"], // TailwindCSS를 위한 로더
        include: path.resolve(__dirname, "src"), // 프로젝트의 src 디렉토리만 처리
      },
    ],
  },
  // 타입 정의 파일 무시
  externals: {
    "../types": "commonjs ../types",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
