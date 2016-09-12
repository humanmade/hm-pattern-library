( document => {

	// Graceful faliure if the browser does NOT support ALL of these.
	if ( ! (
		'getElementsByClassName' in document &&
		'addEventListener' in document &&
		'classList' in document.documentElement
	) ) {
		return
	}

	var getSubNav = navAccordionItem => {

		var subNav = Array.prototype.filter.call(
			navAccordionItem.children,
			el => {
				return el.tagName === 'UL'
			}
		)

		return subNav.length > 0 ? subNav[0] : null

	}

	var initNavAccordion = navAccordionItem => {

		var subNav = getSubNav( navAccordionItem ),
			navAccordionToggle = document.createElement( 'BUTTON' )

		navAccordionToggle.appendChild( document.createTextNode( 'Toggle' ) )
		navAccordionToggle.classList.add( 'Btn', 'NavAccordion_Toggle' )

		var anchor = Array.prototype.filter.call(
			navAccordionItem.children,
			el => {
				return el.tagName === 'A'
			}
		)

		if ( anchor.length ) {
			anchor[0].insertBefore(
				navAccordionToggle,
				anchor[0].childNodes[0]
			)
		}

		var toggleSubNav = show => {

			if ( typeof show === 'undefined' ) {
				show = navAccordionItem.classList.contains( 'NavAccordion_Item-Closed' )
			}

			if ( show ) {
				navAccordionItem.classList.toggle( 'NavAccordion_Item-Closed', 'NavAccordion_Item-Open' )
				navAccordionToggle.classList.add( 'NavAccordion_Toggle-Open' )
				subNav.style.height = 'auto'
			} else {
				navAccordionItem.classList.toggle( 'NavAccordion_Item-Closed', 'NavAccordion_Item-Open' )
				navAccordionToggle.classList.remove( 'NavAccordion_Toggle-Open' )
				subNav.style.height = 0
			}

		}

		if ( navAccordionItem.classList.contains( 'NavAccordion_Item-Active' ) ) {
			toggleSubNav( true )
		} else if ( subNav.getElementsByClassName( 'NavAccordion_Item-Active' ).length > 0 ) {
			toggleSubNav( true )
		} else {
			toggleSubNav( false )
		}

		navAccordionToggle.addEventListener( 'click', event => {
			event.preventDefault()
			navAccordionToggle.blur()
			toggleSubNav()
		})
	}

	// Init Accordion Nav for all NavAccordion Items.
	Array.prototype.forEach.call(
		document.getElementsByClassName( 'NavAccordion_Item' ),
		initNavAccordion
	)

})( document )
