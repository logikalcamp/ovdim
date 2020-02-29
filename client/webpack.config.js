module.exports = {
    entry: ['react-hot-loader/patch', './src'],
    alias: { 'react-dom': '@hot-loader-dom' },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: /src/
            },
            {
                test: /\.(js|jsx)$/,
                use: 'react-hot-loader/webpack',
                include: /node_modules/
            }
            // ...
        ]
    }
}