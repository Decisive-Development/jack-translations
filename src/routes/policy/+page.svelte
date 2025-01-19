<script>
    import { language } from '$lib/stores/language';
    import { translations } from '$lib/i18n/translations';
</script>

<div class="container mx-auto px-4 py-8 max-w-4xl">
    <div class="bg-white rounded-lg shadow-lg p-8">
        <h1 class="text-3xl font-bold mb-8">
            {translations[$language].terms.title}
        </h1>

        <p class=" mb-8">
            {translations[$language].terms.welcome}
        </p>

        <div class="space-y-8">
            <!-- Services Section -->
            <section class="border-b border-gray-200 pb-6">
                <h2 class="text-xl font-semibold mb-4">
                    {translations[$language].terms.services.title}
                </h2>
                <p class="">
                    {translations[$language].terms.services.content}
                </p>
            </section>

            <!-- Confidentiality Section -->
            <section class="border-b border-gray-200 pb-6">
                <h2 class="text-xl font-semibold mb-4">
                    {translations[$language].terms.confidentiality.title}
                </h2>
                <p class="">
                    {translations[$language].terms.confidentiality.content}
                </p>
            </section>

            <!-- Turnaround Section -->
            <section class="border-b border-gray-200 pb-6">
                <h2 class="text-xl font-semibold mb-4">
                    {translations[$language].terms.turnaround.title}
                </h2>
                <p class="">
                    {translations[$language].terms.turnaround.content}
                </p>
            </section>

            <!-- Revisions Section -->
            <section class="border-b border-gray-200 pb-6">
                <h2 class="text-xl font-semibold mb-4">
                    {translations[$language].terms.revisions.title}
                </h2>
                <p class="">
                    {translations[$language].terms.revisions.content}
                </p>
            </section>

            <!-- Pricing Section -->
            <section class="border-b border-gray-200 pb-6">
                <h2 class="text-xl font-semibold mb-4">
                    {translations[$language].terms.pricing.title}
                </h2>
                <div class=" space-y-4">
                    <ul class="list-disc pl-6">
                        {#each translations[$language].terms.pricing.points as point}
                            <li class="text-theme-secondary">{point}</li>
                        {/each}
                    </ul>
                    <p>{translations[$language].terms.pricing.content}</p>
                </div>
            </section>

            <!-- Cancellation Section -->
            <section class="border-b border-gray-200 pb-6">
                <h2 class="text-xl font-semibold mb-4">
                    {translations[$language].terms.cancellation.title}
                </h2>
                <p class="">
                    {translations[$language].terms.cancellation.content}
                </p>
            </section>

            <!-- Liability Section -->
            <section class="border-b border-gray-200 pb-6">
                <h2 class="text-xl font-semibold mb-4">
                    {translations[$language].terms.liability.title}
                </h2>
                <p class="">
                    {translations[$language].terms.liability.content}
                </p>
            </section>

            <!-- AI Usage Section -->
            <section class="border-b border-gray-200 pb-6">
                <h2 class="text-xl font-semibold mb-4">
                    {translations[$language].terms.ai.title}
                </h2>
                <p class="">
                    {translations[$language].terms.ai.content}
                </p>
            </section>

            <!-- Intellectual Property Section -->
            <section class="border-b border-gray-200 pb-6">
                <h2 class="text-xl font-semibold mb-4">
                    {translations[$language].terms.intellectual.title}
                </h2>
                <p class="">
                    {translations[$language].terms.intellectual.content}
                </p>
            </section>

            <!-- Governing Law Section -->
            <section class="border-b border-gray-200 pb-6">
                <h2 class="text-xl font-semibold mb-4">
                    {translations[$language].terms.law.title}
                </h2>
                <p class="">
                    {translations[$language].terms.law.content}
                </p>
            </section>

            <!-- Terms Changes Section -->
            <section class="border-b border-gray-200 pb-6">
                <h2 class="text-xl font-semibold mb-4">
                    {translations[$language].terms.changes.title}
                </h2>
                <p class="">
                    {translations[$language].terms.changes.content}
                </p>
            </section>

            <!-- Contact Section -->
            <section class="mt-12 bg-gray-50 p-6 rounded-lg">
                <h2 class="text-lg font-semibold mb-4">
                    {translations[$language].terms.contact.title}
                </h2>
                <p class="">
                    {translations[$language].terms.contact.content}
                </p>
                <a 
                    href="mailto:info@jackchamberlaintranslation.com" 
                    class="text-theme-accent"
                >
                    info@jackchamberlaintranslation.com
                </a>
            </section>
        </div>
    </div>
</div>
