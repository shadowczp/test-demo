const path = require('path')
module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            }
        ]
    }
}