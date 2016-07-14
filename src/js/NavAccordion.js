(function( window ) {

	// Graceful faliure if the browser does NOT support ALL of these.
	if ( ! (
		'getElementsByClassName' in document &&
		'addEventListener' in document &&
		'classList' in document.documentElement
	) ) {
		return;
	}

	var initNavAccordion = function( navAccordionItem ) {

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
			anchor[0].insertBefore( navAccordionToggle, anchor[0].childNodes[0] );
		}

		var toggleSubNav = function( show ) {

			if ( 'undefined' === typeof show ) {
				show = navAccordionItem.classList.contains( 'NavAccordion_Item-Closed' );
			}

			if ( show ) {
				navAccordionItem.classList.remove( 'NavAccordion_Item-Closed' );
				navAccordionItem.classList.add( 'NavAccordion_Item-Open' );
				navAccordionToggle.classList.add( 'NavAccordion_Toggle-Open' );
				subNav.style.maxHeight = openHeight + 'px';
			} else {
				navAccordionItem.classList.add( 'NavAccordion_Item-Closed' );
				navAccordionItem.classList.remove( 'NavAccordion_Item-Open' );
				navAccordionToggle.classList.remove( 'NavAccordion_Toggle-Open' );
				subNav.style.maxHeight = 0;
			}

		}

		if ( navAccordionItem.classList.contains( 'NavAccordion_Item-Active' ) ) {
			toggleSubNav( true );
		} else if ( subNav.getElementsByClassName( 'NavAccordion_Item-Active' ).length > 0 ) {
			toggleSubNav( true );
		} else {
			toggleSubNav( false );
		}

		navAccordionToggle.addEventListener( 'click', function( event ) {
			event.preventDefault();
			navAccordionToggle.blur();
			toggleSubNav();
		});
	}

	// Init Accordion Nav for all NavAccordion Items.
	Array.prototype.forEach.call(
		document.getElementsByClassName( 'NavAccordion_Item' ),
		initNavAccordion
	);

} )( window );
