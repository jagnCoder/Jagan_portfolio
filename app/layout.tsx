import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/ui/site-shell";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Jagan Mohan Dash | Full-Stack Developer Portfolio",
  description:
    "Official portfolio and project repository of Jagan Mohan Dash, Computer Science undergraduate and Full-Stack Software Developer.",
  metadataBase: new URL("https://jagncoder.github.io/Portfolio/"),
  openGraph: {
    title: "Jagan Mohan Dash | Full-Stack Developer Portfolio",
    description:
      "Secure, scalable full-stack development portfolio with projects in web systems, cybersecurity, and data analytics.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagan Mohan Dash | Full-Stack Developer Portfolio",
    description:
      "Secure, scalable full-stack development portfolio with projects in web systems, cybersecurity, and data analytics."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-surface font-body text-slate-100 antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}