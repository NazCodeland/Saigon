/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				restaurant: ['Open Sans', 'Lato', 'Roboto', 'sans-serif']
			},
			colors: {
				'theme-text': 'var(--theme-color-text)',
				'theme-background': 'var(--theme-color-background)',
				'theme-primary': 'var(--theme-color-primary)',
				'theme-secondary': 'var(--theme-color-secondary)'
			}
		},
		screens: {
			sm: '440px',
			md: '808px',
			phone: '640px',
			tablet: '1024px'
		},
		boxShadow: {
			glow: '0 0 10px var(--theme-color-primary), 0 0 5px var(--theme-color-primary)'
		}
	},

	plugins: []
};
