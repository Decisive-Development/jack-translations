export const handle = async ({ event, resolve }) => {
    const hostname = event.url.hostname;
    const lang = hostname.includes('chamberlainuebersetzung.com') ? 'de' : 'en';
    
    return await resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%lang%', lang)
    });
};
