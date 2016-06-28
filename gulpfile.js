const gulp          = require( 'gulp' );
const sourcemaps    = require( 'gulp-sourcemaps' );
const watch         = require( 'gulp-watch' );
const postcss       = require( 'gulp-postcss' );
const autoprefixer  = require( 'autoprefixer' );
const sass          = require( 'gulp-sass' );

// Compile and minify CSS.
gulp.task( 'styles', () => {
	gulp.src( './src/styles/*.scss' )
		.pipe( sourcemaps.init() )
		.pipe( sass( { outputStyle: 'compressed' } )
		.on( 'error', sass.logError ) )
		.pipe( postcss( [ autoprefixer( { browsers: ['last 3 versions'] } ) ] ) )
		.pipe( sourcemaps.write('.') )
		.pipe( gulp.dest( './src/styles' ) );
});

// Watch for changes in JS/CSS.
gulp.task( 'watch', function() {
	gulp.watch( 'src/styles/**/*.scss', ['styles'] );
});

// Tasks
gulp.task( 'default', [ 'styles' ] );
