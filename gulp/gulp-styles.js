const gulp         = require( 'gulp' );
const sourcemaps   = require( 'gulp-sourcemaps' );
const postcss      = require( 'gulp-postcss' );
const autoprefixer = require( 'autoprefixer' );
const sass         = require( 'gulp-sass' );
const gulpCopy     = require( 'gulp-copy' );

// Compile SASS/SCSS to CSS
gulp.task( 'sass-compile', () => {
	return gulp.src( './src/styles/*.scss' )
		.pipe( sourcemaps.init() )
		.pipe( sass( { outputStyle: 'compressed' } )
		.on( 'error', sass.logError ) )
		.pipe( postcss( [ autoprefixer( { browsers: ['last 3 versions'] } ) ] ) )
		.pipe( sourcemaps.write('.') )
		.pipe( gulp.dest( './dist/assets/styles' ) );
});

// Copy SASS to dist for use in other projects.
gulp.task( 'sass-copy', () => {

	var copy = [
		'./src/styles/**/*.scss',
	];

	var ignore = [
		'!./src/styles/style-guide.scss'
	];

	return gulp.src( copy.concat( ignore ) )
		.pipe( gulpCopy( './dist/assets/sass', { prefix: 2 } ) );
} );

// Wrapper task for all styles tasks.
gulp.task( 'styles',  [ 'sass-compile', 'sass-copy' ] );
