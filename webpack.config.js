import path from 'path'

export default {
    mode: 'development',
    entry: {
        main: './src/js/main.js',
    },
    output: {
        path: path.resolve(process.cwd(), 'dist/assets/'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
        ],
    },
}
