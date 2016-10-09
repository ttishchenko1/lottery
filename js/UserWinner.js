window.UserWinner = (function () {
	'use strict';

	var winnerButton = document.querySelector('[name="winnerButton"]');
	var winnerInfo = document.querySelector('[name="winner"]');

	winnerButton.addEventListener('click', function (event) {
		var users = UserService.list(), winner;

		if (users.length === 0) {
			alert('No user. Fill registration form.');
			return;
		};

		winner = users[Math.round(Math.random() * (users.length - 1))];
		winnerInfo.innerText = `${winner.name} ${winner.surname}`;
	});
})();
