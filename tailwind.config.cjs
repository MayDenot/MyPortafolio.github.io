/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"]
			},
			boxShadow: {
				"3xl": "0 0 15px #121212",
				"4xl": "rgba(255, 255, 255, 0.1) 0px 30px 90px",
				"5xl": "rgba(0, 0, 0, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
				"cards": "0px 17px 15px rgba(18, 18, 18, .6)",
			},
			gridTemplateColumns: {
				"2": "repeat(2, 300px)",
				"4": "repeat(4, 50px)",
				"md": "repeat(2, 349px)",
				"p2": "repeat(2, 230px)",
				"pxl": "repeat(2, 350px)",
				"lg": "repeat(2, 350px)",
				"xl": "repeat(2, 450px)",
			},
			backgroundColor: {
				"cards": "rgba(255, 255, 255, 0.2)",
				"card-info": "rgba(0, 0, 0, 0.8)",
				"full-img": "rgba(0, 0, 0, 0.6)",
			},
			backgroundImage: {
				"bg-gradient-body": "radial-gradient(circle, rgba(75, 75, 78, 1) 8%, rgba(50, 50, 52, 1) 48%, rgba(32, 32, 34, 1) 68%)",
				"name": "linear-gradient(90deg, rgba(0, 209, 255, 1) 8%, rgba(17, 176, 211, 1) 28%, rgba(16, 167, 200, 1) 39%, rgba(13, 143, 171, 1) 64%)",
			},
		},
	},
	plugins: [],
}
