'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Daftar rute yang tidak memerlukan Navbar dan Footer
const authRoutes = ['/login', '/register', '/forgot-password'];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Cek apakah halaman saat ini adalah halaman auth
  const isAuthPage = authRoutes.includes(pathname);

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main className={isAuthPage ? "" : "min-h-screen"}>
        {children}
      </main>
      {!isAuthPage && <Footer />}
    </>
  );
}