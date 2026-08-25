import type { Metadata } from "next";
import { Space_Grotesk, Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk-fallback",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora-fallback",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono-fallback",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Raviteja Karnati | AI Engineer | Full Stack Developer",
  description: "Portfolio of Raviteja Karnati showcasing AI projects, Full Stack Development, Large Language Models, Neural Networks, and software engineering experience.",
  keywords: "AI Engineer, Full Stack Developer, Python, Flask, React, Next.js, Node.js, LLM, RAG, Neural Networks, Software Engineer, Portfolio",
  alternates: {
    canonical: "https://raviteja.space",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${lora.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
