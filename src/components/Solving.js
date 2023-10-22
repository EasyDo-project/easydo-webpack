import { Importer } from './Importer';

export class Solving extends Importer {
	constructor(templateSelector, containerSelector) {
		super(templateSelector, containerSelector);
	}

	_getTemplate() {
		return this.templateElement.content
			.querySelector('.solving__item')
			.cloneNode(true);
	}

	_generateSolvingFeature(featureContent) {
		const template = this._getTemplate();
		const contentElement = template.querySelector('.solving__text');

		contentElement.innerHTML = featureContent;

		return template;
	}

	generateList(textContent) {
		textContent.forEach((el) => {
			const element = this._generateSolvingFeature(el);
			this.container.append(element);
		});
	}
}
