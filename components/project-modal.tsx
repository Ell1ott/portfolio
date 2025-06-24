"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";

interface ProjectModalProps {
	isOpen: boolean;
	onClose: () => void;
	project: {
		title: string;
		description: string;
		imageSrc: string;
		tags: string[];
		link: string;
		slug: string;
	} | null;
	projectsContent: Record<string, string>;
}

export function ProjectModal({
	isOpen,
	onClose,
	project,
	projectsContent,
}: ProjectModalProps) {
	useEffect(() => {
		if (isOpen) {
			document.getElementById("corpse")!.classList.add("scale-[95%]");
		} else {
			document.getElementById("corpse")!.classList.remove("scale-[95%]");
		}
	}, [isOpen]);

	if (!project) return null;

	const markdownContent =
		projectsContent[project.slug] ||
		"# Project Content Not Found\n\nThe content for this project is currently unavailable.";

	return (
		<Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<SheetContent
				side="bottom"
				className="h-[85vh] max-w-3xl mx-auto rounded-t-3xl overflow-y-auto overflow-x-hidden backdrop-blur-sm"
				// Custom animation classes
				style={{
					transform: isOpen
						? "translateY(0) scale(1)"
						: "translateY(100%) scale(0.95)",
					transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
					opacity: isOpen ? 1 : 0,
					backdropFilter: "blur(8px)",
				}}
			>
				<SheetHeader className="relative pb-6">
					<button
						onClick={onClose}
						className="absolute right-0 top-0 p-2 m-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
					>
						<X className="h-6 w-6" />
					</button>
					<div className="flex items-center gap-4 pr-12">
						<SheetTitle className="text-3xl sm:text-4xl md:text-5xl font-bold flex-1">
							{project.title}
						</SheetTitle>
						{/* <Button
							asChild
							size="sm"
							variant="outline"
							className="flex items-center gap-2 mr-4"
						>
							<Link
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<ExternalLink className="h-4 w-4" />
								Visit
							</Link>
						</Button> */}
					</div>
					<SheetDescription>{project.description}</SheetDescription>
				</SheetHeader>

				<div className="space-y-6">
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="relative aspect-[2] w-full overflow-hidden block rounded-xl border"
					>
						<Image
							src={project.imageSrc || "/placeholder.svg"}
							alt={project.title}
							fill
							className="object-cover"
						/>
					</a>

					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag) => (
							<Badge key={tag} variant="secondary">
								{tag}
							</Badge>
						))}
					</div>

					<div className="prose prose-neutral dark:prose-invert max-w-none">
						<ReactMarkdown
							components={{
								h1: ({ children }) => (
									<h1 className="text-2xl font-bold mb-4 mt-6 first:mt-0">
										{children}
									</h1>
								),
								h2: ({ children }) => (
									<h2 className="text-xl font-semibold mb-3 mt-5">
										{children}
									</h2>
								),
								h3: ({ children }) => (
									<h3 className="text-lg font-medium mb-2 mt-4">{children}</h3>
								),
								p: ({ children }) => (
									<p className="mb-4 leading-relaxed">{children}</p>
								),
								ul: ({ children }) => (
									<ul className="mb-4 space-y-1 list-disc list-inside">
										{children}
									</ul>
								),
								ol: ({ children }) => (
									<ol className="mb-4 space-y-1 list-decimal list-inside">
										{children}
									</ol>
								),
								li: ({ children }) => (
									<li className="leading-relaxed">{children}</li>
								),
								strong: ({ children }) => (
									<strong className="font-semibold text-primary">
										{children}
									</strong>
								),
								blockquote: ({ children }) => (
									<blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
										{children}
									</blockquote>
								),
							}}
						>
							{markdownContent}
						</ReactMarkdown>
					</div>

					<div className="flex justify-end pt-4">
						<Button asChild>
							<Link
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2"
							>
								View Project <ExternalLink className="h-4 w-4" />
							</Link>
						</Button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
