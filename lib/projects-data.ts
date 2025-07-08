export interface ProjectData {
	title: string;
	description: string;
	imageSrc: string;
	tags: string[];
	link: string;
	slug: string;
}

export const projectsData: ProjectData[] = [
	{
		title: "Akademia",
		description:
			"An all-in-one solution for all of the schools' digital needs.",
		imageSrc: "/akademia.webp",
		tags: ["Svelte", "Supabase", "Rust"],
		link: "https://akademia.cc/",
		slug: "akademia",
	},
	{
		title: "Life tracker",
		description:
			"Simple, clean and modern habit tracker designed to help you build and maintain good habits",
		imageSrc: "/life-tracker.png",
		tags: ["React Native", "Zustand", "Expo"],
		link: "https://github.com/Ell1ott/habit-tracker",
		slug: "life-tracker",
	},
	{
		title: "StormGPT",
		description:
			"An AI-powered tool that helps you brainstorm and generate fresh, creative ideas fast.",
		imageSrc: "/stormgpt.png",
		tags: ["Still in Design phase"],
		link: "#",
		slug: "stormgpt",
	},
	{
		title: "Nørrebro Skakklub",
		description:
			"New website for the Nørrebro Skakklub, with focus on UI/UX and easy to use CMS",
		imageSrc: "/nbskak.jpg",
		tags: ["React"],
		link: "#",
		slug: "norrebro-skakklub",
	},
	{
		title: "Flimmer",
		description:
			"Kid-friendly video platform where kids can watch curated videos and complete creative tasks related to them",
		imageSrc: "/flimmer.svg",
		tags: [],
		link: "#",
		slug: "flimmer",
	},
];
