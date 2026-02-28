import type { Metadata } from 'next';
import '../styles/tailwind.css';
import '../styles/theme.css';

export const metadata: Metadata = {
  title: "Rujhan Najib's Portfolio",
  description: 'A showcase of Rujhan Najib’s work, skills, and projects.',
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
