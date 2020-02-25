var path = require('path')

module.exports = {
   mode: 'production',
   entry: {
      index: './src/components/index.ts'
   },
   output: {
      path: path.resolve(__dirname, './dist'),
      // publicPath: '/dist/',
      filename: '[name].js',// 生成的fiename需要与package.json中的main一致
      library: 'react-ui', // library指定的就是你使用require时的模块名，这里便是require("vueAjaxUpload")
      libraryTarget: 'umd', //libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的。
      umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。
   },
   module: {
      rules: [
         //       // {
         //       //   test: /\.css$/,
         //       //   use: [
         //       //     'vue-style-loader',
         //       //     'css-loader'
         //       //   ],
         //       // },
         //       // {
         //       //   test: /\.vue$/,
         //       //   loader: 'vue-loader',
         //       //   options: {
         //       //     loaders: {
         //       //     }
         //       //     // other vue-loader options go here
         //       //   }
         //       // },
         // {
         //    test: /\.ts$/,
         //    loader: 'ts-loader',
         //    exclude: /node_modules/
         // },
         {
             test: /\.tsx?$/,
             loader: 'awesome-typescript-loader',
             exclude: /node_modules/
         }
         //       // {
         //       //   test: /\.(png|jpg|gif|svg)$/,
         //       //   loader: 'file-loader',
         //       //   options: {
         //       //     name: '[name].[ext]?[hash]'
         //       //   }
         //       // },
         //       // {
         //       //   test:/\.(png|woff|woff2|svg|ttf|eot)$/,
         //       //   use:{
         //       //        loader:'url-loader',
         //       //        options: {
         //       //            limit: 100000,  //这里要足够大这样所有的字体图标都会打包到css中
         //       //           //  name: utils.assetsPath('fonts/[name].[hash:8].[ext]')
         //       //        }
         //       //   }
         //       // }

      ]
   },
   resolve: {
      extensions: ['*', '.js', '.ts', '.tsx', '.json']
   },
   externals: {
       react: {
           commonjs: 'react',
           commonjs2: 'react',
           amd: 'react',
           root: 'React',
       },
       'react-dom': {
           commonjs: 'react-dom',
           commonjs2: 'react-dom',
           amd: 'react-dom',
           root: 'ReactDOM'
       }
   },
   performance: {
      hints: false
   },
   devtool: 'inline-source-map',
}