import { program } from '../utils/const';
import { Importer } from './Importer';

export class Program extends Importer {
	constructor(templateSelector, containerSelector) {
		super(templateSelector, containerSelector);
	}

	generateProgramFeature(featureId, featureContent) {
		const template = this.getTemplate();
		const counterElement = template.querySelector('.program__counter');
		const contentElement = template.querySelector('.program__paragraph');

		counterElement.innerText = featureId;
		contentElement.innerHTML = featureContent;

		return template;
	}

	generateList() {
		program.forEach((el, index) => {
			const element = this.generateProgramFeature(index + 1, el);
			this.container.append(element);
		});
	}
}
