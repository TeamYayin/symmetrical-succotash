import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Outfit, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

const notoSansTelugu = Noto_Sans_Telugu({
  variable: "--font-telugu",
  subsets: ["telugu"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Yayin AI Lab",
  description: "Yayin AI Lab is a technology company that builds robust digital products for businesses and educational institutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${outfit.variable} ${notoSansTelugu.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
