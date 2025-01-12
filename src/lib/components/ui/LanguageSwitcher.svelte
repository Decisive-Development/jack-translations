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

<div class="flex space-x-2 w-fit absolute top-24 left-3 z-50 mx-auto">
	{#each languages as { code, label }}
		<button
			class="rounded-md border border-theme-dark px-4 py-2 transition-colors  {$language ===
			code
				? 'bg-theme-primary text-theme-light hover:bg-theme-dark'
				: 'bg-thetext-theme-light hover:bg-theme-gray'}"
			on:click={() => switchLanguage(code)}
		>
			{label}
		</button>
	{/each}
</div>
