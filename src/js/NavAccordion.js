(function( window ) {

	// Graceful faliure if the browser does NOT support ALL of these.
	if ( ! (
		'getElementsByClassName' in document &&
		'addEventListener' in document &&
		'classList' in document.documentElement
	) ) {
		return;
	}

	var navAccordion = function( el ) {

		Array.prototype.forEach.call( el.children, function( navAccordionItem ) {

			var subNav = Array.prototype.filter.call( navAccordionItem.children, function( el ) {
				return el.tagName === 'UL';
			} );

			if ( subNav.length < 1 ) {
				return;
			} else {
				subNav = subNav[0];
			}

			var openHeight = subNav.offsetHeight;
			var style      = getComputedStyle( subNav );

			openHeight += parseInt( style.marginTop ) + parseInt( style.marginBottom );

			var navAccordionToggle = document.createElement( 'BUTTON' );
			navAccordionToggle.appendChild( document.createTextNode( "Toggle" ) );
			navAccordionToggle.classList.add( 'Btn' );
			navAccordionToggle.classList.add( 'NavAccordion_Toggle' );

			var anchor = Array.prototype.filter.call( navAccordionItem.children, function( el ) {
				return el.tagName === 'A';
			} );

			if ( anchor.length ) {
				anchor[0].appendChild( navAccordionToggle );
			}

			var toggleSubNav = function( show ) {

				if ( 'undefined' === typeof show ) {
					show = navAccordionItem.classList.contains( 'NavAccordion_Item-Closed' );
				}

				if ( show ) {
					navAccordionItem.classList.remove( 'NavAccordion_Item-Closed' );
					navAccordionItem.classList.add( 'NavAccordion_Item-Open' );
					subNav.style.maxHeight = openHeight + 'px';
				} else {
					navAccordionItem.classList.add( 'NavAccordion_Item-Closed' );
					navAccordionItem.classList.remove( 'NavAccordion_Item-Open' );
					subNav.style.maxHeight = 0;
				}

			}

			toggleSubNav( false );

			navAccordionToggle.addEventListener( 'click', function( event ) {
				event.preventDefault();
				navAccordionToggle.blur();
				toggleSubNav();
			});

		} );

	}

	var els = document.getElementsByClassName('NavAccordion');

	for ( var i = 0; i < els.length; i++ ) {
		navAccordion( els[ i ] );
	}

} )( window );
