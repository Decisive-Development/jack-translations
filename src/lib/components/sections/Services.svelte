<script>
	import ServiceCard from '$lib/components/ui/ServiceCard.svelte';

	const services = [
		{
			title: 'Creative Content Translation',
			description:
				'Transform books, articles, and creative works into fluent, captivating English that resonates with readers.'
		},
		{
			title: 'Business and Marketing Translation',
			description:
				"Deliver your brand's message effectively to English-speaking clients with expertly translated websites, brochures, and marketing materials."
		},
		{
			title: 'Academic and Research Translation',
			description:
				'Precise translation of academic papers, theses, and research materials for international dissemination.'
		},
		{
			title: 'Technical and Professional Translation',
			description:
				'Translate manuals, reports, and professional documents with accuracy and clarity.'
		},
		{
			title: 'General Document Translation',
			description: 'Letters and general texts handled with precision and confidentiality.'
		},
		{
			title: 'Express Service',
			description:
				'Need a quick turnaround? I offer expedited translation services to meet tight deadlines without sacrificing quality.'
		}
	];
</script>

<section id="services" class="bg-theme-gray py-16 md:py-32">
	<div class="container mx-auto px-6 md:px-12 lg:px-16">
		<h2 class="text-center text-3xl font-bold md:text-4xl">
			What I Offer
		</h2>
		<p class="text-th mt-4 text-center text-lg">
			As a professional German-to-English translator, I provide specialised services designed to
			meet your unique needs:
		</p>
		<div class="mx-auto my-8 h-1 w-24 bg-theme-accent"></div>
		<div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each services as service}
				<ServiceCard title={service.title} description={service.description}/>
			{/each}
		</div>
		<p class="mt-12 text-center text-lg">
			Each translation is tailored to reflect your goals while maintaining accuracy.
		</p>
	</div>
</section>
