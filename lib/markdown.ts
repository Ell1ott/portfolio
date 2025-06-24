import fs from "fs";
import path from "path";

export async function getProjectContent(slug: string): Promise<string> {
	try {
		const filePath = path.join(
			process.cwd(),
			"content",
			"projects",
			`${slug}.md`
		);
		const content = fs.readFileSync(filePath, "utf8");
		return content;
	} catch (error) {
		console.error(`Error loading project content for ${slug}:`, error);
		return "# Project Content Not Found\n\nThe content for this project is currently unavailable.";
	}
}

export async function getAllProjectsContent(): Promise<Record<string, string>> {
	const projectsDirectory = path.join(process.cwd(), "content", "projects");

	try {
		const filenames = fs.readdirSync(projectsDirectory);
		const projects: Record<string, string> = {};

		for (const filename of filenames) {
			if (filename.endsWith(".md")) {
				const slug = filename.replace(".md", "");
				const content = await getProjectContent(slug);
				projects[slug] = content;
			}
		}

		return projects;
	} catch (error) {
		console.error("Error loading all projects content:", error);
		return {};
	}
}

export function slugify(title: string): string {
	return title
		.toLowerCase()
		.replace(/ø/g, "o")
		.replace(/æ/g, "ae")
		.replace(/å/g, "a")
		.replace(/[^a-z0-9]/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "");
}
