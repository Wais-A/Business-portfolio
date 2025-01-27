"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const menuItems = [
	{ name: "Home", href: "#home" },
	{ name: "Experience", href: "#experience" },
	{ name: "Projects", href: "#portfolio" },
	{ name: "Contact", href: "#contact" },
];

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = (href: string) => {
		setIsOpen(false);

		if (href === "#home") {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
			return;
		}

		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<motion.header
			className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-lg border-b border-gray-100"
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<nav className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<motion.button
						onClick={() => handleClick("#home")}
						className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Sarah
					</motion.button>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{menuItems.map((item) => (
							<motion.button
								key={item.name}
								onClick={() => handleClick(item.href)}
								className="text-gray-600 hover:text-purple-500 transition-colors font-medium bg-transparent hover:bg-transparent"
								whileHover={{ y: -2 }}
								whileTap={{ y: 0 }}
							>
								{item.name}
							</motion.button>
						))}
					</div>

					{/* Mobile Menu Button */}
					<motion.button
						type="button"
						className="md:hidden p-2"
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
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							className="md:hidden"
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.2 }}
						>
							<div className="py-4 space-y-4">
								{menuItems.map((item) => (
									<motion.button
										key={item.name}
										onClick={() => handleClick(item.href)}
										className="block w-full text-left text-gray-600 hover:text-purple-500 transition-colors font-medium bg-transparent hover:bg-transparent"
										whileHover={{ x: 10 }}
										transition={{ duration: 0.2 }}
									>
										{item.name}
									</motion.button>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</motion.header>
	);
}
