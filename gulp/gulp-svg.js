const gulp     = require( 'gulp' );
const newer    = require( 'gulp-newer' );
const imagemin = require( 'gulp-imagemin' );
const replace  = require( 'gulp-replace' );
const rename   = require( 'gulp-rename' );

var svgMinArgs = {
	progressive: true,
	svgoPlugins: [
		{ removeViewBox: false },
		{ cleanupIDs: false }
	],
};

// Minify standard SVG and write to dest.
// Note ignore icons and logos, as we handle those separately.
gulp.task( 'svg-min', () => {

	var srcPattern = [
		'./src/images/**/*.svg',
		'!./src/images/icons/*',
		'!./src/images/logos/*'
	];

	return gulp.src( srcPattern )
		.pipe( newer( 'dist/assets/images' ) )
		.pipe( imagemin( svgMinArgs ) )
		.pipe( gulp.dest( './dist/assets/images' ) )

} );

/**
 * Helper function for registering a task for generating svgs in different colors.
 *
 * taskId. string, used to register task, and should match directory name.
 * color. object, should have name and fill (hex code) properties.
 */
var registerTask = function( taskId, color ) {
	gulp.task( taskId + '-' + color.name, () => {
		return gulp.src( './src/images/' + taskId + '/*.svg')
			.pipe( newer( 'dist/assets/images' ) )
			.pipe( replace( '#000000', color.fill ) )
			.pipe( rename( { suffix: '-' + color.name } ) )
			.pipe( imagemin( svgMinArgs ) )
			.pipe( gulp.dest( './dist/assets/images/' + taskId ) )
	} );
};

/**
 * Generate color variations for all icons.
 * Note relies on background color of icons being set as `#000000`.
 */
var iconColors = [
	{ name: 'black', fill: '#353535' },
	{ name: 'white', fill: '#FFFFFF' },
	{ name: 'red',   fill: '#D94E3A' },
	{ name: 'beige', fill: '#F4EFE6' },
];

var logoColors = [
	{ name: 'black', fill: '#353535' },
	{ name: 'white', fill: '#FFFFFF' },
	{ name: 'red',   fill: '#D94E3A' },
];

// Register tasks for each icon color and logo colors.
iconColors.forEach( ( color ) => registerTask( 'icons', color ) );
logoColors.forEach( ( color ) => registerTask( 'logos', color ) );

// Create a wrapper 'svg' task.
gulp.task(
	'svg',
	[ 'svg-min' ]
		.concat( iconColors.map( color => 'icons-' + color.name ) )
		.concat( logoColors.map( color => 'logos-' + color.name ) )
);
