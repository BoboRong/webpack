module.exports = {
  entry: './src/main.js', //项目打包的入口文件 【必须】
  output: {//打包输出文件【必须】
     path: __dirname+'/dist',
     filename: 'bundle.js'
  },
  module: { //Loader
    rules: [
      {
        test: /\.vue$/, //匹配以.vue结尾的
        use: [
          {
            loader: "vue-loader"
          }
        ]
      }
    ]
  }
}