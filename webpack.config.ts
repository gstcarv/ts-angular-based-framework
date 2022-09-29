import { Configuration } from 'webpack'; /* eslint-disable-line import/no-extraneous-dependencies */
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'; /* eslint-disable-line import/no-extraneous-dependencies */

type WebpackConfiguration = Configuration | DevServerConfiguration;

const config: WebpackConfiguration = {
    mode: 'development',

    devServer: {
        port: 4344,
        hot: true,
    },
};

export default config;
