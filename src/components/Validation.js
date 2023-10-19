export class Validation {
	#config;
	#form;
	#arrayInputs;
	#submitBtn;

	constructor(config) {
		this.#config = config;
		this.#form = document.querySelector(`.${this.#config.formClass}`);
		this.#submitBtn = this.#form.querySelector(
			`.${this.#config.submitBtnClass}`
		);
		this.#arrayInputs = Array.from(
			this.#form.querySelectorAll(`.${this.#config.inputClass}`)
		);
	}

	#showErrorOnInput(input) {
		input.classList.add(this.#config.inputErrorClass);
	}

	#hideErrorOnInput(input) {
		input.classList.remove(this.#config.inputErrorClass);
	}

	#disableSubmitBtn() {
		this.#submitBtn.classList.add(this.#config.disabledSubmitBtnClass);
		this.#submitBtn.setAttribute('disabled', 'disabled');
	}

	#enableSubmitBtn() {
		this.#submitBtn.classList.remove(this.#config.disabledSubmitBtnClass);
		this.#submitBtn.removeAttribute('disabled', 'disabled');
	}

	#isValid(input) {
		const hasInvalidField = !input.validity.valid;

		if (hasInvalidField) {
			this.#showErrorOnInput(input);
			this.#disableSubmitBtn();
		} else {
			this.#hideErrorOnInput(input);
			this.#enableSubmitBtn();
		}
	}

	enableValidation() {
		this.#arrayInputs.forEach((input) => {
			input.addEventListener('input', () => {
				this.#isValid(input);
			});
		});
	}
}
