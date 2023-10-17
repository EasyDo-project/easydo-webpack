export class Importer {
	templateElement;
	container;

	constructor(templateSelector, containerSelector) {
		this.templateElement = document.querySelector(templateSelector);
		this.container = document.querySelector(containerSelector);
	}

	getTemplate() {
		return this.templateElement.content
			.querySelector('.program__list-el')
			.cloneNode(true);
	}

	generateProgramFeature() {
		return this.getTemplate();
	}
}
