const gulp          = require( 'gulp' )
const webpack       = require( 'webpack' )
const webpackStream = require( 'webpack-stream' )

// JavaScript concatination and compression.
gulp.task( 'js', () => {
	return gulp.src( './src/js/**/*.js' )
		.pipe( webpackStream( require('./../webpack.config.js' ) ) )
		.pipe( gulp.dest( 'dist/assets/js' ) )
} )
