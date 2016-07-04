(function($) {

	var navAccordion = function( $el ) {

		$el.children().each( function() {

			var $NavAccordion_Item = $(this);
			var $subNav = $NavAccordion_Item.children( 'ul' );

			if ( $subNav.length > 0 ) {

				var openHeight           = $subNav.outerHeight();
				var $NavAccordion_Toggle = $( '<button/>', {
					text: 'Toggle',
					class: 'Btn NavAccordion_Toggle'
				} );

				var toggleSubNav = function( show ) {

					if ( 'undefined' === typeof( show ) ) {
						show = $NavAccordion_Item.hasClass( 'NavAccordion_Item-Closed' );
					}

					if ( show ) {
						$NavAccordion_Item.removeClass( 'NavAccordion_Item-Closed' );
						$NavAccordion_Item.addClass( 'NavAccordion_Item-Open' );
						$subNav.css( 'max-height', openHeight );
					} else {
						$NavAccordion_Item.addClass( 'NavAccordion_Item-Closed' );
						$NavAccordion_Item.removeClass( 'NavAccordion_Item-Open' );
						$subNav.css( 'max-height', 0 );
					}

				}

				$NavAccordion_Toggle.appendTo( $NavAccordion_Item.children('.NavAccordion_Anchor') );
				toggleSubNav( false );

				$NavAccordion_Toggle.click( function( e ) {
					e.preventDefault();
					$(this).blur();
					toggleSubNav();
				});
			}

		} );

	}

	$('.NavAccordion').each( function() {
		navAccordion( $(this) );
	} );

} )(jQuery);
