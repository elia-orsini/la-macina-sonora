import type { Metadata } from "next";
import "./globals.css";
import type { Viewport } from "next";

export const metadata: Metadata = {
  title: "La Macina Sonora",
  description:
    "La Macina Sonora: studio di registrazione, produzione, servizi di Mixing e Mastering, service audio e network artistico per realizzare musica, contenuti multimediali ed eventi.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [
      {
        url: "/macina-logo.png",
        width: 2600,
        height: 2600,
        alt: "La Macina Sonora",
      },
    ],
  },
};

export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`no-scrollbar overflow-clip antialiased`}>{children}</body>
    </html>
  );
}
