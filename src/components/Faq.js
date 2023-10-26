export class Faq {
	constructor(buttonSelector) {
		this.buttons = document.querySelectorAll(buttonSelector);
	}

	activateAccordion() {
		for (let i = 0; i < this.buttons.length; i++) {
			this.buttons[i].addEventListener('click', function () {
				const panel = this.parentNode.nextElementSibling;
				if (
					panel.style.maxHeight === `${0}px` ||
					panel.style.maxHeight === ''
				) {
					this.classList.add('faq__rotate');
					panel.style.maxHeight = `${panel.scrollHeight}px`;
				} else {
					this.classList.remove('faq__rotate');
					panel.style.maxHeight = 0;
				}
			});
		}
	}
}
