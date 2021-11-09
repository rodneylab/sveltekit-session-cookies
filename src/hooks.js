import cookie from 'cookie';
const COOKIE_NAME = process.env['USER_COOKIE_NAME'];

export async function getSession(request) {
	if (request.locals.user) {
		return { user: request.locals.user };
	}
	return {};
}

export async function handle({ request, resolve }) {
	const loggingOut = request.path === '/api/logout.json';

	const cookies = cookie.parse(request.headers.cookie || '');

	// before endpoint call
	request.locals.user = cookies[COOKIE_NAME];

	// endpoint call
	const response = await resolve(request);

	// after endpoint call
	const user = loggingOut ? '' : request.locals.user;

	const secure = process.env.NODE_ENV === 'production';
	const maxAge = 7_200; // (3600 seconds / hour) * 2 hours
	const sameSite = 'Strict';
	const setCookieValue = `${COOKIE_NAME}=${user || ''}; Max-Age=${maxAge}; Path=/; ${
		secure ? 'Secure;' : ''
	} HttpOnly; SameSite=${sameSite}`;

	return {
		...response,
		headers: {
			...response.headers,
			...(user || loggingOut ? { 'Set-Cookie': setCookieValue } : {})
		}
	};
}
