import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ["class", '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				background: "rgb(var(--background) / <alpha-value>)",
				foreground: "rgb(var(--foreground) / <alpha-value>)",
				accent: {
					DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
					foreground: "rgb(var(--color-accent-foreground) / <alpha-value>)",
				},
				primary: {
					DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
					foreground: "rgb(var(--color-primary-foreground) / <alpha-value>)",
				},
				secondary: {
					DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
					foreground: "rgb(var(--color-secondary-foreground) / <alpha-value>)",
				},
			},
			fontFamily: {
				sans: ["var(--font-sans)", "system-ui", "sans-serif"],
				serif: ["var(--font-serif)", "Georgia", "serif"],
			},
		},
	},
	plugins: [],
} satisfies Config;
