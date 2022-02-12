export async function get({ locals }) {
	locals.user = null;

	return {
		status: 302,
		headers: {
			Location: '/'
		}
	};
}
