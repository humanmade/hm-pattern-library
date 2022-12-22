import watch from 'gulp-watch';
import gulp from 'gulp';
import del from 'del';

// For neatness, most tasks have been split up into separate files
// Just load them all from ./gulp directory.
import './gulp/index.js';

// Task to cleanup the dist directory.
gulp.task( 'clean-dist', ( cb ) => {
	return del( ['./dist/**/*', '!./dist/.git' ], cb );
});

// Watch for changes in HTML/JS/CSS.
gulp.task( 'watch', () => {
	watch( 'src/styles/**/*.scss', ['styles'] );
	watch( 'src/js/**/*.js', ['js'] );
	watch( 'src/html/**/*.html', ['fileinclude'] );
});

// Default task. Do everything.
gulp.task( 'default', gulp.series( 'clean-dist', gulp.parallel( 'styles', 'js', 'svg', 'images', 'fileinclude' ), 'lint' ) );

// Just build.
gulp.task( 'build', gulp.series( 'clean-dist', gulp.parallel( 'styles', 'js', 'svg', 'images', 'fileinclude' ) ) );
