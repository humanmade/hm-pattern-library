const gulp    = require( 'gulp' )
const webpack = require( 'webpack-stream' )

// JavaScript concatination and compression.
gulp.task( 'js', () => {
	return gulp.src( './src/js/**/*.js' )
		.pipe( webpack( require( './../webpack.config.js' ) ) )
		.pipe( gulp.dest( 'dist/assets/js' ) )
} )
