module.exports = {
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 
          {
            loads: 'css-loader',
            options: {
              modules: {
                localsConvention: 'camelCase',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              }
            }
          }, 'css-loader'],
        },
      ],
    },
  };
  