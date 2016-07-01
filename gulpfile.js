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
const svg2png       = require( 'gulp-svg2png' );

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
		.pipe( newer( 'dist/images' ) )
		.pipe( imagemin( {
			progressive: true,
			svgoPlugins: [
				{ removeViewBox: false },
				{ cleanupIDs: false }
			],
		} ) )
		.pipe( gulp.dest( 'dist/images' ) );
} );

// Minify SVG and write to dest.
gulp.task( 'svg', () => {
	return gulp.src( './src/images/**/*.svg')
		.pipe( newer( 'dist/images' ) )
		.pipe( imagemin( {
			progressive: true,
			svgoPlugins: [
				{ removeViewBox: false },
				{ cleanupIDs: false }
			],
		} ) )
		.pipe( gulp.dest( './dist/images' ) )
} );

gulp.task( 'lint-sass', function () {
  return gulp.src( './src/styles/**/*.s+(a|c)ss')
	.pipe( sassLint( { configFile: '.sass-lint.yml' } ) )
	.pipe( sassLint.format() )
	.pipe( sassLint.failOnError() )
});

// Tasks
gulp.task( 'default', [ 'styles', 'svg', 'images', 'fileinclude', 'lint' ] );
gulp.task( 'lint', [ 'lint-sass' ] );
