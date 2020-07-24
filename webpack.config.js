const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, { mode }) => {
	const production = mode === 'production';

	return {
		entry: path.resolve(__dirname, 'src/root.js'),
		output: {
			filename: '@mf-navbar.js',
			libraryTarget: 'system',
			path: path.resolve(__dirname, 'dist'),
		},
		devtool: production ? 'none'  : 'sourcemap',
		resolve: {
			extensions: ['.js', '.jsx']
		},
		module: {
			rules: [
				{ parser: { system: false } },
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: [{ loader: 'babel-loader' }]
				}
			],
		},
		devServer: {
			historyApiFallback: true,
			disableHostCheck: true,
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		},
		plugins: [ new CleanWebpackPlugin() ],
		externals: production ? ['react', 'react-dom'] : [],
	};
};