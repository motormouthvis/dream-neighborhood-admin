import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const dnSans = Plus_Jakarta_Sans({
  variable: "--font-dn-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dream Neighborhood",
  description: "Manage your Neighborhood Explorer, reports, leads, and subscription",
  icons: {
    icon: "/dn-logo-mark.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d5c52",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dnSans.variable} ${geistMono.variable} antialiased`}>
      <body className={`${dnSans.className} bg-white text-zinc-900`}>
        {children}
        <Toaster />
        {/* Live Dream Neighborhood Popup Widget — registered to this site URL on the server */}
        <Script src="https://app.dreamneighborhood.com/explorer/sdk.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
