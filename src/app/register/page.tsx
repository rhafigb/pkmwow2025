import Link from 'next/link';
import Image from 'next/image';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Kolom Kiri: Form Pendaftaran */}
          <div className="md:w-1/2 p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <Image 
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjMTZhMzQ2IiBkPSJNNDQ4IDBINjRDMjguNyAwIDAgMjguNyAwIDY0djM4NGMwIDM1LjMgMjguNyA2NCA2NCA2NGgzODRjMzUuMyAwIDY0LTI4LjcgNjQtNjRWNjRjMC0zNS4zLTI4LjctNjQtNjQtNjZ6TTE2MCAzODRIMTA0di0xMDNoNTZ2MTAzem0wLTE1MUgxMDRWMTI4aDU2djEwNXptMTQ0IDE1MUgyMDh2LTEwM2g5NnYxMDN6bTAtMTUxSDIwOFYxMjhoOTZ2MTA1eiIvPw==" 
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
              <h2 className="text-2xl font-semibold text-gray-800">Buat Akun Baru</h2>
              <p className="text-gray-600 mt-2">
                Bergabunglah dengan revolusi daur ulang limbah dan ciptakan nilai dari yang sebelumnya tidak berguna.
              </p>
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input 
                  type="text" 
                  id="fullName" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" 
                  placeholder="Masukkan nama lengkap Anda" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" 
                  placeholder="Alamat email Anda" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input 
                  type="password" 
                  id="password" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" 
                  placeholder="Buat password yang kuat" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Konfirmasi Password
                </label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition" 
                  placeholder="Ulangi password Anda" 
                  required 
                />
              </div>
              
              <div className="flex items-start mt-4">
                <div className="flex items-center h-5">
                  <input 
                    id="terms" 
                    type="checkbox" 
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" 
                    required 
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-600">
                    Saya setuju dengan{' '}
                    <Link href="#" className="text-green-600 hover:text-green-700 font-medium">
                      Syarat & Ketentuan
                    </Link>{' '}
                    dan{' '}
                    <Link href="#" className="text-green-600 hover:text-green-700 font-medium">
                      Kebijakan Privasi
                    </Link>{' '}
                    WOW
                  </label>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition flex items-center justify-center mt-6"
              >
                <i className="bi bi-box-arrow-in-right mr-2"></i>
                Daftar Sekarang
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Sudah punya akun? 
                <Link 
                  href="/login" 
                  className="text-green-600 hover:text-green-700 font-medium ml-1"
                >
                  Masuk disini
                </Link>
              </p>
            </div>
          </div>
          
          {/* Kolom Kanan: Fitur */}
          <div className="md:w-1/2 bg-green-50 p-8 md:p-12">
            <div className="text-center md:text-left mb-2">
              <h2 className="text-2xl font-semibold text-gray-800">Bergabung dengan Komunitas WOW</h2>
              <p className="text-gray-600 mt-2">
                Daftar sekarang untuk menjadi bagian dari revolusi daur ulang limbah dan mulai menciptakan nilai dari apa yang sebelumnya dianggap tidak berguna.
              </p>
            </div>
            
            <div className="space-y-6 mt-8">
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