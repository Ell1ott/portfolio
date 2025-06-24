import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { Timeline } from "@/components/timeline";
import { IdBadge } from "@/components/id-badge";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/mode-toggle";
import { getAllProjectsContent } from "@/lib/markdown";

export default async function Home() {
	const projectsContent = await getAllProjectsContent();
	return (
		<div className="flex min-h-screen flex-col w-[100vw]" id="corpse">
			{/* <Navbar /> */}
			<main className="flex-1">
				{/* Hero/About Me Section */}
				<section
					id="about"
					className="relative overflow-clip h-[calc(100vh)] bg-neutral-200 dark:bg-neutral-900"
				>
					<IdBadge></IdBadge>

					<div className="flex items-center justify-center py-20 md:py-32 h-full">
						<div className="flex container px-4 md:px-14 !pr-[20rem] mx-auto max-w-6xl items-center justify-between">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2 z-20">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none z-20">
										Hi, I'm <span className="text-primary">Elliott</span>
									</h1>
									<p className="max-w-[600px] text-muted-foreground md:text-xl">
										I'm a 17-year-old fullstack developer who loves using modern
										tech to solve our everyday problems.
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row z-20">
									<Button asChild className="fancy-button hover:bg-primary">
										<Link href="#contact">Get in touch</Link>
									</Button>
									<Button
										variant="outline"
										asChild
										className="fancy-button hover:bg-background"
									>
										<Link href="#projects">View my work</Link>
									</Button>
								</div>
								<div className="flex items-center gap-4 pt-4 z-20">
									<Link
										href="https://github.com/Ell1ott"
										target="_blank"
										rel="noreferrer"
										className="text-muted-foreground hover:text-primary"
									>
										<Github></Github>
										<span className="sr-only">GitHub</span>
									</Link>
									<Link
										href="https://www.linkedin.com/in/elliott-friedrich-0460962b0/"
										target="_blank"
										rel="noreferrer"
										className="text-muted-foreground hover:text-primary"
									>
										<Linkedin></Linkedin>
										<span className="sr-only">LinkedIn</span>
									</Link>
									<Link
										href="mailto:elliott.friedrich@outlook.dk"
										target="_blank"
										rel="noreferrer"
										className="text-muted-foreground hover:text-primary"
									>
										<Mail></Mail>
										<span className="sr-only">Email</span>
									</Link>
								</div>
							</div>

							<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center">
								<Link
									href="#current"
									className="flex items-center justify-center rounded-full p-1 text-muted-foreground hover:text-primary"
								>
									<ChevronDown className="h-8 w-8 animate-bounce" />
									<span className="sr-only">Scroll down</span>
								</Link>
							</div>
							<div className="absolute right-8 bottom-8 hej z-20">
								<ModeToggle></ModeToggle>
							</div>
						</div>
					</div>
				</section>

				{/* Current Work Section */}
				{/* <section id="current" className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-14 mx-auto max-w-6xl ">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What I'm Currently Working On
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here's a glimpse into my current projects and professional
                  endeavors.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Current Project"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter">
                    Featured Project
                  </h3>
                  <p className="text-muted-foreground">
                    I'm currently leading development on an innovative platform
                    that connects creators with opportunities.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">In Progress</Badge>
                    <span>Launching Q3 2023</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Role</Badge>
                    <span>Lead Developer & Product Strategist</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline">Technologies</Badge>
                    <span>React, Node.js, AWS</span>
                  </li>
                </ul>
                <div>
                  <Button variant="outline" asChild>
                    <Link href="#projects">Learn more</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Consulting Work</CardTitle>
                  <CardDescription>
                    Tech Strategy & Implementation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Currently advising several startups on technology strategy,
                    architecture decisions, and implementation roadmaps.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Open Source</CardTitle>
                  <CardDescription>Community Contributions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Actively contributing to several open source projects
                    focused on developer tools and accessibility improvements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Speaking Engagements</CardTitle>
                  <CardDescription>Conferences & Workshops</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Preparing for upcoming speaking engagements at industry
                    conferences on topics related to innovation and technology.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

				{/* Projects Section */}
				<section id="projects" className="py-12 md:py-24">
					<div className="container px-4 md:px-14 max-w-6xl mx-auto">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
									My Projects
								</h2>
								{/* <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A showcase of my work, projects, and contributions.
                </p> */}
							</div>
						</div>
						<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 mt-20">
							<ProjectCard
								title="Akademia"
								description="An all-in-one solution for all of the schools' digital needs."
								imageSrc="/akademia.webp"
								tags={["Svelte", "Supabase", "Rust"]}
								link="#"
								slug="akademia"
								projectsContent={projectsContent}
							/>
							<ProjectCard
								title="Life tracker"
								description="Simple, clean and modern habit tracker designed to help you build and maintain good habits"
								imageSrc="/life-tracker.png"
								tags={["React Native", "Zustand", "Expo"]}
								link="#"
								slug="life-tracker"
								projectsContent={projectsContent}
							/>
							<ProjectCard
								title="StormGPT"
								description="An AI-powered tool that helps you brainstorm and generate fresh, creative ideas fast."
								imageSrc="/stormgpt.png"
								tags={["Still in Design phase"]}
								link="#"
								slug="stormgpt"
								projectsContent={projectsContent}
							/>
							<ProjectCard
								title="Nørrebro Skakklub"
								description="New website for the Nørrebro Skakklub, with focus on UI/UX and easy to use CMS"
								imageSrc="/nbskak.jpg"
								tags={["React"]}
								link="#"
								slug="norrebro-skakklub"
								projectsContent={projectsContent}
							/>
							<ProjectCard
								title="Flimmer"
								description="Kid-friendly video platform where kids can watch curated videos and complete creative tasks related to them"
								imageSrc="/flimmer.svg"
								tags={[]}
								link="#"
								slug="flimmer"
								projectsContent={projectsContent}
							/>
						</div>
						{/* <Tabs defaultValue="all" className="mt-8">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="web">Web</TabsTrigger>
                  <TabsTrigger value="mobile">Mobile</TabsTrigger>
                  <TabsTrigger value="design">Design</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="mt-6">
               
              </TabsContent>
              <TabsContent value="web" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="Project Alpha"
                    description="A revolutionary platform for connecting creators and businesses."
                    imageSrc="/placeholder.svg?height=200&width=300"
                    tags={["React", "Node.js", "MongoDB"]}
                    link="#"
                  />
                  <ProjectCard
                    title="Analytics Dashboard"
                    description="Real-time analytics dashboard for e-commerce platforms."
                    imageSrc="/placeholder.svg?height=200&width=300"
                    tags={["Vue.js", "D3.js", "GraphQL"]}
                    link="#"
                  />
                  <ProjectCard
                    title="Blockchain Explorer"
                    description="User-friendly blockchain explorer with advanced filtering."
                    imageSrc="/placeholder.svg?height=200&width=300"
                    tags={["Web3.js", "React", "Node.js"]}
                    link="#"
                  />
                </div>
              </TabsContent>
              <TabsContent value="mobile" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="Mobile Companion"
                    description="Cross-platform mobile application with real-time synchronization."
                    imageSrc="/placeholder.svg?height=200&width=300"
                    tags={["React Native", "Firebase", "Redux"]}
                    link="#"
                  />
                </div>
              </TabsContent>
              <TabsContent value="design" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="Design System"
                    description="Comprehensive design system for enterprise applications."
                    imageSrc="/placeholder.svg?height=200&width=300"
                    tags={["Figma", "Design Systems", "Accessibility"]}
                    link="#"
                  />
                </div>
              </TabsContent>
            </Tabs> */}
					</div>
				</section>

				{/* Accomplishments Section */}
				{/* <section id="accomplishments" className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Accomplishments & Recognition
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Awards, achievements, and notable appearances that have marked
                  my journey.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Timeline />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                  </div>
                  <CardTitle className="mt-4">Innovation Award</CardTitle>
                  <CardDescription>2023 Tech Innovators Summit</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Recognized for groundbreaking work in accessible technology
                    solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5Z" />
                      <path d="m3 3 18 18" />
                      <path d="M10.5 10.5 12 8l1.5 2.5 2.5 1.5-2.5 1.5L12 16l-1.5-2.5L8 12l2.5-1.5Z" />
                    </svg>
                  </div>
                  <CardTitle className="mt-4">Shark Tank Appearance</CardTitle>
                  <CardDescription>Season 12, Episode 15</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Secured investment for revolutionary product with unanimous
                    shark approval.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                      <path d="m15 5 3 3" />
                    </svg>
                  </div>
                  <CardTitle className="mt-4">Published Author</CardTitle>
                  <CardDescription>
                    "Innovation at Scale" - 2022
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Bestselling book on scaling innovation in technology
                    organizations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

				{/* Contact Section */}
				<section
					id="contact"
					className="py-12 md:py-24 border-t bg-background/90"
				>
					<div className="container px-4 md:px-14 max-w-6xl mx-auto">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									Get In Touch
								</h2>
								<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Have a project in mind or want to collaborate? I'd love to
									hear from you.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
							<div className="flex flex-col gap-2">
								<h3 className="text-xl font-bold">Contact Information</h3>
								<p className="text-muted-foreground">
									Feel free to reach out through any of these channels.
								</p>
								<div className="mt-4 grid gap-4">
									<div className="flex items-center gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-5 w-5 text-primary"
										>
											<rect width="20" height="16" x="2" y="4" rx="2" />
											<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
										</svg>
										<span>elliott.friedrich@outlook.dk</span>
									</div>
									<div className="flex items-center gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-5 w-5 text-primary"
										>
											<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
										</svg>
										<span>(+64) 021 141 0935</span>
									</div>
									<div className="flex items-center gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-5 w-5 text-primary"
										>
											<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
											<circle cx="12" cy="10" r="3" />
										</svg>
										<span>San Francisco, CA</span>
									</div>
								</div>
								<div className="flex items-center gap-4 pt-4 z-20">
									<Link
										href="https://github.com/Ell1ott"
										target="_blank"
										rel="noreferrer"
										className="text-muted-foreground hover:text-primary"
									>
										<Github></Github>
										<span className="sr-only">GitHub</span>
									</Link>
									<Link
										href="https://www.linkedin.com/in/elliott-friedrich-0460962b0/"
										target="_blank"
										rel="noreferrer"
										className="text-muted-foreground hover:text-primary"
									>
										<Linkedin></Linkedin>
										<span className="sr-only">LinkedIn</span>
									</Link>
									<Link
										href="mailto:elliott.friedrich@outlook.dk"
										target="_blank"
										rel="noreferrer"
										className="text-muted-foreground hover:text-primary"
									>
										<Mail></Mail>
										<span className="sr-only">Email</span>
									</Link>
								</div>
							</div>
							<div className="rounded-lg border bg-card p-6 shadow-sm">
								<h3 className="text-xl font-bold">Send a Message</h3>
								<form
									className="mt-4 grid gap-4"
									action="https://api.web3forms.com/submit"
									method="POST"
								>
									<input
										type="hidden"
										name="access_key"
										value="2d68b712-e128-4291-abf6-bcd370cd0852"
									></input>

									<div className="grid gap-2">
										<label
											htmlFor="name"
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											Name
										</label>
										<input
											id="name"
											name="first_name"
											className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
											placeholder="Your name"
										/>
									</div>
									<div className="grid gap-2">
										<label
											htmlFor="email"
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											Email
										</label>
										<input
											id="email"
											type="email"
											name="email"
											className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
											placeholder="Your email"
										/>
									</div>
									<div className="grid gap-2">
										<label
											htmlFor="message"
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											Message
										</label>
										<textarea
											id="message"
											className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
											placeholder="Your message"
										/>
									</div>
									<Button type="submit">Send Message</Button>
								</form>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
