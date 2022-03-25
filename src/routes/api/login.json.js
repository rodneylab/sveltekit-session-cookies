export async function post({ locals, request }) {
	const { email, password } = await request.json();

	function login() {
		// add logic to authenticate user with external service here
		console.log('login.json.js', { email, password: !!password });
		const userLogin = 'svelte-user';

		return userLogin;
	}

	try {
		const user = login();
		locals.user = user;

		return {
			status: 200
		};
	} catch (error) {
		const message = `Error in endpoint /api/login.json: ${error}`;
		return {
			status: 500,
			body: message
		};
	}
}
