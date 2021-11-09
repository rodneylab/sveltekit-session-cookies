<script>
	import { goto, prefetch } from '$app/navigation';
	import { session } from '$app/stores';

	$: user = $session.user;

	async function handleLogout() {
		session.set({ user: null });
		await prefetch('/logout');
		await goto('/logout');
	}
</script>

<header class="container">
	<div class="logo"><a aria-label="Go to narcissus home" href="/">SvelteKit Session Cookie</a></div>
	<div class="menu">
		<a aria-label="Jump to dashboard" href="/dashboard/">dashboard</a>
		<span class="user">{user}</span>
		<button type="button" on:click={handleLogout}>Logout</button>
	</div>
</header>

<style>
	.container {
		display: flex;
		padding: 1.5rem;
		align-items: center;
		background-color: #291720;
		color: #dce1de;
		font-size: 1.25rem;
	}
	.container a {
		color: #dce1de;
	}

	.logo {
		margin-right: auto;
	}

	.menu {
		display: flex;
		align-items: baseline;
	}
	.menu button {
		margin-top: 0;
	}
	.user {
		margin-left: 1rem;
		font-weight: 600;
	}
	button {
		cursor: pointer;
		color: #9cc5a1;
		background-color: #291720;
		border-style: none;
		border-radius: 1.5rem;
		font-size: 1.563rem;
		padding: 0.5rem 1.5rem;
		margin-top: 1.5rem;
		margin-left: auto;
	}
	@media (prefers-reduced-motion: no-preference) {
		button {
			transition: background-color 250ms, color 250ms;
		}
	}
	@media (prefers-reduced-motion: no-preference) {
		button {
			transition: background-color 2000ms, color 2000ms;
		}
	}
	button:hover {
		background-color: #9cc5a1;
		color: #dce1de;
	}
</style>
