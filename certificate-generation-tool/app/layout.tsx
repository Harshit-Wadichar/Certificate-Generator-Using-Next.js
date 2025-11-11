import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Certificate Generator - Aiking Solution',
  description: 'Generate professional certificates with Aiking Solution',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}