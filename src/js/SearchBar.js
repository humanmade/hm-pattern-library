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
			searchBar.classList.remove( 'SearchBar-Focused' );
		} );

		field.addEventListener( "keyup", function() {
			if ( field.value.length > 0 ) {
				searchBar.classList.add( 'SearchBar-HasResults' );
			} else {
				searchBar.classList.remove( 'SearchBar-HasResults' );
			}
		} );
	}

})();
