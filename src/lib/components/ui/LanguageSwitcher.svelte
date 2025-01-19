<script>
	import { language } from '$lib/stores/language';

	const languages = [
		{ code: 'en', label: 'English' },
		{ code: 'de', label: 'Deutsch' }
	];

	function switchLanguage(langCode) {
		language.set(langCode);
		document.documentElement.lang = langCode;
	}
</script>

<div class="flex space-x-2 w-fit absolute md:sticky top-32 left-0 right-0 md:mx-0 mx-auto md:left-3 z-40 ">
	{#each languages as { code, label }}
		<button
			class="rounded-md px-4 py-2 transition-colors ease-in-out duration-300 {$language ===
			code
				? 'bg-theme-dark text-theme-light hover:bg-theme-accent'
				: 'bg-thetext-theme-light hover:bg-theme-gray border border-theme-dark'}"
			on:click={() => switchLanguage(code)}
		>
			{label}
		</button>
	{/each}
</div>
