"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
	const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const wordVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.2, 0.65, 0.3, 0.9],
				delay: i * 0.1,
			},
		}),
	};

	const buttonVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut",
				delay: 0.6,
			},
		},
		hover: {
			scale: 1.05,
			transition: {
				duration: 0.2,
				ease: "easeInOut",
			},
		},
		tap: {
			scale: 0.95,
		},
	};

	const phrases = [
		"AI-Powered Strategies",
		"Innovative Solutions",
		"Sustainable Growth",
	];
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const id = setInterval(
			() => setIndex((i) => (i + 1) % phrases.length),
			3000,
		);
		return () => clearInterval(id);
	}, []);

	const handleClick = () => {
		const element = document.querySelector("#portfolio");
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<motion.div
			ref={ref}
			className="relative min-h-screen overflow-hidden animated-bg animated-gradient"
			style={{ backgroundPositionY: bgY }}
		>
			{/* Content */}
			<motion.div
				className="relative z-10 max-w-6xl mx-auto px-4 py-32 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center"
				initial="hidden"
				animate="visible"
			>
				<div className="text-center space-y-8">
					{/* Animated heading */}
					<motion.h1
						className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 space-y-4"
						variants={textVariants}
						style={{ y }}
					>
						<motion.span
							className="block floating-text"
							variants={wordVariants}
							custom={0}
						>
							Business Innovation
						</motion.span>
						<motion.span
							className="block floating-text"
							variants={wordVariants}
							custom={1}
						>
							Through{" "}
							<span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
								Strategic Technology
							</span>
						</motion.span>
					</motion.h1>

					{/* Animated subtitle */}
					<motion.p
						className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-serif typewriter"
						variants={textVariants}
						custom={2}
					>
						{phrases[index]}
					</motion.p>

					{/* Animated button */}
					<motion.div
						className="mt-10"
						variants={buttonVariants}
						whileHover="hover"
						whileTap="tap"
					>
						<motion.button
							onClick={handleClick}
							className="inline-block px-8 py-4 rounded-lg font-semibold text-lg shadow-lg bg-gradient-to-r from-primary via-secondary to-accent text-white hover:shadow-xl transform transition-all duration-300 ripple"
						>
							View Projects
						</motion.button>
					</motion.div>
				</div>
			</motion.div>

			{/* Scroll indicator */}
			<motion.div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				animate={{
					y: [0, 10, 0],
				}}
				transition={{
					duration: 1.5,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
				}}
			>
				<div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center p-2">
					<motion.div
						className="w-1 h-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
						animate={{
							y: [0, 16, 0],
						}}
						transition={{
							duration: 1.5,
							repeat: Number.POSITIVE_INFINITY,
							repeatType: "reverse",
						}}
					/>
				</div>
			</motion.div>
		</motion.div>
	);
};

export { Hero };
