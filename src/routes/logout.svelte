<script context="module">
	export const load = async () => {
		try {
			await fetch('/api/logout.json', {
				method: 'GET',
				credentials: 'same-origin'
			});

			return {
				status: 301,
				redirect: '/'
			};
		} catch (error) {
			console.error(`Error in route /logout: ${error}`);
		}
	};
</script>
