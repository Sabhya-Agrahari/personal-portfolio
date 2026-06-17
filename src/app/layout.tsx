import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Sidebar from "./(components)/Navbar";
import Loader from "./(components)/Loader";



const siteUrl = "https://sabhya-agrahari-portfolio.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: "google035e4df563d45e2d",
  },
  title: "Software Developer",
  description:
    "Sabhya Agrahari is a Software Developer specializing in Python, Java, Full Stack Development, and AI/ML.",
    
    keywords: [
    "Software Developer",
    "Python Developer",
    "Java Developer",
    "Full Stack Developer",
    "AI Engineer",
    "Machine Learning",
    "Next.js",
    "React",
  ],

  icons: {
      icon: "/logo.jpg",
      apple: "/logo.jpg",
    },
    
  authors: [{ name: "Sabhya Agrahari" }],

  openGraph: {
    title: "Sabhya Agrahari | Software Developer",
    description:
      "Explore projects, skills, and experience in Full Stack Development, AI/ML, and scalable system design.",

    url: siteUrl,

    siteName: "Sabhya Portfolio",

    images: [
      {
        url: `${siteUrl}/logo.jpg`,
        width: 441,
        height: 441,
        alt: "Sabhya Agrahari Portfolio",
      },
    ],

    type: "website",
  },

 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased flex flex-col min-h-screen overflow-x-hidden">

       <Suspense fallback={<Loader />}>

          <main className="flex-1">
            {children}
            {<Sidebar />}
          </main>

        </Suspense>

      </body>
    </html>
  );
}