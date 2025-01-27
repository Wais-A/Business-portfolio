"use client";

import { useTheme } from "@/components/theme-provider";
import { motion } from "framer-motion";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<motion.button
			onClick={toggleTheme}
			className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
		>
			<motion.div
				initial={false}
				animate={{
					scale: theme === "dark" ? 0 : 1,
					opacity: theme === "dark" ? 0 : 1,
					rotate: theme === "dark" ? 90 : 0,
				}}
				transition={{ duration: 0.2 }}
				className="absolute"
			>
				{/* Sun icon */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5 text-yellow-500"
					viewBox="0 0 20 20"
					fill="currentColor"
					role="img"
				>
					<title>Sun icon for light mode</title>
					<desc>A sun icon representing light mode theme</desc>
					<path
						fillRule="evenodd"
						d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
						clipRule="evenodd"
					/>
				</svg>
			</motion.div>

			<motion.div
				initial={false}
				animate={{
					scale: theme === "dark" ? 1 : 0,
					opacity: theme === "dark" ? 1 : 0,
					rotate: theme === "dark" ? 0 : -90,
				}}
				transition={{ duration: 0.2 }}
				className="absolute"
			>
				{/* Moon icon */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5 text-blue-500"
					viewBox="0 0 20 20"
					fill="currentColor"
					role="img"
				>
					<title>Moon icon for dark mode</title>
					<desc>A moon icon representing dark mode theme</desc>
					<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
				</svg>
			</motion.div>
		</motion.button>
	);
}
