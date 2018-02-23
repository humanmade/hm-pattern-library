const gulp   = require( 'gulp' );
const concat = require( 'gulp-concat' );
const uglify = require( 'gulp-uglify' );
const rename = require( 'gulp-rename' );

// JavaScript concatination and compression.
gulp.task( 'js', () => {
	return gulp.src( './src/js/**/*.js' )
		.pipe( concat( 'juniper.js' ) )
		.pipe( gulp.dest( 'dist/assets/js' ) )
		.pipe( rename( 'juniper.min.js' ) )
		.pipe( uglify() )
		.pipe( gulp.dest( 'dist/assets/js' ) );
} );
