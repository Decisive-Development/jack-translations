<script>
	export let title;
	export let description;
</script>

<div
	class="hover:bg-theme-light md:min-h-[210px] h-full rounded-lg bg-white p-6 shadow transition-all duration-300 hover:shadow-lg"
>
	<h3 class="text-theme-dark text-xl font-semibold">
    {title}
  </h3>
	<p class="mt-2">
    {description}
  </p>
</div>
