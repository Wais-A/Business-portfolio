"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
	title: string;
	description: string;
	longDescription?: string;
	achievements: string[];
	image: string;
	category: string;
	link?: string;
};

const projects: Project[] = [
	{
		title: "Market Expansion Strategy",
		description:
			"Led market analysis and expansion strategy for a Fortune 500 retail company",
		longDescription:
			"Developed and implemented a comprehensive market expansion strategy that resulted in 35% revenue growth in new markets. Coordinated with cross-functional teams to ensure successful execution.",
		achievements: [
			"35% Revenue Growth",
			"New Market Entry",
			"Team Leadership",
			"Strategic Planning",
		],
		image: "/vercel.svg",
		category: "Strategy",
		link: "#",
	},
	{
		title: "Digital Transformation",
		description:
			"Spearheaded digital transformation for a traditional business model",
		longDescription:
			"Led the digital transformation of a traditional business model, implementing modern technologies and processes that improved operational efficiency by 45%.",
		achievements: [
			"45% Efficiency Increase",
			"Process Optimization",
			"Change Management",
			"Technology Integration",
		],
		image: "/next.svg",
		category: "Innovation",
		link: "#",
	},
	{
		title: "Sustainability Initiative",
		description: "Developed and implemented corporate sustainability program",
		longDescription:
			"Created and executed a comprehensive sustainability program that reduced operational costs by 25% while improving environmental impact metrics.",
		achievements: [
			"25% Cost Reduction",
			"Environmental Impact",
			"Stakeholder Management",
			"Program Development",
		],
		image: "/globe.svg",
		category: "Leadership",
	},
];

// Category filter array
const categories = ["All", ...new Set(projects.map((p) => p.category))];

export function Portfolio() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	// Lock body scroll when modal is open
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape" && selectedProject) {
				handleCloseModal();
			}
		};

		if (selectedProject) {
			document.body.style.overflow = "hidden";
			document.addEventListener("keydown", handleEscape);
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "unset";
		};
	}, [selectedProject]);

	// Browser back button
	useEffect(() => {
		const handlePopState = () => {
			if (selectedProject) handleCloseModal();
		};
		window.addEventListener("popstate", handlePopState);
		return () => window.removeEventListener("popstate", handlePopState);
	}, [selectedProject]);

	const handleCloseModal = () => {
		setSelectedProject(null);
		document.body.style.overflow = "unset";
	};

	// Filtered array
	const filteredProjects = projects.filter(
		(p) => selectedCategory === "All" || p.category === selectedCategory,
	);

	return (
		<section id="portfolio" className="py-24 animated-bg">
			<div className="max-w-6xl mx-auto px-4">
				{/* Section Heading */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="floating-text text-4xl md:text-5xl font-bold mb-4">
						Featured Projects
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif">
						Showcasing innovative business solutions and strategic achievements
					</p>
				</motion.div>

				{/* Category Filter */}
				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{categories.map((category) => (
						<motion.button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`filter-button ${
								selectedCategory === category ? "active" : ""
							}`}
							whileHover={{ y: -2 }}
							whileTap={{ y: 0 }}
							type="button"
						>
							{category}
						</motion.button>
					))}
				</div>

				{/* Projects Grid */}
				<motion.div
					layout
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{filteredProjects.map((project) => (
						<motion.div
							layout
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{
								layout: { duration: 0.3 },
								opacity: { duration: 0.3 },
							}}
							className="card group cursor-pointer relative" // uses .card from your CSS
							key={project.title}
							onClick={() => setSelectedProject(project)}
						>
							{/* Fixed card height for uniformity */}
							<div className="h-96 flex flex-col">
								{/* Top half: Image */}
								<div className="relative h-1/2 overflow-hidden">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover transition-all duration-300 group-hover:scale-110"
										priority
									/>
								</div>
								{/* Bottom half: Text */}
								<div className="p-4 flex flex-col justify-between h-1/2">
									<div>
										<h3 className="text-xl font-semibold mb-2 text-gray-900">
											{project.title}
										</h3>
										{/* line-clamp to avoid overflow */}
										<p className="text-gray-600 font-serif line-clamp-3">
											{project.description}
										</p>
									</div>
									<div className="mt-3">
										<div className="flex flex-wrap gap-2">
											{project.achievements.slice(0, 2).map((achievement) => (
												<span
													key={achievement}
													className="text-sm bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 text-gray-700 px-3 py-1 rounded-full font-medium backdrop-blur-sm"
												>
													{achievement}
												</span>
											))}
											{project.achievements.length > 2 && (
												<span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
													+{project.achievements.length - 2} more
												</span>
											)}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Modal (Avoid Clipping) */}
				<AnimatePresence mode="wait">
					{selectedProject && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0, transition: { duration: 0.15 } }}
							transition={{ duration: 0.2 }}
							// Key: items-start, overflow-y-auto, padding
							className="fixed inset-0 z-50 flex items-start justify-center px-4 py-6 bg-black/50 backdrop-blur-sm overflow-y-auto"
							onClick={handleCloseModal}
						>
							<motion.div
								initial={{ scale: 0.9, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{
									scale: 0.95,
									opacity: 0,
									transition: { duration: 0.15 },
								}}
								className="relative max-w-2xl w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl mt-6"
								onClick={(e) => e.stopPropagation()}
							>
								{/* Modal Image */}
								<div className="relative overflow-hidden rounded-t-2xl">
									<Image
										src={selectedProject.image}
										alt={selectedProject.title}
										width={1200}
										height={675}
										className="w-full h-auto object-cover"
										priority
									/>
								</div>

								{/* Modal Content */}
								<div className="p-6">
									<h3 className="text-2xl font-bold mb-4 text-gray-900">
										{selectedProject.title}
									</h3>
									<p className="text-gray-600 mb-6 font-serif">
										{selectedProject.longDescription ||
											selectedProject.description}
									</p>
									<div className="flex flex-wrap gap-2 mb-6">
										{selectedProject.achievements.map((ach) => (
											<span
												key={ach}
												className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
											>
												{ach}
											</span>
										))}
									</div>
									{selectedProject.link && (
										<button
											type="button"
											onClick={() =>
												window.open(selectedProject.link, "_blank")
											}
											className="primary-button inline-flex items-center gap-2"
										>
											<span>View Details</span>
											<svg
												className="w-4 h-4"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												role="img"
											>
												<title>External Link Icon</title>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
												/>
											</svg>
										</button>
									)}
								</div>

								{/* Close Button */}
								<button
									onClick={handleCloseModal}
									type="button"
									className="absolute top-4 right-4 p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
								>
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										role="img"
									>
										<title>Close Modal Icon</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
