import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "AI Agent Mastery - La tua accademia per creare agenti AI",
  description: "Impara a creare agenti AI professionali con il nostro corso completo. Trasforma la tua carriera con le competenze del futuro.",
  keywords: "AI, agenti AI, intelligenza artificiale, corso, formazione, programmazione, machine learning",
  authors: [{ name: "AI Agent Mastery" }],
  openGraph: {
    title: "AI Agent Mastery - La tua accademia per creare agenti AI",
    description: "Impara a creare agenti AI professionali con il nostro corso completo.",
    url: "https://aiagentmastery.it",
    siteName: "AI Agent Mastery",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Agent Mastery",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Mastery - La tua accademia per creare agenti AI",
    description: "Impara a creare agenti AI professionali con il nostro corso completo.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
