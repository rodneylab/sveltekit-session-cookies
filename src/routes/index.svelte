<script>
	import { browser } from '$app/env';
	import { PasswordInputField, EmailInputField } from '@rodneylab/sveltekit-components';

	$: isSubmitting = false;
	let email = '';
	let password = '';
	let errors = { password: null, email: null };

	async function handleSubmit() {
		try {
			await fetch('/api/login.json', {
				method: 'POST',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, password })
			});
			if (browser) {
				window.location.replace('/login');
			}
		} catch (error) {
			console.error(`Error in handleSubmit on / route: ${error}`);
		}
	}
</script>

<svelte:head>
	<title>SvelteKit Session Cookies</title>
	<html lang="en-GB" />
	<meta name="description" content="Register for narcissus dashboard to get going." />
</svelte:head>

<div class="content">
	<h1>SvelteKit Session Cookie: Home</h1>
	<form on:submit|preventDefault={handleSubmit}>
		<h2>Login</h2>
		<EmailInputField
			value={email}
			id="email"
			placeholder="blake@example.com"
			title="Email"
			error={errors?.email ?? null}
			on:update={(event) => {
				email = event.detail;
			}}
			style="padding-bottom:1rem"
		/>
		<PasswordInputField
			value={password}
			id="password"
			placeholder="p@$Sw0rd"
			title="Password"
			error={errors?.password ?? null}
			on:update={(event) => {
				password = event.detail;
			}}
			style="padding-bottom:1rem"
		/>
		<div class="button-container">
			<button type="submit" disabled={isSubmitting}>Login</button>
		</div>
	</form>
</div>

<style>
	form {
		margin-top: 1.5rem;
	}
	.button-container {
		display: flex;
		width: 100%;
	}
	button {
		cursor: pointer;
		color: #9cc5a1;
		background-color: #291720;
		border: solid 0.125rem #9cc5a1;
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
	@media (prefers-reduced-motion: reduce) {
		button {
			transition: background-color 2000ms, color 2000ms;
		}
	}
	button:hover {
		background-color: #9cc5a1;
		border-color: #291720;
		color: #291720;
	}

	.content {
		width: 60%;
		margin: 3rem auto;
	}
</style>
