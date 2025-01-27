"use client";

import type { LottieRefCurrentProps } from "lottie-react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type AnimationData = Record<string, unknown>;

export function LottieAnimation() {
	const animationRef = useRef<LottieRefCurrentProps>(null);
	const [animationData, setAnimationData] = useState<AnimationData | null>(
		null,
	);

	useEffect(() => {
		let isMounted = true;

		import("../../public/animations/data.json").then((data) => {
			if (isMounted) {
				setAnimationData(data.default);
			}
		});

		return () => {
			isMounted = false;
			if (animationRef.current) {
				animationRef.current.destroy();
			}
		};
	}, []);

	if (!animationData) return null;

	return (
		<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
			<div className="w-32 h-32 opacity-75">
				<Lottie
					lottieRef={animationRef}
					animationData={animationData}
					loop={true}
					autoplay={true}
					rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
				/>
			</div>
		</div>
	);
}
