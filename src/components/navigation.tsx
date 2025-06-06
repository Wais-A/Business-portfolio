"use client";

import { motion } from "framer-motion";
import { useCallback, useState } from "react";

const menuItems = [
	{ name: "Home", href: "#home" },
	{ name: "Experience", href: "#experience" },
	{ name: "Projects", href: "#portfolio" },
	{ name: "Contact", href: "#contact" },
];

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	// Optional offset for fixed header
	const headerOffset = 80;
	const scrollToSection = useCallback((href: string) => {
		// If linking to top of page:
		if (href === "#home") {
			window.scrollTo({ top: 0, behavior: "smooth" });
			return;
		}

		const element = document.querySelector(href);
		if (element) {
			const elemTop = element.getBoundingClientRect().top + window.pageYOffset;
			const offsetPosition = elemTop - headerOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	}, []);

	const handleClick = (href: string) => {
		setIsOpen(false);
		scrollToSection(href);
	};

	return (
		<motion.header
			className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100"
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<nav className="container mx-auto px-4 py-4 flex items-center">
				{/* Logo (left) */}
				<motion.button
					onClick={() => handleClick("#home")}
					className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					Sarah
				</motion.button>

				{/* Spacer in the middle */}
				<div className="flex-1" />

				{/* Desktop Nav (right-aligned) */}
				<div className="hidden md:flex justify-end items-center gap-4 text-sm whitespace-nowrap">
					{menuItems.map((item, i) => (
						<motion.button
							key={item.name}
							onClick={() => handleClick(item.href)}
							className="text-gray-600 hover:text-purple-500 transition-colors font-medium"
							whileHover={{ y: -2 }}
							whileTap={{ y: 0 }}
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.8 }}
							transition={{
								duration: 0.5,
								delay: i * 0.1,
								type: "spring",
								bounce: 0.4,
							}}
						>
							{item.name}
						</motion.button>
					))}
				</div>

				{/* Mobile: Hamburger + Dropdown */}
				<div className="relative md:hidden ml-4">
					<motion.button
						type="button"
						className="p-2"
						onClick={() => setIsOpen(!isOpen)}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<div className="w-6 h-5 flex flex-col justify-between">
							<motion.span
								className="w-full h-0.5 bg-gray-800"
								animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
								transition={{ duration: 0.2 }}
							/>
							<motion.span
								className="w-full h-0.5 bg-gray-800"
								animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
								transition={{ duration: 0.2 }}
							/>
							<motion.span
								className="w-full h-0.5 bg-gray-800"
								animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
								transition={{ duration: 0.2 }}
							/>
						</div>
					</motion.button>

					{/* Small dropdown anchored to the hamburger (top-right) */}
					{isOpen && (
						<motion.div
							className="absolute top-full right-0 mt-2 bg-white/90 backdrop-blur-sm shadow-md rounded-md z-50 w-auto"
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.2 }}
						>
							<div className="flex flex-col py-2">
								{menuItems.map((item) => (
									<motion.button
										key={item.name}
										onClick={() => handleClick(item.href)}
										className="px-4 py-2 text-right text-gray-600 hover:text-purple-500 transition-colors font-medium whitespace-nowrap"
										whileHover={{ x: 5 }}
										transition={{ duration: 0.2 }}
									>
										{item.name}
									</motion.button>
								))}
							</div>
						</motion.div>
					)}
				</div>
			</nav>
		</motion.header>
	);
}
