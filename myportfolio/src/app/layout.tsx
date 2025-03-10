import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const customFont = Inter({
	variable: "--font-inter",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "my portfolio",
	description: "Generated by create next app"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={`${customFont.className} antialiased bg-zinc-900`}
				cz-shortcut-listen="false">
				{children}
			</body>
		</html>
	);
}

