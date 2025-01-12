import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
		theme: {
			extend: {
				colors: {
					theme: {
						primary: '#27323a',
						secondary: '#506777',
						dark: '#12181b',
						light: '#f5f5f5',
						gray: '#e6e6e6',
						blue: {
							light: '#7CC6FE',
							dark: '#399E5A',
						},
						// accent: '#33A1FD',
						// accent: '#17BEBB',
						accent: '#B80C09',
						// accent: '#ff6f61',

					}
				},
				container: {
					center: true,
					maxWdth: '100%',
					width: '1280px',
					screens: {
						sm: '640px',
						md: '768px',
						lg: '1024px',
						xl: '1280px',
					},
					padding: {
						DEFAULT: '10px',
						sm: '15px',
						lg: '20px',
					}
				}
			}
		},
	plugins: [typography]
};

