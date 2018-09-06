const requireDir   = require('require-dir');
const gulp         = require( 'gulp' );
const watch        = require( 'gulp-watch' );
const del          = require( 'del' );

// For neatness, most tasks have been split up into separate files
// Just load them all from ./gulp directory.
requireDir( './gulp' );

// Task to cleanup the dist directory.
gulp.task( 'clean-dist', ( cb ) => {
	return del( ['./dist/**/*', '!./dist/.git' ], cb );
});

// Watch for changes in HTML/JS/CSS.
gulp.task( 'watch', () => {
	gulp.watch( 'src/styles/**/*.scss', ['styles'] );
	gulp.watch( 'src/js/**/*.js', ['js'] );
	gulp.watch( 'src/html/**/*.html', ['fileinclude'] );
});

// Default task. Do everything.
gulp.task( 'default', gulp.series( 'clean-dist', gulp.parallel( 'styles', 'js', 'svg', 'images', 'fileinclude' ), 'lint' ) );

// Just build.
gulp.task( 'build', gulp.series( 'clean-dist', gulp.parallel( 'styles', 'js', 'svg', 'images', 'fileinclude' ) ) );
