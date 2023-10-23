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
		const hasInvalidFieldInForm = this.#arrayInputs.some((input) => {
			return input.validity.valid === false;
		});
		const hasInvalidField = !input.validity.valid;

		if (hasInvalidField) {
			this.#showErrorOnInput(input);
		} else {
			this.#hideErrorOnInput(input);
		}

		if (hasInvalidFieldInForm) {
			this.#disableSubmitBtn();
		} else {
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
