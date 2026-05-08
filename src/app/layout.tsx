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

const siteUrl = "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Software Developer",
  description:
    "Sabhya Agrahari is a Software Developer specializing in Python, Java, Full Stack Development, and AI/ML.",

  openGraph: {
    title: "Sabhya Agrahari | Software Developer",
    description:
      "Explore projects, skills, and experience in Full Stack Development, AI/ML, and scalable system design.",

    url: siteUrl,

    siteName: "Sabhya Portfolio",

    images: [
      {
        url: `${siteUrl}/Image.jpg`,
        width: 630,
        height: 630,
        alt: "Sabhya Agrahari Portfolio",
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sabhya Agrahari Portfolio",
    description:
      "Software Developer | Python | Full Stack | AI/ML",
    images: [`${siteUrl}/Image.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white antialiased flex flex-col min-h-screen overflow-x-hidden">

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