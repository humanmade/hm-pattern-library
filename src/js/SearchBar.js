(function() {

	var searchBars = document.getElementsByClassName( 'SearchBar' );

	for ( var i = 0; i < searchBars.length; i++ ) {

		var searchBar = searchBars[ i ];
		var field     = searchBar.getElementsByClassName( 'SearchBar_Field' );

		if ( field.length < 1 ) {
			return;
		} else {
			field = field[0];
		}

		field.addEventListener( "focus", function() {
			searchBar.classList.add( 'SearchBar-Focused' );
		} );

		field.addEventListener( "blur", function() {
			window.setTimeout( function() {
				searchBar.classList.remove( 'SearchBar-Focused' );
			}, 500 )
		} );

	}

})();
