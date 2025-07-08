import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Home } from "@/components/homepage";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Elliott Friedrich",
	description: "A showcase of my work, projects, and accomplishments",
	icons: {
		icon: "/tornado.svg",
		shortcut: "/tornado.svg",
		apple: "/tornado.svg",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				></ThemeProvider>
				<Home />
				{children}
			</body>
		</html>
	);
}
