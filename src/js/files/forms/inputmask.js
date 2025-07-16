// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const data = document.querySelectorAll('.tel');
if (data) {
	Inputmask({ "mask": "+7 (999) - 999 - 99 - 99" }).mask(data);
}