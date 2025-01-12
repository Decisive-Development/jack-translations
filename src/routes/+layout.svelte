<script>
	import '../app.css';
	import Nav from '$lib/components/nav/Nav.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import { language } from '$lib/stores/language';
	import { onMount } from 'svelte';

	onMount(() => {
		const hostname = window.location.hostname;
		if (hostname.includes('chamberlainuebersetzung.com')) {
			language.set('de');
		} else if (hostname.includes('chamberlaintranslation.com')) {
			language.set('en');
		}

		if (!window.dataLayer) {
			window.dataLayer = [];
		}
		function gtag() {
			window.dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-3NPEM8KRCL');

		const script = document.createElement('script');
		script.async = true;
		script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3NPEM8KRCL';
		document.head.appendChild(script);
	});
</script>

<div class="flex min-h-screen flex-col">
	<Nav />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>
