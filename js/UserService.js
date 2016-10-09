window.UserService = (function () {
	'use strict';

	var users = [];

	return {
		save: function (user) {
			if (user.id) {
				var index = users.indexOf(this.find(user.id));
				users.splice(index, 1, user);
			} else {
				user.id = Date.now().toString();
				users.push(user);
			}
		},

		list: function () {
			return users;
		},

		find: function (id) {
			return users.find(function (user) {
				return id === user.id;
			});
		}
	};
})();
