<script>
	export let title;
	export let description;
</script>

<li class="flex items-start">
	<svg
		class="mr-3 h-6 w-6 flex-shrink-0 text-blue-500"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
	</svg>
	<p class="text-gray-700">
		<span class="font-semibold">{title}:</span>
		{description}
	</p>
</li>
