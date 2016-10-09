window.UserList = (function () {
	'use strict';

	var tbody = document.querySelector('[name="allUserTableSection"] table > tbody');

	tbody.addEventListener('click', function (event) {
		var user = UserService.find(event.target.parentElement.dataset.id);

		UserForm.populate(user);
	});

	return {
		render: function () {
			var users = UserService.list();

			tbody.innerHTML = '';

			users.forEach(function (user) {
				var tr = document.createElement('tr');

				tr.dataset.id = user.id;

				tr.innerHTML = `
					<td>${user.name}</td>
					<td>${user.surname}</td>
					<td>${user.email}</td>
					<td>${user.phone}</td>
					<td>${user.birthday}</td>
				`;
				
				tbody.appendChild(tr);
			});
		}
	};
})();
