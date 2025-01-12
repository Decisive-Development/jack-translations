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

		const loadGTM = () => {
			if (!window.dataLayer) {
				window.dataLayer = [];
			}
			const gtag = function() {
				window.dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', 'G-3NPEM8KRCL', {
				'transport_url': 'https://www.googletagmanager.com',
				'transport_type': 'beacon'
			});

			const script = document.createElement('script');
			script.async = true;
			script.defer = true;
			script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3NPEM8KRCL';
			document.head.appendChild(script);
		};

		if (document.readyState === 'complete') {
			loadGTM();
		} else {
			window.addEventListener('load', loadGTM);
		}
	});
</script>

<div class="flex min-h-screen flex-col">
	<Nav />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>
