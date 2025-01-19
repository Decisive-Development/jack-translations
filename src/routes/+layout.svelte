<script>
	import '../app.css';
	import Nav from '$lib/components/nav/Nav.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import { language } from '$lib/stores/language';
	import { onMount } from 'svelte';	
    import LanguageSwitcher from '$lib/components/ui/LanguageSwitcher.svelte';

	onMount(() => {
		const hostname = window.location.hostname;
		if (hostname.includes('chamberlainuebersetzung.com')) {
			language.set('de');
		} else if (hostname.includes('chamberlaintranslation.com')) {
			language.set('en');
		}
	});
</script>

<div class="flex min-h-screen flex-col">
	<Nav />
	<LanguageSwitcher />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>
