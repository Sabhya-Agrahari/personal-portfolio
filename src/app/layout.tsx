import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "./(components)/Navbar";
import { ThemeProvider } from "./providers/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: "Software Developer",
  description: "Sabhya Agrahari is a Software Developer specializing in Python, Java, Full Stack Development, and AI/ML.",
  keywords: [
    "Sabhya Agrahari",
    "Python Developer",
    "Java Developer",
    "Full Stack Developer",
    "Django Developer",
    "AI ML Developer",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Sabhya Agrahari" }],
  creator: "Sabhya Agrahari",
  openGraph: {
    title: "Sabhya Agrahari | Software Developer",
    description: "Explore projects, skills, and experience in Full Stack Development, AI/ML, and scalable system design.",
    url: "https://yourdomain.com",
    siteName: "Sabhya Portfolio",
    images: [{ url: "/profile.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabhya Agrahari Portfolio",
    description: "Software Developer | Python | Full Stack | AI/ML",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        
        <ThemeProvider>
          <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>

            <Navbar />

            <main className="flex-1">
              {children}
            </main>

          </Suspense>
        </ThemeProvider>

      </body>
    </html>
  );
}