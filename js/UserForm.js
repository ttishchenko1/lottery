window.UserForm = (function () {
	'use strict';

	var form = document.querySelector('[name="formRegistration"]');

	form.addEventListener('submit', function (event) {
		var user = {
			id: form.id.value,
			name: form.name.value,
			surname: form.surname.value,
			email: form.email.value,
			phone: form.phone.value,
			birthday: form.birthday.value
		};

		UserService.save(user);
		UserList.render();

		form.reset();
		form.id.value = null;

		event.preventDefault(); 
	});

	return {
		populate: function (user) {
			form.id.value = user.id;
			form.name.value = user.name;
			form.surname.value = user.surname;
			form.email.value = user.email;
			form.phone.value = user.phone;
			form.birthday.value = user.birthday;
		}
	};
})();
