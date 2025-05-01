import type { Metadata } from "next";
import { Playfair_Display, Gloria_Hallelujah } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const gloriaHallelujah = Gloria_Hallelujah({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gloria",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JIMMY | Software Engineer",
  description: "Crafting intelligent digital products with thoughtful design and powerful code.",
  icons: {
    icon: '/vercel.svg', // or '/favicon.png'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${gloriaHallelujah.variable}`}>
      <body className="antialiased min-h-screen bg-white text-black">
        {children}
      </body>
    </html>
  );
}
