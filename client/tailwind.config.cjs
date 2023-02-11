/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				"3xl": "0px 9px 16px 0px rgba(0,0,0,0.5)",
			},
		},
	},
	plugins: [],
};
