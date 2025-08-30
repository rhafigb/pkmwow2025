'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk status login

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              <span className="text-primary">WOW</span>
              <span className="text-gray-600">(Waste to Worth)</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-primary transition flex items-center"
                >
                  <i className="bi bi-house-door mr-1"></i>
                  Beranda
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketplace" 
                  className="text-gray-600 hover:text-primary transition flex items-center"
                >
                  <i className="bi bi-cart3 mr-1"></i>
                  Pasar
                </Link>
              </li>
              <li>
                <Link 
                  href="/community" 
                  className="text-gray-600 hover:text-primary transition flex items-center"
                >
                  <i className="bi bi-people mr-1"></i>
                  Komunitas
                </Link>
              </li>
              <li>
                <Link 
                  href="/education" 
                  className="text-gray-600 hover:text-primary transition flex items-center"
                >
                  <i className="bi bi-book mr-1"></i>
                  Edukasi
                </Link>
              </li>
            </ul>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Default state (not logged in) */}
            {!isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <Link 
                  href="/login" 
                  className="bg-white border border-primary text-primary py-2 px-4 rounded-lg font-medium hover:bg-primaryLight transition flex items-center"
                >
                  <i className="bi bi-box-arrow-in-right mr-1"></i>
                  Masuk
                </Link>
                <Link 
                  href="/register" 
                  className="bg-primary hover:bg-primaryDark text-white py-2 px-4 rounded-lg font-medium transition flex items-center"
                >
                  <i className="bi bi-person-plus mr-1"></i>
                  Daftar
                </Link>
              </div>
            ) : (
              /* Logged in state */
              <div className="flex items-center space-x-4">
                <Link 
                  href="/cart" 
                  className="relative text-gray-600 hover:text-primary transition" 
                  title="Keranjang"
                >
                  <i className="bi bi-cart3 text-xl"></i>
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </Link>
                <Link 
                  href="/chat" 
                  className="text-gray-600 hover:text-primary transition" 
                  title="Pesan"
                >
                  <i className="bi bi-chat-dots text-xl"></i>
                </Link>
                <div className="relative">
                  <Link 
                    href="/profile" 
                    className="text-gray-600 hover:text-primary transition" 
                    title="Profil"
                  >
                    <i className="bi bi-person-circle text-xl"></i>
                  </Link>
                </div>
                <button 
                  className="text-gray-600 hover:text-primary transition flex items-center" 
                  title="Keluar"
                  onClick={() => setIsLoggedIn(false)}
                >
                  <i className="bi bi-box-arrow-right text-xl"></i>
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-600 hover:text-primary focus:outline-none focus:text-primary"
              onClick={toggleMobileMenu}
            >
              <i className="bi bi-list text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            href="/" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-primaryLight transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="bi bi-house-door mr-2"></i>
            Beranda
          </Link>
          <Link 
            href="/marketplace" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-primaryLight transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="bi bi-cart3 mr-2"></i>
            Pasar
          </Link>
          <Link 
            href="/community" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-primaryLight transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="bi bi-people mr-2"></i>
            Komunitas
          </Link>
          <Link 
            href="/education" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-primaryLight transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="bi bi-book mr-2"></i>
            Edukasi
          </Link>
        </div>
      </div>
    </header>
  );
}