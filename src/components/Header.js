export default class Header {
	constructor(
		headerSelector,
		openButtonSelector,
		closeButtonSelector,
		slideOutSelector,
		logoSelector
	) {
		this.header = document.querySelector(headerSelector);
		this.openButton = this.header.querySelector(openButtonSelector);
		this.closeButton = this.header.querySelector(closeButtonSelector);
		this.slideOut = this.header.querySelector(slideOutSelector);
		this.logo = this.header.querySelector(logoSelector);

		this.openSlideOut = this.openSlideOut.bind(this);
		this.closeSlideOut = this.closeSlideOut.bind(this);
		this.handleWindowResize = this.handleWindowResize.bind(this);

		window.addEventListener('resize', this.handleWindowResize);
	}

	closeSlideOut() {
		this.slideOut.classList.remove('header__mobile-slider_shown');
		this._headerSlideDown();
	}

	openSlideOut() {
		this.slideOut.classList.add('header__mobile-slider_shown');
		this._headerSlideUp();
	}

	handleWindowResize() {
		const windowWidth = window.innerWidth;

		if (windowWidth <= 1023) {
			this.openButton.style.display = 'block';
		} else {
			this.openButton.style.display = 'none';
		}
	}

	_headerSlideUp() {
		this.logo.classList.add('header__logo_hidden');
		this.openButton.classList.add('header__mobile-button_hidden');
	}

	_headerSlideDown() {
		this.logo.classList.remove('header__logo_hidden');
		this.openButton.classList.remove('header__mobile-button_hidden');
	}

	setEventListeners() {
		this.openButton.addEventListener('click', this.openSlideOut);
		this.closeButton.addEventListener('click', this.closeSlideOut);
	}
}
