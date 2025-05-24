import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://your-domain.com"),
	title: "Professional Portfolio | Business & Strategy",
	description:
		"A showcase of business strategy, innovation, and professional achievements",
	keywords: ["portfolio", "business", "strategy", "innovation", "professional"],
	authors: [{ name: "Your Name" }],
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://your-domain.com",
		siteName: "Professional Portfolio",
		title: "Professional Portfolio | Business & Strategy",
		description:
			"A showcase of business strategy, innovation, and professional achievements",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Professional Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Professional Portfolio | Business & Strategy",
		description:
			"A showcase of business strategy, innovation, and professional achievements",
		images: ["/og-image.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="font-sans antialiased">{children}</body>
		</html>
	);
}
