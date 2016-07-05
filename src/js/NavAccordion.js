(function() {

	var navAccordion = function( el ) {

		Array.prototype.forEach.call( el.children, function( navAccordion_Item ) {

			var subNav = Array.prototype.filter.call( navAccordion_Item.children, function( el ) {
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

			var navAccordion_Toggle = document.createElement( 'BUTTON' );
			navAccordion_Toggle.appendChild( document.createTextNode( "Toggle" ) );
			navAccordion_Toggle.classList.add( 'Btn' );
			navAccordion_Toggle.classList.add( 'NavAccordion_Toggle' );

			var anchor = Array.prototype.filter.call( navAccordion_Item.children, function( el ) {
				return el.tagName === 'A';
			} );

			if ( anchor.length ) {
				anchor[0].appendChild( navAccordion_Toggle );
			}

			var toggleSubNav = function( show ) {

				if ( 'undefined' === typeof( show ) ) {
					show = navAccordion_Item.classList.contains( 'NavAccordion_Item-Closed' );
				}

				if ( show ) {
					navAccordion_Item.classList.remove( 'NavAccordion_Item-Closed' );
					navAccordion_Item.classList.add( 'NavAccordion_Item-Open' );
					subNav.style['max-height'] = openHeight + 'px';
				} else {
					navAccordion_Item.classList.add( 'NavAccordion_Item-Closed' );
					navAccordion_Item.classList.remove( 'NavAccordion_Item-Open' );
					subNav.style['max-height'] = 0;
				}

			}

			toggleSubNav( false );

			navAccordion_Toggle.addEventListener( 'click', function( event ) {
				event.preventDefault();
				navAccordion_Toggle.blur();
				toggleSubNav();
			});

		} );

	}

	var els = document.getElementsByClassName('NavAccordion');

	for ( var i = 0; i < els.length; i++ ) {
		navAccordion( els[ i ] );
	}

} )();
