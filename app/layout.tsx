import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";

// Archivo a un axe de largeur : étiré à 125% pour les gros titres
// (effet "extended heavy"), largeur normale pour les intertitres.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lecoin-Triathlon",
  description: "Entraînement du jour, bibliothèque de programmes et suivi personnalisé pour triathlètes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${archivo.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
