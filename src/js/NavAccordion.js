(function() {

	var navAccordion = function( el ) {

		var children = el.children;


		for ( var i = 0; i < children.length; i++ ) {

			var navAccordion_Item = children[i];

			var subNav = Array.prototype.filter.call( navAccordion_Item.children, function( el ) {
				return el.tagName === 'UL';
			} );

			if ( subNav.length < 1 ) {
				continue;
			}

			var openHeight = subNav.offsetHeight;
			var style      = getComputedStyle( subNav );

			openHeight += parseInt( style.marginTop ) + parseInt( style.marginBottom );

			var navAccordion_Toggle = document.createElement( 'BUTTON' );
			navAccordion_Toggle.appendChild( document.createTextNode( "Toggle" ) );, {
			navAccordion_Toggle.classList.add( 'Btn NavAccordion_Toggle' );

		}
		// 	if ( $subNav.length > 0 ) {

		// 		var openHeight           = $subNav.outerHeight();
		// 		var $NavAccordion_Toggle = $( '<button/>', {
		// 			text: 'Toggle',
		// 			class: 'Btn NavAccordion_Toggle'
		// 		} );

		// 		var toggleSubNav = function( show ) {

		// 			if ( 'undefined' === typeof( show ) ) {
		// 				show = $NavAccordion_Item.hasClass( 'NavAccordion_Item-Closed' );
		// 			}

		// 			if ( show ) {
		// 				$NavAccordion_Item.removeClass( 'NavAccordion_Item-Closed' );
		// 				$NavAccordion_Item.addClass( 'NavAccordion_Item-Open' );
		// 				$subNav.css( 'max-height', openHeight );
		// 			} else {
		// 				$NavAccordion_Item.addClass( 'NavAccordion_Item-Closed' );
		// 				$NavAccordion_Item.removeClass( 'NavAccordion_Item-Open' );
		// 				$subNav.css( 'max-height', 0 );
		// 			}

		// 		}

		// 		$NavAccordion_Toggle.appendTo( $NavAccordion_Item.children('.NavAccordion_Anchor') );
		// 		toggleSubNav( false );

		// 		$NavAccordion_Toggle.click( function( e ) {
		// 			e.preventDefault();
		// 			$(this).blur();
		// 			toggleSubNav();
		// 		});
		// 	}

		// } );

	}

	var els = document.getElementsByClassName('NavAccordion');

	for ( var i = 0; i < els.length; i++ ) {
		navAccordion( els[ i ] );
	}

} )();
