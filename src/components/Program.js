import { program } from '../utils/const';

export class Program {
	#templateElement;
	#container;

	constructor(templateSelector, containerSelector) {
		this.#templateElement = document.querySelector(templateSelector);
		this.#container = document.querySelector(containerSelector);
	}

	#getTemplate() {
		return this.#templateElement.content
			.querySelector('.program__list-el')
			.cloneNode(true);
	}

	#generateProgramFeature(featureId, featureContent) {
		const template = this.#getTemplate();
		const counterElement = template.querySelector('.program__counter');
		const contentElement = template.querySelector('.program__paragraph');

		counterElement.innerText = featureId;
		contentElement.innerHTML = featureContent;

		return template;
	}

	generateList() {
		program.forEach((el, index) => {
			const element = this.#generateProgramFeature(index + 1, el);
			this.#container.append(element);
		});
	}
}
