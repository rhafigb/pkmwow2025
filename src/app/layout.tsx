import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import LayoutWrapper from './LayoutWrapper';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WOW (Waste to Worth) - Platform E-commerce Limbah',
  description: 'Platform e-commerce berbasis AI yang menghubungkan penyedia limbah dengan pengrajin kreatif',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" />
      </head>
      <body className={montserrat.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}