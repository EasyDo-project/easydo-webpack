export class PhoneMask {
	inputElement;

	constructor(inputSelector) {
		this.inputElement = document.querySelector(inputSelector);
	}
	#masking(evt) {
		const keyCode = evt.keyCode;
		const template = '+7 (___) ___-__-__';
		const def = template.replace(/\D/g, '');
		const val = this.value.replace(/\D/g, '');

		let i = 0,
			newValue = template.replace(/[_\d]/g, function (a) {
				return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
			});
		i = newValue.indexOf('_');
		if (i !== -1) {
			newValue = newValue.slice(0, i);
		}
		let reg = template
			.substr(0, this.value.length)
			.replace(/_+/g, function (a) {
				return '\\d{1,' + a.length + '}';
			})
			.replace(/[+()]/g, '\\$&');
		reg = new RegExp('^' + reg + '$');
		if (
			!reg.test(this.value) ||
			this.value.length < 5 ||
			(keyCode > 47 && keyCode < 58)
		) {
			this.value = newValue;
		}
		if (evt.type === 'blur' && this.value.length < 5) {
			this.value = '';
		}
	}

	startMAsk() {
		this.inputElement.addEventListener('input', this.#masking);
		this.inputElement.addEventListener('focus', this.#masking);
		this.inputElement.addEventListener('blur', this.#masking);
	}
}
