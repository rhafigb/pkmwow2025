'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi pengiriman email
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Kolom Kiri: Form Lupa Password */}
          <div className="md:w-1/2 p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <Image 
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjMTZhMzQ2IiBkPSJNNDQ4IDBINjRDMjguNyAwIDAgMjguNyAwIDY0djM4NGMwIDM极LjMgMjguNyA2NCA2NCA2NGgzODRjMzUuMyAwIDY0LTI4LjcgNjQtNjRWNjRjMC0zNS4zLTI4LjctNjQtNjQtNjR6TTE2MCAzODRIMTA0di0xMDNoNTZ2MTAzem0wLTE1MUgxMDRWMTI4aDU2djEwNXptMTQ0IDE1MUgyMDh2LTEwM2g5NnYxMDN6bTAtMTUxSDIwOFYxMjhoOTZ2MTA1eiIvPw==" 
                alt="WOW Logo" 
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <h1 className="text-2xl font-bold text-gray-800 ml-3">
                WOW <span className="text-green-600">(Waste to Worth)</span>
              </h1>
            </div>
            
            <div className="text-center md:text-left mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Reset Password</h2>
              <p className="text-gray-600 mt-2">
                Masukkan email Anda yang terdaftar, kami akan mengirimkan link untuk reset password.
              </p>
            </div>

            {/* Success Message (Awalnya Tersembunyi) */}
            {showSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                <div className="flex items-center">
                  <i className="bi bi-check-circle text-green-600 mr-2"></i>
                  <span>Link reset password telah dikirim ke email Anda!</span>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Alamat Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" 
                  placeholder="Masukkan alamat email Anda" 
                  required 
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition flex items-center justify-center"
              >
                <i className="bi bi-envelope mr-2"></i>
                Kirim Link Reset
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <Link 
                href="/login" 
                className="text-green-600 hover:text-green-700 font-medium flex items-center justify-center"
              >
                <i className="bi bi-arrow-left mr-2"></i>
                Kembali ke halaman login
              </Link>
            </div>
          </div>
          
          {/* Kolom Kanan: Fitur */}
          <div className="md:w-1/2 bg-green-50 p-8 md:p-12">
            <div className="text-center md:text-left mb-2">
              <h2 className="text-2xl font-semibold text-gray-800">Lupa Password?</h2>
              <p className="text-gray-600 mt-2">
                Jangan khawatir! Kami akan membantu Anda mengatur ulang password Anda dan kembali ke akun WOW Anda.
              </p>
            </div>
            
            <div className="space-y-6 mt-8">
              {/* Fitur 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                  <i className="bi bi-shield-check text-green-600 text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Keamanan Terjamin</h4>
                  <p className="text-gray-600 mt-1">
                    Proses reset password dilakukan dengan protokol keamanan terbaik untuk melindungi data Anda.
                  </p>
                </div>
              </div>
              
              {/* Fitur 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                  <i className="bi bi-lightning-charge text-green-600 text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Proses Cepat</h4>
                  <p className="text-gray-600 mt-1">
                    Dapatkan link reset password langsung ke email Anda dalam hitungan menit.
                  </p>
                </div>
              </div>
              
              {/* Fitur 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                  <i className="bi bi-headset text-green-600 text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Bantuan 24/7</h4>
                  <p className="text-gray-600 mt-1">
                    Tim support kami siap membantu Anda kapan saja jika mengalami kendala.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}