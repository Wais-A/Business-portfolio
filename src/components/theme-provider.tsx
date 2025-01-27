"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

type ThemeProviderProps = {
	children: React.ReactNode;
	attribute?: string;
	defaultTheme?: Theme;
	enableSystem?: boolean;
	disableTransitionOnChange?: boolean;
};

type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
	undefined,
);

export function ThemeProvider({
	children,
	attribute = "data-theme",
	defaultTheme = "system",
	enableSystem = true,
	disableTransitionOnChange = false,
}: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove("light", "dark");

		if (theme === "system" && enableSystem) {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
				.matches
				? "dark"
				: "light";

			root.setAttribute(attribute, systemTheme);
			return;
		}

		root.setAttribute(attribute, theme);
	}, [theme, attribute, enableSystem]);

	useEffect(() => {
		if (!enableSystem) return;

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const handleChange = () => {
			if (theme === "system") {
				const systemTheme = mediaQuery.matches ? "dark" : "light";
				document.documentElement.setAttribute(attribute, systemTheme);
			}
		};

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [theme, attribute, enableSystem]);

	return (
		<ThemeProviderContext.Provider value={{ theme, setTheme }}>
			<div
				className={
					disableTransitionOnChange ? "transition-none" : "transition-colors"
				}
			>
				{children}
			</div>
		</ThemeProviderContext.Provider>
	);
}

export const useTheme = () => {
	const context = useContext(ThemeProviderContext);

	if (context === undefined)
		throw new Error("useTheme must be used within a ThemeProvider");

	return context;
};
