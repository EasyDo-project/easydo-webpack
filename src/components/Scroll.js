export class Scroll {
	constructor(scrollItemsSelector) {
		this._scrollItemsSelector = document.querySelector(scrollItemsSelector);
		this._isDown = false;
	}

	_setEventListeners() {
		let startX;
		let scrollLeft;
		this._scrollItemsSelector.addEventListener('mousedown', (e) => {
			this._isDown = true;
			this._scrollItemsSelector.classList.add('active');
			startX = e.pageX - this._scrollItemsSelector.offsetLeft;
			scrollLeft = this._scrollItemsSelector.scrollLeft;
		});
		this._scrollItemsSelector.addEventListener('mouseleave', () => {
			this._isDown = false;
			this._scrollItemsSelector.classList.remove('active');
		});
		this._scrollItemsSelector.addEventListener('mouseup', () => {
			this._isDown = false;
			this._scrollItemsSelector.classList.remove('active');
		});
		this._scrollItemsSelector.addEventListener('mousemove', (e) => {
			if (!this._isDown) return;
			e.preventDefault();
			e.stopPropagation();
			const x = e.pageX - this._scrollItemsSelector.offsetLeft;
			const walk = x - startX;
			this._scrollItemsSelector.scrollLeft = scrollLeft - walk;
		});
	}

	enableScroll() {
		document.addEventListener(
			'DOMContentLoaded',
			() => {
				this._setEventListeners();
			},
			false
		);
	}
}
