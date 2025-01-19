<script>
	import { language } from '$lib/stores/language';
	import { translations } from '$lib/i18n/translations';
</script>

<footer class="bg-theme-primary text-theme-light">
	<div class="container flex flex-col items-center justify-between p-4">
		<div class="flex gap-4">
			<a href="/policy" class="hover:underline">
                {translations[$language].footer.terms}
            </a>
		</div>
	</div>
</footer>
<section>
	<div class="bg-theme-dark">
		<div class="container">
			<p class="py-2 text-center text-base text-white">
				Website by: <a
					aria-label="Visit the website developer"
					href="https://www.decisive-development.com"
					class="font-semibold"
					target="_blank">Decisive Development Ltd</a
				>
			</p>
		</div>
	</div>
</section>
