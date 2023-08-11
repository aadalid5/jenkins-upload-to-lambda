const getBaseConfig = require('demo-lambda-edge-shared/webpack.base.config');

const config = getBaseConfig({
    lambdaName: 'demo-viewer-response-lambda',
    packageDir: __dirname,
});

module.exports = config;
