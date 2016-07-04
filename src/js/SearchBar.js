(function() {

	$('.SearchBar').each( function() {

		var $searchBar = $(this);
		var $field     = $( '.SearchBar_Field', $searchBar );

		$field.focus( function() {
			$searchBar.addClass( 'SearchBar-Focused' );
		} );

		$field.blur( function() {
			$searchBar.removeClass( 'SearchBar-Focused' );
		} );

		$field.keyup( function() {
			$searchBar.toggleClass( 'SearchBar-HasResults', $field.val().length > 0 );
		} );

	} );

})(jQuery);
