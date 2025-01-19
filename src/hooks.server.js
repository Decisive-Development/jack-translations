import { translations } from '$lib/i18n/translations';

export const handle = async ({ event, resolve }) => {
    const hostname = event.url.hostname;
    const isGerman = hostname.includes('chamberlainuebersetzung.com');
    const lang = isGerman ? 'de' : 'en';
    const currentTranslations = translations[lang];

    return await resolve(event, {
        transformPageChunk: ({ html }) => {
            return html
                .replace('%lang%', lang)
                .replace('%meta.title%', currentTranslations.metadata.title)
                .replace('%meta.description%', currentTranslations.metadata.description)
                .replace('%meta.ogTitle%', currentTranslations.metadata.ogTitle)
                .replace('%meta.ogDescription%', currentTranslations.metadata.ogDescription);
        }
    });
};
