import gulp from 'gulp';
import newer from 'gulp-newer';
import imagemin from 'gulp-imagemin';

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
