import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import NavBar from "@/src/components/NavBar";

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rick & Morty Wiki | Dimension C-137",
  description: "Comprehensive database of Rick and Morty characters, locations, and episodes. Wubba Lubba Dub Dub!",
  keywords: ["Rick and Morty", "API", "Characters", "Wiki", "Next.js", "React"],
  authors: [{ name: "Andrii Linkevych" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Rick & Morty Wiki",
    description: "Explore the multiverse! Find everything about your favorite characters.",
    type: "website",
    siteName: "RickAndMortyWiki",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <header className="bg-blue-500 flex justify-between items-center">
          <Link href={'/'} className="text-white text-3xl font-bold mx-5">🥒Rick & Morty Wiki</Link>
          <NavBar />
        </header>

        <main className="flex flex-grow justify-center">
          {children}
        </main>

        <footer 
          className="
            h-20 bg-blue-500 
            flex flex-col
            justify-center items-center 
            text-white
          ">
            <div>
              My project 2026
            </div>

            <div className="font-semibold hover:-translate-y-1">
              <Link href={'https://github.com/andriiLink/rick-morty'}>{'>>>'}GitHub repository{'<<<'}</Link>
            </div>
          </footer>
      </body>
    </html>
  );
}
