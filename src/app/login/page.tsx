import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Kolom Kiri: Form Login */}
          <div className="md:w-1/2 p-8 md:p-12">
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">WOW Marketplace</h1>
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">Selamat Datang Kembali</h2>
              <p className="text-gray-600 mb-8">
                Masuk ke akun WOW Anda untuk mengakses marketplace limbah, solusi daur ulang, dan komunitas pengelola limbah terbesar di Indonesia.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" 
                  placeholder="alamat@email.com" 
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Kata Sandi
                </label>
                <input 
                  type="password" 
                  id="password" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" 
                  placeholder="Masukkan kata sandi" 
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="remember" 
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" 
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Ingat saya
                  </label>
                </div>
                
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-green-600 hover:text-green-700 font-medium"
                >
                  Lupa kata sandi?
                </Link>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
              >
                Masuk
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Belum punya akun? 
                <Link 
                  href="/register" 
                  className="text-green-600 hover:text-green-700 font-medium ml-1"
                >
                  Daftar Sekarang
                </Link>
              </p>
            </div>
          </div>
          
          {/* Kolom Kanan: Fitur */}
          <div className="md:w-1/2 bg-green-50 p-8 md:p-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Keunggulan Platform WOW</h3>
            
            <div className="space-y-6">
              {/* Fitur 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                  <i className="bi bi-chat-dots text-green-600 text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Asisten AI</h4>
                  <p className="text-gray-600 mt-1">
                    Dapatkan bantuan instan dari Chatbot cerdas kami untuk semua pertanyaan tentang daur ulang dan platform kami.
                  </p>
                </div>
              </div>
              
              {/* Fitur 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                  <i className="bi bi-search text-green-600 text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Pencarian Visual</h4>
                  <p className="text-gray-600 mt-1">
                    Cari dengan gambar ketika anda tidak tahu nama atau detail dari apa yang anda cari.
                  </p>
                </div>
              </div>
              
              {/* Fitur 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                  <i className="bi bi-graph-up text-green-600 text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Eco Tracker</h4>
                  <p className="text-gray-600 mt-1">
                    Pantau dampak lingkungan positif dari aktivitas anda di platform kami secara real-time.
                  </p>
                </div>
              </div>
              
              {/* Fitur 4 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                  <i className="bi bi-shop text-green-600 text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Pasar</h4>
                  <p className="text-gray-600 mt-1">
                    Temukan solusi terbaik untuk limbah Anda dengan teknologi AI kami.
                  </p>
                </div>
              </div>
              
              {/* Fitur 5 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                  <i className="bi bi-people text-green-600 text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Komunitas</h4>
                  <p className="text-gray-600 mt-1">
                    Bergabung dengan komunitas pengelola limbah terbesar di Indonesia.
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