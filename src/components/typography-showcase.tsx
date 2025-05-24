"use client";

import { motion } from "framer-motion";

const samples = [
	{ id: 1, text: "Elegant Typography", className: "font-serif" },
	{ id: 2, text: "Modern & Clean", className: "font-sans" },
	{ id: 3, text: "Creative Display", className: "font-serif" },
];

export function TypographyShowcase() {
	return (
		<section id="typography" className="py-24 animated-bg">
			<div className="container space-y-12">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4 floating-text">
						Typography Showcase
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif">
						Explore a palette of expressive fonts and gradients.
					</p>
				</motion.div>
				<div className="flex flex-col gap-12">
					{samples.map((s, i) => (
						<motion.div
							key={s.id}
							className={`text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent ${s.className}`}
							initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							{s.text}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
