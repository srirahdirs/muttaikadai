import "./globals.css";
import { Suspense } from "react";
import { fonts } from "../fonts/fonts";
import { CartProvider } from "../context/CartContext";
import RouteLoaderProvider from "../components/RouteLoaderProvider";
import { WishlistProvider } from "../context/WishlistContext";

export const metadata = {
  metadataBase: new URL("https://muttaikadai.com"),
  title: {
    default: "Muttaikadai - Fresh Eggs in Coimbatore | Farm Eggs Home Delivery",
    template: "%s | Muttaikadai",
  },
  description:
    "Buy fresh farm eggs in Coimbatore. Country eggs, free-range eggs & organic eggs delivered to your doorstep. Order online from Muttaikadai - your trusted egg store.",
  keywords: [
    "fresh eggs Coimbatore",
    "farm eggs delivery",
    "country eggs",
    "free range eggs",
    "organic eggs",
    "egg delivery Coimbatore",
    "muttaikadai",
  ],
  authors: [{ name: "Muttaikadai", url: "https://muttaikadai.com" }],
  creator: "Muttaikadai",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://muttaikadai.com",
    siteName: "Muttaikadai",
    title: "Muttaikadai - Fresh Eggs in Coimbatore",
    description: "Buy fresh farm eggs in Coimbatore. Country eggs, free-range & organic eggs delivered to your doorstep.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Muttaikadai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muttaikadai - Fresh Eggs in Coimbatore",
    description: "Buy fresh farm eggs in Coimbatore. Delivered to your doorstep.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://muttaikadai.com",
  },
  verification: {
    // Add when you have: google: "your-google-verification-code",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Muttaikadai",
  description: "Fresh farm eggs delivery in Coimbatore - country eggs, free-range eggs, organic eggs.",
  url: "https://muttaikadai.com",
  telephone: "+91-9663460555",
  email: "nkarthikeyan@live.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Poo thottam (near BSNL tower), Vadavalli, V.N Palayam",
    addressLocality: "Coimbatore",
    postalCode: "641669",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: "Coimbatore",
  priceRange: "₹",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonts}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CartProvider>
          <WishlistProvider>
            <Suspense fallback={children}>
              <RouteLoaderProvider>{children}</RouteLoaderProvider>
            </Suspense>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
