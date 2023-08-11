const path = require('path');
const ZipPlugin = require('zip-webpack-plugin');

const isTesting = process.env.NODE_ENV === 'test';
const deployEnv = process.env.DEPLOY_ENV || (isTesting ? 'local' : 'prod');

const getConfig = ({ lambdaName, packageDir }) => {
    const config = {
        mode: 'production',
        entry: {
            index: './index.js',
        },
        externals: ['aws-sdk'],
        output: {
            path: path.resolve(packageDir, 'build'),
            filename: `[name].js`,
            library: '[name]',
            libraryTarget: 'umd',
        },
        target: 'node',
        resolve: {
            alias: {
                'env-config': path.resolve(__dirname, 'config', `config-${deployEnv}.json`),
            },
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
            ],
        },
        optimization: {
            minimize: !isTesting,
        },
        plugins: [
            new ZipPlugin({
                path: path.resolve(packageDir, 'dist'),
                filename: `${lambdaName}-${deployEnv}.zip`,
                include: [/index\.js/],
            }),
        ],
    };

    if (isTesting) {
        config.mode = 'development';
        config.externals = [];
    }

    return config;
};

module.exports = getConfig;
