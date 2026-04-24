import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karima Mansour | Portfolio",
  description: "Full-Stack Developer & UI/UX Designer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}