import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // title: "2025 WONHO WORLD TOUR",
  // description: "<STAY AWAKE>: North America",
  title: "Coming Soon",
  description: "Coming Soon",
  icons: {
    icon: "/favicon.png", // public 폴더에 favicon.png 파일 추가
    apple: "/apple-icon.png", // 선택사항: Apple 기기용
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Script
          src="https://embed.laylo.com/laylo-sdk.js"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}
