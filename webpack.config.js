import path from 'path'
import { VueLoaderPlugin } from 'vue-loader'
import webpack from 'webpack'

export default {
    mode: 'development',
    entry: {
        main: './src/js/main.js',
        rulebookPrint: {
            import: './src/js/rulebook-print.js',
            filename: 'js/rulebook-print.js',
            dependOn: 'pagedJS',
        },
        pagedJS: ['pagedjs'],
    },
    output: {
        path: path.resolve(process.cwd(), 'dist/assets/'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.m?js$/,
                //exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        // placeholder to be swapped
        new webpack.DefinePlugin({}),
    ],
}
