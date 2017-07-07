var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'bundle': './src/app.ts'
    },
    output: {
        path: path.join(process.cwd(), 'bin/github-project-schedule'),
        filename: '[name].js',
        chunkFilename: `app.[hash].js?_rev=${Date.now()}`,
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    cache: true
};