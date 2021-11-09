<script context="module">
	export async function load({ session }) {
		if (session.user) {
			return {
				redirect: '/dashboard',
				status: 302
			};
		}
		return {};
	}
</script>

<script>
	import '@fontsource/source-sans-pro';
</script>

<main class="container"><slot /></main>

<style>
	:global(html) {
		font-family: 'Source Sans Pro';
		background-color: #49a078;
		color: #1f2421;
		accent-color: #291720;
	}
	:global(body) {
		margin: 0;
	}
	:global(h1) {
		font-size: 1.953rem;
	}
	:global(input),
	:global(textarea) {
		border: solid 0.125rem #9cc5a1;
		background: #dce1de;
		border-radius: 0.25rem;
		line-height: 1.75;
		padding: 0 0.5rem;
		font-size: 1.25rem;
	}
	.container {
		display: flex;
		flex-direction: column;
	}
</style>
