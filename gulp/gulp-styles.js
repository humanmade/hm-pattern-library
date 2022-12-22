import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import gulpCopy from 'gulp-copy';

const sass = gulpSass(dartSass);

// Compile SASS/SCSS to CSS
gulp.task( 'sass-compile', () => {
	return gulp.src( './src/styles/*.scss' )
		.pipe( sourcemaps.init() )
		.pipe( sass( { outputStyle: 'compressed' } )
		.on( 'error', sass.logError ) )
		.pipe( postcss( [ autoprefixer() ] ) )
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
gulp.task( 'styles', gulp.series( 'sass-compile', 'sass-copy' ) );
