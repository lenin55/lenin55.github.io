import type { Metadata } from 'next';
import { Outfit, Inter, Josefin_Sans } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '700', '900'],
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
  weight: ['400', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '600'],
});

export const metadata: Metadata = {
  title: 'Lenin Mariya Joseph | Senior Web Developer & Ex-Zoho',
  description: 'Senior Web Developer with 10+ years experience, including 5 years at Zoho. Architecting high-performance Web & AI solutions.',
  openGraph: {
    type: 'website',
    url: 'https://lenin55.github.io/',
    title: 'Lenin Mariya Joseph | Senior Web Developer & Ex-Zoho',
    description: 'Senior Web Developer with 10+ years experience, including 5 years at Zoho. Architecting high-performance Web & AI solutions.',
    images: [
      {
        url: 'https://lenin55.github.io/preview-image.png',
        width: 1200,
        height: 630,
        alt: 'Lenin Mariya Joseph - Senior Web Developer & Ex-Zoho',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lenin Mariya Joseph | Senior Web Developer & Ex-Zoho',
    description: 'Senior Web Developer with 10+ years experience, including 5 years at Zoho. Architecting high-performance Web & AI solutions.',
    images: ['https://lenin55.github.io/preview-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} ${josefin.variable} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
