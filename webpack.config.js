var config = {
   entry:  './index.js',

   output: {
      path: __dirname + "/public/build",
      filename: 'build.js',
   },

   devServer: {
      inline: true,
      port: 3333
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
