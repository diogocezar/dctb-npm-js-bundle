const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry : './src/main.js',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'app.js'
    },
    plugins: [
        new UglifyJsPlugin({
            test: /\.js($|\?)/i
        })
    ]
}