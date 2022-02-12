export function get({ locals }) {
	const data = locals.user ? { sales: 100, newCustomers: 54 } : {};

	return {
		body: JSON.stringify(data),
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	};
}
