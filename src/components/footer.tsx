"use client";

import { motion } from "framer-motion";

export function Footer() {
	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	return (
		<footer className="py-12 animated-gradient text-white">
			<div className="container flex flex-col md:flex-row items-center justify-between gap-4">
				<p className="text-sm">
					© {new Date().getFullYear()} Business Portfolio
				</p>
				<div className="flex gap-4">
					<a href="/privacy" className="hover:underline">
						Privacy
					</a>
					<a href="/terms" className="hover:underline">
						Terms
					</a>
				</div>
				<motion.button
					whileHover={{ rotate: 90 }}
					onClick={scrollTop}
					className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm"
				>
					<svg
						className="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						role="img"
					>
						<title>Back to top</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 15l7-7 7 7"
						/>
					</svg>
				</motion.button>
			</div>
		</footer>
	);
}
