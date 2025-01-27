"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
	{
		title: "Web Development",
		description:
			"Custom web solutions built with modern technologies for scalability and performance",
		icon: (
			<svg
				className="w-6 h-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				role="img"
			>
				<title>Web Development Icon</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
				/>
			</svg>
		),
	},
	{
		title: "Digital Strategy",
		description:
			"Data-driven strategies to optimize your online presence and maximize ROI",
		icon: (
			<svg
				className="w-6 h-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				role="img"
			>
				<title>Digital Strategy Icon</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
				/>
			</svg>
		),
	},
	{
		title: "Brand Consulting",
		description:
			"Comprehensive brand development to establish market leadership",
		icon: (
			<svg
				className="w-6 h-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				role="img"
			>
				<title>Brand Consulting Icon</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
				/>
			</svg>
		),
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.215, 0.61, 0.355, 1],
		},
	},
};

export function Services() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

	return (
		<section
			id="services"
			className="py-24 bg-gray-50 dark:bg-gray-900/50"
			ref={ref}
		>
			<motion.div className="max-w-6xl mx-auto px-4" style={{ opacity }}>
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
						Expert Services
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						Comprehensive solutions to transform your digital presence
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
					variants={containerVariants}
					animate="visible"
				>
					{services.map((service) => (
						<motion.div
							key={service.title}
							variants={itemVariants}
							className="group relative"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl transform scale-[0.98] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
							<div className="relative p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
								<div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-600/10 rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
									<div className="text-gradient-to-r from-blue-500 to-purple-600">
										{service.icon}
									</div>
								</div>
								<h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
									{service.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
									{service.description}
								</p>
								<motion.div
									className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
								>
									<svg
										className="w-6 h-6 text-blue-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										role="img"
									>
										<title>Learn More Icon</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 8l4 4m0 0l-4 4m4-4H3"
										/>
									</svg>
								</motion.div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
}
