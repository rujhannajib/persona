import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rujhanna Jib — Portfolio',
  description: 'Personal portfolio of Rujhanna Jib — developer & designer'
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
