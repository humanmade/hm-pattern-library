const gulp     = require( 'gulp' );
const sassLint = require( 'gulp-sass-lint' );

gulp.task( 'lint-sass', () => {
	return gulp.src( './src/styles/**/*.s+(a|c)ss')
		.pipe( sassLint( { configFile: '.sass-lint.yml' } ) )
		.pipe( sassLint.format() )
		.pipe( sassLint.failOnError() )
});

// Wrapper task for all linting tasks.
gulp.task( 'lint', [ 'lint-sass' ] );
