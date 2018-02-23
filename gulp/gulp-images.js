const gulp     = require( 'gulp' );
const newer    = require( 'gulp-newer' );
const imagemin = require( 'gulp-imagemin' );

// Minify images.
gulp.task( 'images', () => {
	return gulp.src( './src/images/**/*.{jpg,jpeg,png}')
		.pipe( newer( 'dist/assets/images' ) )
		.pipe( imagemin( {
			progressive: true,
			svgoPlugins: [
				{ removeViewBox: false },
				{ cleanupIDs: false }
			],
		} ) )
		.pipe( gulp.dest( 'dist/assets/images' ) );
} );
