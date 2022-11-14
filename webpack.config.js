import path from 'path'

export default {
    mode: 'development',
    entry: './src/diff-app.js',
    output: {
        path: path.resolve('./public/js'),
        filename: 'diff-app.js',
    },
    module: {
        rules: [
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
        ],
    },
}
