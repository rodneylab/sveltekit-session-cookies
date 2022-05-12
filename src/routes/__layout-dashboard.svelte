<script context="module">
	export function load({ session }) {
		if (!session.user) {
			return {
				redirect: '/',
				status: 302
			};
		}
		return {};
	}
</script>

<script>
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<main class="container"><slot /></main>

<style>
	.container {
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
	}
</style>
