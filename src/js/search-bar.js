(function() {

	var searchBars = document.getElementsByClassName( 'search-bar' );

	for ( var i = 0; i < searchBars.length; i++ ) {

		var searchBar = searchBars[ i ];
		var field     = searchBar.getElementsByClassName( 'search-bar__field' );

		if ( field.length < 1 ) {
			return;
		} else {
			field = field[0];
		}

		field.addEventListener( "focus", function() {
			searchBar.classList.add( 'search-bar--focused' );
		} );

		field.addEventListener( "blur", function() {
			window.setTimeout( function() {
				searchBar.classList.remove( 'search-bar--focused' );
			}, 500 )
		} );

	}

})();
