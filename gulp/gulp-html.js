const gulp        = require( 'gulp' );
const replace     = require( 'gulp-replace' );
const fileinclude = require( 'gulp-file-include' );

// HTML file include
gulp.task( 'fileinclude', () => {
	return gulp.src( [ './src/html/**/*.html', '!./src/html/components/*', '!./src/html/parts/*' ] )
		.pipe( fileinclude( {
			prefix:   '@',
			basepath: '@file',
		} ) )
		// Stip gap inserted between included files.
		.pipe( replace( '\n\u2028\u2028\n', '\n' ) )
		.pipe( gulp.dest( './dist/' ) );
} );
