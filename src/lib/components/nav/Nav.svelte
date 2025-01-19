<script>
	import NavLink from './NavLink.svelte';		
	import { translations } from '$lib/i18n/translations';
	import { language } from '$lib/stores/language';
	
	const navItems = [
		{ href: '/', label: translations[$language].nav.home },
		{ href: '#services', label: translations[$language].nav.services },
		{ href: '#about', label: translations[$language].nav.about },
		{ href: '#contact', label: translations[$language].nav.contact }
	];

</script>

<section class="w-full sticky top-0 z-50">
	<div class="bg-theme-primary">
		<nav class="container flex flex-col items-center justify-between p-4">
			<a 
				href="/" 
				class="text-xl font-bold mb-2"
			>
				<picture>
					<source
						media="(min-width: 640px)"
						srcset="/images/logo-white.webp"
						width="388"
						height="50"
					/>
					<source
						media="(max-width: 639px)"
						srcset="/images/logo-white.webp"
						width="330"
						height="43"
					/>
					<img 
						src="/images/logo-white.webp" 
						alt="Logo" 
						width="388"
						height="50"
						class="sm:h-[50px] sm:w-[388px] h-[42px] w-[328px]"
					/>

				</picture>
			</a>			
			<div class="flex items-center underline-offset-4 space-x-6 text-theme-light">
				<a class="hover:underline" href="/">{translations[$language].nav.home}</a>
				<a class="hover:underline" href="#services">{translations[$language].nav.services}</a>
				<a class="hover:underline" href="#about">{translations[$language].nav.about}</a>
				<a class="hover:underline" href="#contact">{translations[$language].nav.contact}</a>
			</div>
		</nav>
	</div>	
</section>	
