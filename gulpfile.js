const gulp          = require( 'gulp' );
const sourcemaps    = require( 'gulp-sourcemaps' );
const watch         = require( 'gulp-watch' );
const postcss       = require( 'gulp-postcss' );
const autoprefixer  = require( 'autoprefixer' );
const sass          = require( 'gulp-sass' );
const sassLint      = require( 'gulp-sass-lint' );
const fileinclude   = require( 'gulp-file-include' );
const uglify        = require( 'gulp-uglify' );
const concat        = require( 'gulp-concat' );
const rename        = require( 'gulp-rename' );

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
	gulp.watch( 'src/js/**/*.js', ['js'] );
	gulp.watch( 'src/html/**/*.html', ['fileinclude'] );
});


gulp.task( 'lint-sass', function () {
  return gulp.src( './src/styles/**/*.s+(a|c)ss')
	.pipe( sassLint( { configFile: '.sass-lint.yml' } ) )
	.pipe( sassLint.format() )
	.pipe( sassLint.failOnError() )
});

// JavaScript concatination and compression.
gulp.task( 'js', function() {
	return gulp.src( './src/js/**/*.js' )
		.pipe( concat( 'app.js' ) )
		.pipe( gulp.dest( 'dist/js' ) )
		.pipe( rename( 'app.min.js' ) )
		.pipe( uglify() )
		.pipe( gulp.dest( 'dist/js' ) );
} );

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
gulp.task( 'default', [ 'styles', 'js', 'fileinclude' ] );
