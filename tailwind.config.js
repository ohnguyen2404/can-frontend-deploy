/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src//components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				lightPink: "#FFF0EF",
				lightBlue: "#ECF6F6",
				strongBlue: "#3E9598",
				strongPink: "#CE3832",
				silver: "#B9B7B7",
			},
			spacing: {
				high: "6.25rem",
				medium: "4.875rem",
			},
		},
	},
	plugins: [],
};
