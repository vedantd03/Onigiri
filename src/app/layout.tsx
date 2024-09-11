import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

import { CartProvider } from "@/app/context/cartContext";
import Script from 'next/script';

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
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

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
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
          >
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GA_TRACKING_ID}');
            `}
          </Script>
        </body>
      </html>
    </ClerkProvider>
  );
}
