import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

// JavaScript concatination and compression.
gulp.task( 'js', () => {
	return gulp.src( './src/js/**/*.js' )
		.pipe( concat( 'juniper.js' ) )
		.pipe( gulp.dest( 'dist/assets/js' ) )
		.pipe( rename( 'juniper.min.js' ) )
		.pipe( uglify() )
		.pipe( gulp.dest( 'dist/assets/js' ) );
} );
