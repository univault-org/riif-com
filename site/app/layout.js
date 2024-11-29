import { Providers } from "./providers";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import "../styles/globals.css";

export const metadata = {
  metadataBase: new URL("https://riif.com"),
  title: {
    default: "RIIF - Play Joyfully",
    template: "%s | RIIF",
  },
  description:
    "The World's First Artificial Intelligence Operating System - AIOS for Secure AI Play",
  keywords: [
    "artificial intelligence",
    "AI operating system",
    "AIOS",
    "secure AI",
    "AI play",
    "secure computing",
    "RIIF",
  ],
  authors: [{ name: "RIIF" }],
  creator: "RIIF",
  publisher: "RIIF",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://riif.com",
    siteName: "RIIF",
    title: "RIIF - Play Joyfully",
    description:
      "The World's First Artificial Intelligence Operating System - AIOS for Secure AI Play",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RIIF - Play Joyfully",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RIIF - Play Joyfully",
    description:
      "The World's First Artificial Intelligence Operating System - AIOS for Secure AI Play",
    images: ["/R II F_logo.png"],
  },
  icons: {
    icon: [
      { url: "/R II F_logo.png", sizes: "192x192", type: "image/png" },
      {
        url: "/R II F_logo_no_red_play.png",
        sizes: "192x192",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [{ url: "/R II F_logo.png", sizes: "192x192" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Cormorant+Garamond:wght@500&family=Quicksand:wght@500&family=Crimson+Pro:wght@500&display=swap"
          rel="stylesheet"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className="min-h-screen bg-black transition-colors duration-200">
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
