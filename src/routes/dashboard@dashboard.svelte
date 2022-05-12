<script context="module">
	export async function load({ fetch }) {
		try {
			const response = await fetch('/api/data.json', {
				method: 'GET',
				credentials: 'same-origin'
			});
			return {
				props: { data: { ...(await response.json()) } }
			};
		} catch (error) {
			console.error(`Error in route /dashboard: ${error}`);
		}
	}
</script>

<script>
	import { session } from '$app/stores';
	export let data;
</script>

<h1>Dashboard</h1>
<p class="user">
	You are logged in as <strong>{$session.user}</strong>.
</p>
<dl>
	<dt>Sales</dt>
	<dd>{data.sales}</dd>
	<dt>New Customers</dt>
	<dd>{data.newCustomers}</dd>
</dl>

<style>
	.user {
		font-size: 1.25rem;
	}
	dl {
		display: flex;
	}

	dt {
		flex-basis: 15%;
		padding: 0.5rem 0.25rem;
	}

	dd {
		flex-basis: 80%;
		flex-grow: 1;
		padding: 0.5rem 0.25rem;
	}
</style>
