<script>
	import Button from '$lib/components/ui/Button.svelte';
    import { language } from '$lib/stores/language';
    import { translations } from '$lib/i18n/translations';
</script>

<section class="bg-theme-light -mt-20 flex h-full pt-64 pb-16 md:pb-32 md:min-h-screen items-center">
	<div class="container mx-auto px-6 text-center md:px-12 lg:px-16">
		<h1 class="text-3xl sm:text-4xl font-bold leading-tight md:text-6xl">
			{translations[$language].hero.welcome} <span class="text-theme-secondary">{translations[$language].hero.name}</span>
		</h1>
		<div class="bg-theme-accent mx-auto my-8 h-1 w-24"></div>
		<p class="mt-6 text-lg leading-relaxed md:text-xl">
			{translations[$language].hero.tagline}
		</p>
		<p class="m-auto mb-16 mt-6 w-full max-w-[800px] text-base">
			{translations[$language].hero.description}
		</p>
		<p class="mt-4 text-base md:text-lg">
            {translations[$language].hero.callToAction}
        </p>
		<div class="mt-8">
			<Button 
                href="#contact" 
                text={translations[$language].hero.buttonText}
            />
		</div>
	</div>
</section>
