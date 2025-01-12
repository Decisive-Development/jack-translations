<script>
	import NavLink from './NavLink.svelte';		
    import LanguageSwitcher from '$lib/components/ui/LanguageSwitcher.svelte';
	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '#services', label: 'Services' },
		{ href: '#about', label: 'About' },
		{ href: '#contact', label: 'Contact' }
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
						class="sm:h-[50px] sm:w-[388px] h-[38px] w-[280px]"
					/>
				</picture>
			</a>			
			<div class="flex items-center space-x-6">
				{#each navItems as { href, label }}
					<NavLink {href} {label} />
				{/each}
			</div>
		</nav>
	</div>
	<LanguageSwitcher />
</section>	
