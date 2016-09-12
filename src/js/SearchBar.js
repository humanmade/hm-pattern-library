( document => {

	var initSearchBar = searchBar => {

		let field = searchBar.getElementsByClassName( 'SearchBar_Field' )

		if ( field.length < 1 ) {
			return
		}

		field[0].addEventListener( 'focus', () => {
			searchBar.classList.add( 'SearchBar-Focused' )
		} )

		field[0].addEventListener( 'blur', () => {
			window.setTimeout( () => {
				searchBar.classList.remove( 'SearchBar-Focused' )
			}, 500 )
		} )

	}

	Array.prototype.forEach.call(
		document.getElementsByClassName( 'SearchBar' ),
		initSearchBar
	)

} )( document )
