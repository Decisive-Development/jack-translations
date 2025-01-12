<script>
    import CheckListItem from '$lib/components/ui/CheckListItem.svelte';
</script>

<section id="about" class="bg-theme-light py-32">
	<div class="container mx-auto px-6 md:px-12 lg:px-16">
		<h2 class="text-center text-3xl font-bold  md:text-4xl">
            About Me
        </h2>
		<div class="mt-6 items-center gap-8 grid grid-cols-3 mb-16">
			<img
				src=""
				alt="Jack Chamberlain"
				class="h-40 w-40 rounded-full object-cover shadow-lg md:h-48 md:w-48 col-span-1"
			/>
			<p class="text-lg leading-relaxed  md:text-xl col-span-2">
				Hello! I’m <span class="font-semibold text-theme-accent">Jack Chamberlain</span>, offering
				professional German-to-English translation services tailored to your needs. As a native
				English-speaking translator with over 10 years of experience living in Austria, I ensure
				your message is conveyed accurately and effectively.
			</p>
		</div>
		<div class="grid items-start gap-12 md:grid-cols-2">
			<!-- Left Column: Why Choose Me -->
			<div class="flex flex-col">
				<h3 class="mb-4 text-2xl font-semibold ">
                    Why Choose Me?
                </h3>
				<ul class="space-y-4">
                    <CheckListItem 
                        title="Native English Expertise"
                        description="I am not just fluent—I am English. Your content will flow naturally and resonate perfectly with English-speaking audiences."
                    />
                    <CheckListItem 
                        title="Attention to Detail"
                        description="I'm committed to preserving the original intent, tone, and style of your content."
                    />
                    <CheckListItem 
                        title="Timely Delivery"
                        description="Meeting deadlines without compromising on quality is my top priority."
                    />
                </ul>
			</div>
			<div class="flex flex-col">
				<h3 class="mb-4 text-2xl font-semibold ">Embracing AI Technology</h3>
				<p class="leading-relaxed ">
					I embrace the use of AI tools to enhance the translation process, enabling faster and more
					consistent results. However, AI often misses subtle nuances and context. Every project is
					meticulously reviewed and refined by me, a native English speaker, to ensure your message
					retains its intended meaning and resonates with your audience.
				</p>
			</div>
		</div>
		<p class="mt-12 text-center text-lg ">
			Let me help you break language barriers and reach a broader audience with impactful,
			high-quality translations.
		</p>
	</div>
</section>
