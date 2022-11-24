import MiniCssExtractPlugin from 'mini-css-extract-plugin'
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
    plugins: [
        new MiniCssExtractPlugin({
            filename: ({ chunk }) => `css/${chunk.name}.css`,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            //{
            //    test: /\.s[ac]ss$/i,
            //    use: [
            //        MiniCssExtractPlugin.loader,
            //        'css-loader',
            //        {
            //            loader: 'sass-loader',
            //            options: {
            //                sourceMap: true,
            //            },
            //        },
            //    ],
            //},
        ],
    },
}
