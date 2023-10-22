export class Faq {
	constructor(containerSelector) {
		this.accordions = document.querySelectorAll(containerSelector);
	}

	activateAccordion() {
		for (let i = 0; i < this.accordions.length; i++) {
			this.accordions[i].addEventListener('click', function () {
				const panel = this.firstElementChild.nextElementSibling;
				if (
					panel.style.maxHeight === `${0}px` ||
					panel.style.maxHeight === ''
				) {
					panel.style.maxHeight = `${panel.scrollHeight}px`;
				} else {
					panel.style.maxHeight = 0;
				}
			});
		}
	}
}
