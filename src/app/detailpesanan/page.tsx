// src/app/detailpesanan/page.tsx
'use client';

import Link from 'next/link';

export default function DetailPesanan() {
  // Fungsi untuk menangani aksi
  const handleProsesPengiriman = () => {
    alert('Proses pengiriman akan dilakukan');
  };

  const handleHubungiPembeli = () => {
    alert('Membuka chat dengan pembeli');
  };

  const handleCetakInvoice = () => {
    alert('Mencetak invoice');
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Detail Pesanan Section */}
      <div id="order-detail-section" className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 sm:mb-0">Detail Pesanan #WTW2023-009</h2>
          <Link 
            href="/admin" 
            className="bg-white border border-gray-300 hover:border-primary text-gray-700 hover:text-primary py-2 px-4 rounded-lg font-medium transition flex items-center justify-center"
          >
            <i className="bi bi-arrow-left mr-2"></i> Kembali
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Informasi Pesanan */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Informasi Pesanan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <strong className="text-sm text-gray-700 mb-1">ID Pesanan:</strong>
                  <span className="text-gray-800 font-mono">WTW2023-009</span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-sm text-gray-700 mb-1">Tanggal Pesanan:</strong>
                  <span className="text-gray-800">15 Mei 2023, 14:30 WIB</span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-sm text-gray-700 mb-1">Status:</strong>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs inline-block">Menunggu Pengiriman</span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-sm text-gray-700 mb-1">Metode Pembayaran:</strong>
                  <span className="text-gray-800">Transfer Bank BCA</span>
                </div>
                <div className="flex flex-col md:col-span-2">
                  <strong className="text-sm text-gray-700 mb-1">Status Pembayaran:</strong>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs inline-block">Terverifikasi</span>
                </div>
              </div>
            </div>
            
            {/* Informasi Pembeli */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Informasi Pembeli</h3>
              <div className="space-y-3">
                <div className="flex flex-col">
                  <strong className="text-sm text-gray-700 mb-1">Nama:</strong>
                  <span className="text-gray-800">Ahmad Sutisna</span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-sm text-gray-700 mb-1">Email:</strong>
                  <span className="text-gray-800">ahmad.sutisna@email.com</span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-sm text-gray-700 mb-1">Telepon:</strong>
                  <span className="text-gray-800">+628123456789</span>
                </div>
              </div>
            </div>
            
            {/* Alamat Pengiriman */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Alamat Pengiriman</h3>
              <div className="space-y-3">
                <div className="flex flex-col">
                  <strong className="text-sm text-gray-700 mb-1">Alamat:</strong>
                  <span className="text-gray-800">Jl. Merdeka No. 45, Jakarta Selatan, 12540</span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-sm text-gray-700 mb-1">Kurir:</strong>
                  <span className="text-gray-800">JNE Reguler</span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-sm text-gray-700 mb-1">Estimasi:</strong>
                  <span className="text-gray-800">2-3 hari kerja</span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-sm text-gray-700 mb-1">Biaya Pengiriman:</strong>
                  <span className="text-gray-800">Rp 15.000</span>
                </div>
              </div>
            </div>
            
            {/* Riwayat Status */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Riwayat Status</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
                <div className="space-y-6 pl-10">
                  <div className="relative">
                    <div className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                    <div>
                      <div className="font-medium text-gray-800">Pesanan Dibuat</div>
                      <div className="text-sm text-gray-500">15 Mei 2023, 14:30 WIB</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                    <div>
                      <div className="font-medium text-gray-800">Pembayaran Diverifikasi</div>
                      <div className="text-sm text-gray-500">15 Mei 2023, 15:45 WIB</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                    <div>
                      <div className="font-medium text-gray-800">Menunggu Pengiriman</div>
                      <div className="text-sm text-gray-500">15 Mei 2023, 16:00 WIB</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            {/* Produk yang Dipesan */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Produk yang Dipesan</h3>
              <div className="border border-gray-200 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img src="https://via.placeholder.com/80" alt="Tas Denim" className="w-16 h-16 object-cover rounded-lg" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 mb-1">Tas dari Bahan Denim Daur Ulang</h4>
                    <div className="text-primary font-semibold mb-1">Rp 150.000</div>
                    <div className="text-sm text-gray-600">Jumlah: 1</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 border-t border-gray-200 pt-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal Produk:</span>
                  <span>Rp 150.000</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Biaya Pengiriman:</span>
                  <span>Rp 15.000</span>
                </div>
                <div className="flex justify-between font-semibold text-lg text-gray-800 pt-2 border-t border-gray-200">
                  <span>Total Pembayaran:</span>
                  <span>Rp 165.000</span>
                </div>
              </div>
            </div>
            
            {/* Aksi untuk Penjual */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Aksi</h3>
              <div className="space-y-3">
                <button 
                  onClick={handleProsesPengiriman}
                  className="w-full bg-primary hover:bg-primaryDark text-white py-2 px-4 rounded-lg font-medium transition flex items-center justify-center"
                >
                  <i className="bi bi-truck mr-2"></i> Proses Pengiriman
                </button>
                <button 
                  onClick={handleHubungiPembeli}
                  className="w-full bg-white border border-gray-300 hover:border-primary text-gray-700 hover:text-primary py-2 px-4 rounded-lg font-medium transition flex items-center justify-center"
                >
                  <i className="bi bi-chat-dots mr-2"></i> Hubungi Pembeli
                </button>
                <button 
                  onClick={handleCetakInvoice}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-medium transition flex items-center justify-center"
                >
                  <i className="bi bi-printer mr-2"></i> Cetak Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}