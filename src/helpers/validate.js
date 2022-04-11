const validate = (form) => {
	const errors = {};
	const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
	const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
	const regexRuc = /^[0-9]+$/;

	if (!form.email) {
		errors.email = 'El email es requerido';
	} else if (!regexEmail.test(form.email)) {
		errors.email = 'El email no es valido';
	}
	if (!form.password) {
		errors.password = 'La contraseña es requerida';
	} else if (!regexPassword.test(form.password)) {
		errors.password =
			'Asegurese de que la contraseña contenga al menos 6 caracteres, una mayuscula, una minuscula y un numero';
	}
	if (!form.ruc) {
		errors.ruc = 'El ruc es requerido';
	} else if (!regexRuc.test(form.ruc)) {
		errors.ruc = 'El ruc no es valido';
	}
	return errors;
};
export default validate;
