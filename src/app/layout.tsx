import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

import { CartProvider } from "@/app/context/cartContext";
import { GoogleAnalytics } from '@next/third-parties/google';

const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://onigiri-five.vercel.app'),
  title: {
    default: 'Onigiri',
    template: '%s | Onigiri Store',
  },
  description: "E-commerce store",
  twitter: {
    card: 'summary_large_image'
  },
  authors: [{
    name: 'Vedant Dhotre',
    url: 'vedant.dhotre@somaiya.edu',
  }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cairo.className}>
          <CartProvider>
            <div className="px-4 md:px-12">
              {children}
            </div>
          </CartProvider>
          <Toaster />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID || "G-R88TXVKF0G"} />
        </body>
      </html>
    </ClerkProvider>
  );
}
