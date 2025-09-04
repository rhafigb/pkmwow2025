'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Daftar rute yang tidak memerlukan Navbar dan Footer
const noNavbarFooterRoutes = [
  '/login', 
  '/register', 
  '/forgot-password',
  '/chat',
  '/cart',
  '/checkout',
  '/payment',
  '/checkouttracking',
  '/profile',
  '/admin',
  '/checkoutselesai'
];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Cek apakah halaman saat ini adalah halaman yang tidak memerlukan Navbar dan Footer
  const shouldHideNavbarFooter = noNavbarFooterRoutes.some(route => 
    pathname.startsWith(route)
  );

  return (
    <>
      {!shouldHideNavbarFooter && <Navbar />}
      <main className={shouldHideNavbarFooter ? "" : "min-h-screen"}>
        {children}
      </main>
      {!shouldHideNavbarFooter && <Footer />}
    </>
  );
}