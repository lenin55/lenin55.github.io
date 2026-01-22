import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '700', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '600'],
});

export const metadata: Metadata = {
  title: 'Lenin Mariya Joseph | Senior Web Developer & AI Architect',
  description: 'Portfolio of Lenin Mariya Joseph - Architecting the future of Web & AI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
