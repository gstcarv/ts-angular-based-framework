/* eslint import/no-extraneous-dependencies: 0 */

import path from 'path';
import { Configuration, WebpackPluginFunction } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlReplaceWebpackPlugin from 'html-replace-webpack-plugin';
import AppConfig from './src/app.config'; // eslint-disable-line import/no-unresolved

const appConfig = AppConfig();

type WebpackConfiguration = Configuration | DevServerConfiguration;

const webpackConfig: WebpackConfiguration = {
    mode: 'development',

    entry: path.resolve(__dirname, 'src', 'main.ts'),

    devServer: {
        port: 4344,
        hot: true,
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/public', 'index.html'),
        }),

        new HtmlReplaceWebpackPlugin([
            {
                pattern: '@projectName',
                replacement: appConfig.title,
            },
        ]) as WebpackPluginFunction,
    ],

    resolve: {
        extensions: ['.ts', '.js', '.html'],

        alias: {
            lib: path.resolve(__dirname, 'lib'),
            src: path.resolve(__dirname, 'src'),
        },
    },
};

export default webpackConfig;
