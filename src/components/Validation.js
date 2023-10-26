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

	#showErrorMessage(inputElement, errorText) {
		const errorElement = this.#form.querySelector(`.${inputElement.id}-error`);

		errorElement.textContent = errorText;
		errorElement.classList.add(this.#config.visibleErrorMessage);
	}

	#hideErrorMessage(inputElement) {
		const errorElement = this.#form.querySelector(`.${inputElement.id}-error`);

		console.log(errorElement);
		errorElement.textContent = undefined;
		errorElement.classList.remove(this.#config.visibleErrorMessage);
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

		if (input.validity.patternMismatch) {
			input.setCustomValidity(input.dataset.errorMessage);
		} else {
			input.setCustomValidity('');
		}

		if (!input.validity.valid) {
			this.#showErrorOnInput(input);
			this.#showErrorMessage(input, input.validationMessage);
		} else {
			this.#hideErrorOnInput(input);
			this.#hideErrorMessage(input);
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
