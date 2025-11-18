import type { Metadata } from "next";
import "./globals.css";

// Using system font stack for body text, see tailwind.config.js for font-sans.

export const metadata: Metadata = {
  title: "Fahmi Sinergia: Software Engineer",
  description: "Fahmi Sinergia: Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
