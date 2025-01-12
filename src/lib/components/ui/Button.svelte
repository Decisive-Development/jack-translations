<script>
	export let href = '';
	export let text = '';
</script>

<a
	{href}
	class="bg-theme-accent inline-block rounded-lg px-6 py-3 text-lg font-medium text-theme-light shadow-md transition-all ease-in-out duration-300 hover:bg-theme-dark"
>
	{text}
</a>
