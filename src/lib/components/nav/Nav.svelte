<script>
	import NavLink from './NavLink.svelte';
	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '#services', label: 'Services' },
		{ href: '#about', label: 'About' },
		{ href: '#contact', label: 'Contact' }
	];
</script>

<section class="bg-theme-primary w-full sticky top-0 z-50">
	<nav class="container flex items-center justify-between p-4">
		<a 
			href="/" 
			class="text-xl font-bold"
		>
		<img 
			src="/images/logo-white.webp" 
			alt="Logo" 
			height="50"
			width="388"
			class="h-[50px] w-[388px]"
		/>
		</a>
	
		<div class="flex items-center space-x-6">
			{#each navItems as { href, label }}
				<NavLink {href} {label} />
			{/each}
		</div>
	</nav>
</section>
