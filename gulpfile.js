const gulp          = require( 'gulp' );
const sourcemaps    = require( 'gulp-sourcemaps' );
const watch         = require( 'gulp-watch' );
const postcss       = require( 'gulp-postcss' );
const autoprefixer  = require( 'autoprefixer' );
const sass          = require( 'gulp-sass' );
const sassLint      = require( 'gulp-sass-lint' );
const fileinclude   = require( 'gulp-file-include' );
const newer         = require( 'gulp-newer' );
const imagemin      = require( 'gulp-imagemin' );
const uglify        = require( 'gulp-uglify' );
const concat        = require( 'gulp-concat' );
const rename        = require( 'gulp-rename' );
const gulpCopy      = require( 'gulp-copy' );

// Compile and minify CSS.
gulp.task( 'styles', () => {

	// Compile SASS to CSS.
	gulp.src( './src/styles/*.scss' )
		.pipe( sourcemaps.init() )
		.pipe( sass( { outputStyle: 'compressed' } )
		.on( 'error', sass.logError ) )
		.pipe( postcss( [ autoprefixer( { browsers: ['last 3 versions'] } ) ] ) )
		.pipe( sourcemaps.write('.') )
		.pipe( gulp.dest( './dist/assets/styles' ) );

	// Copy SASS to dist for use in other projects.
	gulp.src( './src/styles/**/*.scss' )
		.pipe( gulpCopy( './dist/assets/sass', { prefix: 2 } ) );
});

// Watch for changes in JS/CSS.
gulp.task( 'watch', function() {
	gulp.watch( 'src/styles/**/*.scss', ['styles'] );
	gulp.watch( 'src/js/**/*.js', ['js'] );
	gulp.watch( 'src/html/**/*.html', ['fileinclude'] );
});

// JavaScript concatination and compression.
gulp.task( 'js', function() {
	return gulp.src( './src/js/**/*.js' )
		.pipe( concat( 'app.js' ) )
		.pipe( gulp.dest( 'dist/assets/js' ) )
		.pipe( rename( 'app.min.js' ) )
		.pipe( uglify() )
		.pipe( gulp.dest( 'dist/assets/js' ) );
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

// Minify SVG and write to dest.
gulp.task( 'svg', () => {
	return gulp.src( './src/images/**/*.svg')
		.pipe( newer( 'dist/assets/images' ) )
		.pipe( imagemin( {
			progressive: true,
			svgoPlugins: [
				{ removeViewBox: false },
				{ cleanupIDs: false }
			],
		} ) )
		.pipe( gulp.dest( './dist/assets/images' ) )
} );

gulp.task( 'lint-sass', function () {
  return gulp.src( './src/styles/**/*.s+(a|c)ss')
	.pipe( sassLint( { configFile: '.sass-lint.yml' } ) )
	.pipe( sassLint.format() )
	.pipe( sassLint.failOnError() )
});

// Tasks
gulp.task( 'default', [ 'styles', 'js', 'svg', 'images', 'fileinclude', 'lint' ] );
gulp.task( 'lint', [ 'lint-sass' ] );
