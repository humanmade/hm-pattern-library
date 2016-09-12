const gulp     = require( 'gulp' )
const sassLint = require( 'gulp-sass-lint' )
const eslint   = require( 'gulp-eslint' )

gulp.task( 'lint-sass', () => {
	return gulp.src( './src/styles/**/*.s+(a|c)ss' )
		.pipe( sassLint( { configFile: '.sass-lint.yml' } ) )
		.pipe( sassLint.format() )
		.pipe( sassLint.failOnError() )
} )

gulp.task( 'lint-js', () => {
	return gulp.src( [
		'./src/js/**/*',
		'!./src/js/vendor/**/*',
	] )
		.pipe( eslint( { configFile: './.eslintrc.yml' } ) )
		.pipe( eslint.format() )
		.pipe( eslint.failAfterError() )
} )

gulp.task( 'lint-gulp', () => {
	return gulp.src( [
		'./gulpfile.js',
		'./gulp/**/*.js',
	] )
		.pipe( eslint( {
			configFile: './.eslintrc.yml',
			globals:    ['require'],
		} ) )
		.pipe( eslint.format() )
		.pipe( eslint.failAfterError() )
} )

// Wrapper task for all linting tasks.
gulp.task( 'lint', [ 'lint-sass', 'lint-js', 'lint-gulp' ] )
