import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Sidebar from "./(components)/Navbar";
import Loader from "./(components)/Loader";

import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: "Software Developer",
  description:
    "Sabhya Agrahari is a Software Developer specializing in Python, Java, Full Stack Development, and AI/ML. Passionate about building scalable applications and solving real-world problems.",

  keywords: [
    "Sabhya Agrahari",
    "Python Developer",
    "Java Developer",
    "Full Stack Developer",
    "Django Developer",
    "AI ML Developer",
    "React Developer",
    "Next.js Developer",
    "Software Engineer Portfolio",
  ],

  authors: [{ name: "Sabhya Agrahari" }],
  creator: "Sabhya Agrahari",

  openGraph: {
    title: "Sabhya Agrahari | Software Developer",
    description:
      "Explore projects, skills, and experience in Full Stack Development, AI/ML, and scalable system design.",
    url: "https://yourdomain.com",
    siteName: "Sabhya Portfolio",
    images: [
      {
        url: "/profile.jpg", 
        width: 1200,
        height: 630,
        alt: "Sabhya Agrahari Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sabhya Agrahari Portfolio",
    description:
      "Software Developer | Python |  Full Stack | AI/ML",
    images: ["/profile.jpg"],
  },
};

// ✅ Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white antialiased flex flex-col min-h-screen overflow-x-hidden">

       

       <Suspense fallback={<Loader />}>


          {/* 📦 Main Content */}
          <main className="flex-1">
            {children}
            {<Sidebar />}
          </main>

         

        </Suspense>

      </body>
    </html>
  );
}