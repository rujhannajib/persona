import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/tailwind.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rujhan Najib's Portfolio",
  description: "A showcase of Rujhan Najib’s work, skills, and projects.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rujhan Najib",
              url: "https://rujhannajib.com",
              logo: "https://rujhannajib.com/logo.png",
              description: "A showcase of Rujhan Najib's work, skills, and projects.",
            }),
          }}
        />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
