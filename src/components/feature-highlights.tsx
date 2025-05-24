"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const features = [
	{
		title: "Lightning Fast",
		description: "Experience blazing speed across all devices.",
		details:
			"Our solutions are optimised for performance to ensure seamless user experiences.",
		icon: (
			<svg
				className="w-8 h-8"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				role="img"
			>
				<title>Fast icon</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M13 10V3L4 14h7v7l9-11h-7z"
				/>
			</svg>
		),
	},
	{
		title: "Secure",
		description: "Built with best practices for safety.",
		details:
			"Security is woven into every layer ensuring your data stays protected.",
		icon: (
			<svg
				className="w-8 h-8"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				role="img"
			>
				<title>Shield icon</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
				/>
			</svg>
		),
	},
	{
		title: "Responsive",
		description: "Looks stunning on every screen size.",
		details:
			"Adaptive layouts provide a consistent experience from phones to desktops.",
		icon: (
			<svg
				className="w-8 h-8"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				role="img"
			>
				<title>Device icon</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M4 6h16M4 10h16M4 14h10M4 18h6"
				/>
			</svg>
		),
	},
];

const container = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.15 } },
};
const item = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function FeatureHighlights() {
	return (
		<section id="features" className="py-24 animated-bg">
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4 floating-text">
						Feature Highlights
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif">
						A glimpse into the capabilities we craft for our clients.
					</p>
				</motion.div>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
				>
					{features.map((f) => (
						<FeatureCard key={f.title} feature={f} />
					))}
				</motion.div>
			</div>
		</section>
	);
}

function FeatureCard({ feature }: { feature: (typeof features)[number] }) {
	const [flipped, setFlipped] = useState(false);

	return (
		<motion.div
			variants={item}
			className={`tilt-card flip-card card cursor-pointer ${flipped ? "flipped" : ""}`}
			onClick={() => setFlipped((v) => !v)}
			whileHover={{ scale: 1.02 }}
		>
			<div className="flip-inner p-8 h-80 flex flex-col justify-center items-center text-center">
				<div className="flip-front flex flex-col items-center gap-4">
					<div className="tilt-inner w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center animate-pulse">
						{feature.icon}
					</div>
					<h3 className="text-xl font-semibold text-gray-900">
						{feature.title}
					</h3>
					<p className="text-gray-600 font-serif">{feature.description}</p>
				</div>
				<div className="flip-back flex flex-col items-center justify-center gap-4 p-4">
					<p className="text-gray-700 font-serif">{feature.details}</p>
				</div>
			</div>
		</motion.div>
	);
}
