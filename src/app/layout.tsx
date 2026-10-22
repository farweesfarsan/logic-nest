import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/data/profile";

const description = `Explore the portfolio of ${profile.name}, featuring web development, digital experiences, modern interfaces, and selected projects.`;
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined;

export const metadata: Metadata = {
  metadataBase,
  title: `${profile.name} | Developer & Digital Experience Designer`,
  description,
  openGraph: {
    title: `${profile.name} | Developer & Digital Experience Designer`,
    description,
    type: "website",
    ...(metadataBase ? { images: [{ url: profile.portrait, alt: profile.portraitAlt }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Developer & Digital Experience Designer`,
    description,
    ...(metadataBase ? { images: [profile.portrait] } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#050609",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
