"use client";

import { motion } from "framer-motion";

const products = [
	{
		title: "Consulting",
		description: "Tailored strategies that drive growth.",
		image: "/vercel.svg",
	},
	{
		title: "Analytics",
		description: "Unlock insight with real-time data.",
		image: "/next.svg",
	},
	{
		title: "Automation",
		description: "Streamline operations effortlessly.",
		image: "/globe.svg",
	},
];

export function ProductCarousel() {
	return (
		<section id="products" className="py-24 overflow-hidden animated-bg">
			<div className="container space-y-12">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4 floating-text">
						Our Solutions
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif">
						Dynamic offerings crafted to elevate your business.
					</p>
				</motion.div>
				<div className="relative w-full">
					<motion.div
						className="flex gap-8"
						animate={{ x: ["0%", "-50%"] }}
						transition={{
							ease: "linear",
							duration: 20,
							repeat: Number.POSITIVE_INFINITY,
						}}
					>
						{[...products, ...products].map((p, i) => (
							<div
								key={`${p.title}-${i}`}
								className="w-80 shrink-0 card p-6 flex flex-col items-center text-center"
							>
								<img
									src={p.image}
									alt={p.title}
									className="w-24 h-24 mb-4 object-contain"
								/>
								<h3 className="text-xl font-semibold mb-2 text-gray-900">
									{p.title}
								</h3>
								<p className="text-gray-600 font-serif">{p.description}</p>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
