const gulp          = require( 'gulp' );
const sourcemaps    = require( 'gulp-sourcemaps' );
const watch         = require( 'gulp-watch' );
const postcss       = require( 'gulp-postcss' );
const autoprefixer  = require( 'autoprefixer' );
const sass          = require( 'gulp-sass' );
const sassLint      = require( 'gulp-sass-lint' );
const fileinclude   = require( 'gulp-file-include' );

// Compile and minify CSS.
gulp.task( 'styles', () => {
	gulp.src( './src/styles/*.scss' )
		.pipe( sourcemaps.init() )
		.pipe( sass( { outputStyle: 'compressed' } )
		.on( 'error', sass.logError ) )
		.pipe( postcss( [ autoprefixer( { browsers: ['last 3 versions'] } ) ] ) )
		.pipe( sourcemaps.write('.') )
		.pipe( gulp.dest( './dist/styles' ) );
});

// Watch for changes in JS/CSS.
gulp.task( 'watch', function() {
	gulp.watch( 'src/styles/**/*.scss', ['styles'] );
	gulp.watch( 'src/html/**/*.html', ['fileinclude'] );
});


gulp.task( 'lint-sass', function () {
  return gulp.src( './src/styles/**/*.s+(a|c)ss')
	.pipe( sassLint( { configFile: '.sass-lint.yml' } ) )
	.pipe( sassLint.format() )
	.pipe( sassLint.failOnError() )
});

// HTML file include
gulp.task( 'fileinclude', function() {
	gulp.src( ['./src/html/index.html'] )
		.pipe( fileinclude( {
			prefix:   '@',
			basepath: '@file'
		} ) )
		.pipe( gulp.dest( './dist/' ) );
} );

// Tasks
gulp.task( 'default', [ 'styles', 'fileinclude' ] );
