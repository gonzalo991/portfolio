const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/components/Index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        /*  new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: 'index.html' 
          }),*/
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    devServer: {
        static: path.join(__dirname, 'public'),
        compress: true,
        historyApiFallback: true,
        open: true
    },
    stats: { children: true }
}