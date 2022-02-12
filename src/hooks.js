import cookie from 'cookie';
const COOKIE_NAME = process.env['USER_COOKIE_NAME'];

export async function getSession({ locals }) {
	const user = locals?.user;
	if (user) {
		return { user };
	}
	return {};
}

export async function handle({ event, resolve }) {
	const { locals, request, url } = event;
	const { headers } = request;
	const { pathname } = url;
	const loggingOut = pathname === '/api/logout.json';

	const cookies = cookie.parse(headers.get('cookie') || '');

	// before endpoint call
	locals.user = cookies[COOKIE_NAME];

	// endpoint call
	const response = await resolve(event);

	// after endpoint call
	const user = loggingOut ? '' : locals.user;

	const secure = process.env.NODE_ENV === 'production';
	const maxAge = 7_200; // (3600 seconds / hour) * 2 hours
	const sameSite = 'Strict';
	const cookieHeader = `${COOKIE_NAME}=${user || ''}; Max-Age=${maxAge}; Path=/; ${
		secure ? 'Secure;' : ''
	} HttpOnly; SameSite=${sameSite}`;

	if (user || loggingOut) {
		response.headers.set('Set-Cookie', cookieHeader);
	}

	return response;
}
