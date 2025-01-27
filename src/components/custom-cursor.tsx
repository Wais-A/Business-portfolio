"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
	const [isVisible, setIsVisible] = useState(false);
	const [isHovering, setIsHovering] = useState(false);

	const cursorX = useMotionValue(-100);
	const cursorY = useMotionValue(-100);

	const springConfig = { damping: 25, stiffness: 700 };
	const cursorXSpring = useSpring(cursorX, springConfig);
	const cursorYSpring = useSpring(cursorY, springConfig);

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			cursorX.set(e.clientX - 10);
			cursorY.set(e.clientY - 10);
		};

		const handleMouseEnter = () => setIsVisible(true);
		const handleMouseLeave = () => setIsVisible(false);

		// Add hover detection for interactive elements
		const handleElementMouseEnter = (e: MouseEvent) => {
			const target = e.target;
			if (
				target instanceof HTMLElement &&
				(target.tagName.toLowerCase() === "a" ||
					target.tagName.toLowerCase() === "button" ||
					(target.closest instanceof Function && target.closest("button")) ||
					(target.closest instanceof Function && target.closest("a")) ||
					target.getAttribute("role") === "button" ||
					target.classList.contains("button"))
			) {
				setIsHovering(true);
			}
		};

		const handleElementMouseLeave = () => {
			setIsHovering(false);
		};

		window.addEventListener("mousemove", moveCursor);
		window.addEventListener("mouseenter", handleMouseEnter);
		window.addEventListener("mouseleave", handleMouseLeave);
		document.addEventListener("mouseenter", handleElementMouseEnter, true);
		document.addEventListener("mouseleave", handleElementMouseLeave, true);

		return () => {
			window.removeEventListener("mousemove", moveCursor);
			window.removeEventListener("mouseenter", handleMouseEnter);
			window.removeEventListener("mouseleave", handleMouseLeave);
			document.removeEventListener("mouseenter", handleElementMouseEnter, true);
			document.removeEventListener("mouseleave", handleElementMouseLeave, true);
		};
	}, [cursorX, cursorY]);

	// Don't render on mobile/touch devices
	if (
		typeof window !== "undefined" &&
		window.matchMedia("(pointer: coarse)").matches
	) {
		return null;
	}

	return (
		<motion.div
			className={`custom-cursor ${isHovering ? "hover" : ""}`}
			style={{
				left: cursorXSpring,
				top: cursorYSpring,
				opacity: isVisible ? 1 : 0,
				scale: isHovering ? 1.5 : 1,
			}}
			initial={{ opacity: 0 }}
			animate={{ opacity: isVisible ? 1 : 0 }}
			transition={{
				opacity: { duration: 0.2 },
				scale: { duration: 0.2 },
			}}
		/>
	);
}
