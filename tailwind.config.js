/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'theme-text': 'var(--theme-color-text)',
				'theme-background': 'var(--theme-color-background)',
				'theme-primary': 'var(--theme-color-primary)',
				'theme-secondary': 'var(--theme-color-secondary)'
			}
		},
		screens: {
			sm: '440px',
			md: '808px'
		}
	},

	plugins: []
};
