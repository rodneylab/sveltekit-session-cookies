export function post(request) {
	const { email, password } = request.body;

	function login() {
		// add logic to authenticate user with external service here
		console.log('login.json.js', { email, password: !!password });
		const userLogin = 'svelte-user';

		return userLogin;
	}

	const user = login();
	request.locals.user = user;

	return {
		status: 200
	};
}
