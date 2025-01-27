"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
	{
		title: "Business Strategy",
		description:
			"Developed comprehensive business strategies focusing on market expansion and digital transformation initiatives",
		icon: (
			<svg
				className="w-6 h-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				role="img"
			>
				<title>Strategy Icon</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L16 4m0 13V4m0 0L10 7"
				/>
			</svg>
		),
		skills: ["Market Analysis", "Strategic Planning", "Digital Transformation"],
	},
	{
		title: "Project Management",
		description:
			"Led cross-functional teams in implementing innovative solutions and achieving business objectives",
		icon: (
			<svg
				className="w-6 h-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				role="img"
			>
				<title>Project Management Icon</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
		skills: ["Team Leadership", "Agile Methodologies", "Resource Optimization"],
	},
	{
		title: "Data Analytics",
		description:
			"Utilized data-driven insights to optimize business processes and drive decision-making",
		icon: (
			<svg
				className="w-6 h-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				role="img"
			>
				<title>Analytics Icon</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
		),
		skills: ["Data Analysis", "Business Intelligence", "Performance Metrics"],
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

export function Experience() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

	return (
		<section id="experience" className="py-24 animated-bg" ref={ref}>
			<motion.div className="max-w-6xl mx-auto px-4" style={{ opacity }}>
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					<h2 className="floating-text text-4xl md:text-5xl font-bold mb-4">
						Experience & Skills
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif">
						Combining business acumen with innovative strategies to drive
						organizational success
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{experiences.map((experience) => (
						<motion.div
							key={experience.title}
							variants={itemVariants}
							className="card h-full"
						>
							<div className="p-8 h-full flex flex-col">
								<div className="w-12 h-12 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
									<div className="text-gradient-to-r from-primary via-secondary to-accent">
										{experience.icon}
									</div>
								</div>
								<h3 className="text-2xl font-semibold mb-4 text-gray-900">
									{experience.title}
								</h3>
								<p className="text-gray-600 leading-relaxed mb-6 font-serif flex-grow">
									{experience.description}
								</p>
								<div className="flex flex-wrap gap-2 mt-auto">
									{experience.skills.map((skill) => (
										<span
											key={skill}
											className="text-sm bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 text-gray-700 px-3 py-1 rounded-full font-medium backdrop-blur-sm"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
}
