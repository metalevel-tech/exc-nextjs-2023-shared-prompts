/** @type {import('tailwindcss').Config} */

const mltColors = {
	"mlt-gray-0": "#646464",
	"mlt-gray-1": "#787878",
	"mlt-gray-2": "#a0a0a0",
	"mlt-gray-3": "#b4b4b4",
	"mlt-gray-4": "#c8c8c8",
	"mlt-gray-5": "#d4d4d4",
	"mlt-gray-6": "#f0f0f0",
	"mlt-dark-0": "#080808",
	"mlt-dark-1": "#111",
	"mlt-dark-2": "#242424",
	"mlt-dark-3": "#333",
	"mlt-dark-4": "#3c3c3c",
	"mlt-dark-5": "#444",
	"mlt-dark-6": "#555",
	"mlt-blue-primary": "#548ada",
	"mlt-blue-secondary": "#5d9fff",
	"mlt-purple-primary": "#9468d8",
	"mlt-purple-secondary": "#b07bff",
	"mlt-yellow-primary": "#facc15",
	"mlt-yellow-secondary": "rgb(254 240 138)",
	"mlt-yellow-tertiary": "rgb(254 249 195)",
};

module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				satoshi: ["Satoshi", "sans-serif"],
				inter: ["Inter", "sans-serif"],
				Unicephalon: ["Unicephalon", "sans-serif"],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				"primary-orange": "#FF5722",
				"primary-orange-dark": "#d4491d",
				"secondary-orange": "#ef720e",
				...mltColors,
			},
			backgroundColor: {
				...mltColors,
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
