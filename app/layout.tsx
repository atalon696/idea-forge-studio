import type { Metadata } from "next";
import {
  Inter,
  Saira,
  Saira_Semi_Condensed,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-saira",
  display: "swap",
});

const sairaCond = Saira_Semi_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-saira-cond",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "desarrollo de software a medida",
    "aplicaciones web y móviles",
    "soluciones de IA",
    "estudio de producto",
    "Idea Forge Studio",
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${saira.variable} ${sairaCond.variable} ${jetbrains.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
