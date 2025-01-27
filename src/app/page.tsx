"use client";

import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Portfolio } from "@/components/portfolio";
import { motion } from "framer-motion";

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5 },
};

export default function Home() {
	return (
		<>
			<Navigation />
			<main className="relative min-h-screen">
				{/* Main content */}
				<motion.div
					initial="initial"
					animate="animate"
					variants={{
						animate: {
							transition: {
								staggerChildren: 0.1,
							},
						},
					}}
				>
					<motion.section {...fadeInUp} id="home">
						<Hero />
					</motion.section>

					<motion.section {...fadeInUp} className="relative" id="experience">
						<Experience />
					</motion.section>

					<motion.section {...fadeInUp} className="relative" id="portfolio">
						<Portfolio />
					</motion.section>

					<motion.section {...fadeInUp} className="relative" id="contact">
						<Contact />
					</motion.section>
				</motion.div>

				{/* Scroll progress indicator */}
				<motion.div
					className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
					style={{
						scaleX: 0,
						transformOrigin: "0%",
					}}
					animate={{
						scaleX: 1,
					}}
					transition={{
						duration: 0.5,
					}}
				>
					<motion.div
						className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
						style={{
							scaleX: 0,
							transformOrigin: "0%",
						}}
						animate={{
							scaleX: 1,
						}}
						transition={{
							duration: 0.5,
							delay: 0.2,
						}}
					/>
				</motion.div>
			</main>
		</>
	);
}
