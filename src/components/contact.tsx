"use client";
import { motion } from "framer-motion";
import type React from "react";
import { useState } from "react";

export function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setSubmitted(true);
		setIsSubmitting(false);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormState((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<section id="contact" className="py-24">
			<div className="max-w-6xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
						Let&apos;s Connect
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif">
						Interested in discussing business opportunities or collaboration?
						I&apos;d love to hear from you.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="space-y-8"
					>
						<div className="relative">
							<div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-lg" />
							<div className="relative bg-white p-6 rounded-lg shadow-lg">
								<h3 className="text-2xl font-semibold mb-4 text-gray-900">
									Contact Information
								</h3>
								<div className="space-y-4">
									<div className="flex items-center space-x-4">
										<div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
											<svg
												className="w-5 h-5 text-purple-600"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												role="img"
											>
												<title>Email Icon</title>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												/>
											</svg>
										</div>
										<div>
											<p className="text-sm text-gray-600">Email</p>
											<a
												href="mailto:sarah@example.com"
												className="text-purple-600 hover:text-purple-700 transition-colors"
											>
												sarah@example.com
											</a>
										</div>
									</div>
									<div className="flex items-center space-x-4">
										<div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
											<svg
												className="w-5 h-5 text-purple-600"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												role="img"
											>
												<title>LinkedIn Icon</title>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												/>
											</svg>
										</div>
										<div>
											<p className="text-sm text-gray-600">LinkedIn</p>
											<a
												href="https://linkedin.com/in/sarah"
												target="_blank"
												rel="noopener noreferrer"
												className="text-purple-600 hover:text-purple-700 transition-colors"
											>
												linkedin.com/in/sarah
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						{submitted ? (
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-8 rounded-lg text-center"
							>
								<svg
									className="w-16 h-16 text-purple-600 mx-auto mb-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									role="img"
								>
									<title>Success Icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<h3 className="text-2xl font-semibold mb-2 text-gray-900">
									Thank you!
								</h3>
								<p className="text-gray-600 font-serif">
									Your message has been received. I&apos;ll get back to you
									soon!
								</p>
							</motion.div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 gap-6">
									<div className="relative">
										<input
											type="text"
											id="name"
											name="name"
											required
											value={formState.name}
											onChange={handleChange}
											className="peer w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500 transition-colors placeholder-transparent"
											placeholder="Name"
										/>
										<label
											htmlFor="name"
											className="absolute left-4 top-2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
										>
											Name
										</label>
									</div>
									<div className="relative">
										<input
											type="email"
											id="email"
											name="email"
											required
											value={formState.email}
											onChange={handleChange}
											className="peer w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500 transition-colors placeholder-transparent"
											placeholder="Email"
										/>
										<label
											htmlFor="email"
											className="absolute left-4 top-2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
										>
											Email
										</label>
									</div>
									<div className="relative">
										<input
											type="text"
											id="subject"
											name="subject"
											required
											value={formState.subject}
											onChange={handleChange}
											className="peer w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500 transition-colors placeholder-transparent"
											placeholder="Subject"
										/>
										<label
											htmlFor="subject"
											className="absolute left-4 top-2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
										>
											Subject
										</label>
									</div>
									<div className="relative">
										<textarea
											id="message"
											name="message"
											required
											value={formState.message}
											onChange={handleChange}
											rows={4}
											className="peer w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500 transition-colors resize-none placeholder-transparent"
											placeholder="Message"
										/>
										<label
											htmlFor="message"
											className="absolute left-4 top-2 text-gray-500 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
										>
											Message
										</label>
									</div>
								</div>
								<motion.button
									type="submit"
									disabled={isSubmitting}
									className="w-full primary-button"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									{isSubmitting ? "Sending..." : "Send Message"}
								</motion.button>
							</form>
						)}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
