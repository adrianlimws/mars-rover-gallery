/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('daisyui'),
		[
			'fslightbox-svelte',
			{
				// Your fslightbox-svelte options go here
				// For example:
				loop: true,
				autoplay: true
			}
		]
	]
};
