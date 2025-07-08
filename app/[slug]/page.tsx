import { ProjectModal } from "@/components/project-modal";
import { projectsData } from "@/lib/projects-data";
import { getAllProjectsContent } from "@/lib/markdown";
import { notFound } from "next/navigation";

interface PageProps {
	params: { slug: string };
}

export default async function Page({ params }: PageProps) {
	const { slug } = params;

	// Find the project by slug
	const project = projectsData.find((p) => p.slug === slug);

	// If project not found, return 404
	if (!project) {
		notFound();
	}

	// Get projects content
	const projectsContent = await getAllProjectsContent();

	return <ProjectModal project={project} projectsContent={projectsContent} />;
}
