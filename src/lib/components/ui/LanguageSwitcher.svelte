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

<div class="flex space-x-2">
	{#each languages as { code, label }}
		<button
			class="rounded-md border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-100 {$language ===
			code
				? 'bg-gray-800 text-white hover:bg-gray-700'
				: 'bg-white text-gray-800'}"
			on:click={() => switchLanguage(code)}
		>
			{label}
		</button>
	{/each}
</div>
