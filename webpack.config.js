const path    = require( 'path' )
const webpack = require( 'webpack' )

module.exports = {
	devtool: 'source-map',
	output: {
		filename: 'app.min.js',
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: [ 'es2015' ]
				}
			}
		]
	}
}
