import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import CssBaseline from "@mui/material/CssBaseline";
import "./globals.css";
import Footer from "@/components/Footer";

const dancingScript = Inter({ subsets: ["latin"], weight: ["400", "700"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baby Shower",
  description: "Baby shower de Emma Sylvana",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.className}`}
    >
      <body>
        <CssBaseline />
        {children}
        <Footer />
      </body>
    </html>
  );
}
