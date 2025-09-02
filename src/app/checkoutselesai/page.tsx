'use client';

import Image from 'next/image';
import Link from 'next/link';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface EnvironmentalImpact {
  wasteRecycled: number;
  co2Reduced: number;
  energySaved: number;
}

export default function OrderCompletePage() {
  const orderItems: OrderItem[] = [
    {
      id: 'prod001',
      name: 'Botol PET Bekas',
      price: 25000,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'prod002',
      name: 'Kertas Koran Bekas',
      price: 8000,
      quantity: 5,
      image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    }
  ];

  const environmentalImpact: EnvironmentalImpact = {
    wasteRecycled: 7,
    co2Reduced: 12,
    energySaved: 85
  };

  const shippingCost = 15000;
  const discount = 5000;
  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + shippingCost - discount;

  const handleShopAgain = () => {
    // Logic untuk kembali berbelanja
    console.log('Kembali berbelanja');
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Checkout Steps */}
        <div className="flex justify-between mb-8 relative">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
              <i className="bi bi-check-lg"></i>
            </div>
            <div className="ml-2 text-sm font-medium text-primary">Dipesan</div>
          </div>
          <div className="flex-1 h-1 bg-primary mx-2 mt-4"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
              <i className="bi bi-check-lg"></i>
            </div>
            <div className="ml-2 text-sm font-medium text-primary">Dibayar</div>
          </div>
          <div className="flex-1 h-1 bg-primary mx-2 mt-4"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
              <i className="bi bi-check-lg"></i>
            </div>
            <div className="ml-2 text-sm font-medium text-primary">Dikirim</div>
          </div>
          <div className="flex-1 h-1 bg-primary mx-2 mt-4"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">4</div>
            <div className="ml-2 text-sm font-medium text-primary">Selesai</div>
          </div>
        </div>
        
        {/* Order Complete Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3 space-y-6">
            {/* Success Message */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <i className="bi bi-check-circle-fill text-4xl text-green-600"></i>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Pesanan Berhasil Diselesaikan!</h2>
                <p className="text-gray-600">Terima kasih telah berbelanja di WOW Marketplace. Pesanan Anda telah selesai.</p>
              </div>
            </div>
            
            {/* Order Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Informasi Pesanan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <strong className="text-sm text-gray-700">ID Order:</strong>
                  <span className="text-gray-800 font-mono">WOW-123456789</span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-sm text-gray-700">Tanggal Order:</strong>
                  <span className="text-gray-800">12 November 2023</span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-sm text-gray-700">Status:</strong>
                  <span className="text-green-600 font-semibold">Terkirim dan Diterima</span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-sm text-gray-700">Metode Pembayaran:</strong>
                  <span className="text-gray-800">Transfer Bank BCA</span>
                </div>
                <div className="flex flex-col md:col-span-2">
                  <strong className="text-sm text-gray-700">Total Pembayaran:</strong>
                  <span className="text-xl font-bold text-gray-800">Rp{total.toLocaleString('id-ID')}</span>
                </div>
              </div>
            </div>
            
            {/* Environmental Impact */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Dampak Lingkungan dari Pembelian Anda</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="text-3xl font-bold text-green-700">{environmentalImpact.wasteRecycled}</div>
                    <div className="text-sm text-green-600 mb-2">kg</div>
                    <div className="font-medium text-gray-800 mb-1">Limbah Berhasil Didaur Ulang</div>
                    <div className="text-xs text-gray-600">Anda telah membantu mendaur ulang {environmentalImpact.wasteRecycled} kg material limbah</div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="text-3xl font-bold text-blue-700">{environmentalImpact.co2Reduced}</div>
                    <div className="text-sm text-blue-600 mb-2">kg</div>
                    <div className="font-medium text-gray-800 mb-1">Emisi CO₂ Berkurang</div>
                    <div className="text-xs text-gray-600">Berkontribusi mengurangi emisi karbon setara dengan menanam 1 pohon</div>
                  </div>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="text-3xl font-bold text-amber-700">{environmentalImpact.energySaved}</div>
                    <div className="text-sm text-amber-600 mb-2">%</div>
                    <div className="font-medium text-gray-800 mb-1">Energi Tersimpan</div>
                    <div className="text-xs text-gray-600">Menghemat energi yang dibutuhkan untuk produksi material baru</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chatbot Environmental Message */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Pesan dari WOW Assistant</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <i className="bi bi-robot text-white"></i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 mb-1">WOW Assistant</div>
                    <div className="text-gray-700 mb-3">Hai! Dengan pembelian limbah daur ulang ini, Anda telah berkontribusi langsung pada:</div>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
                      <li>Mengurangi polusi tanah dan air dari limbah yang tidak terkelola</li>
                      <li>Mendukung ekonomi sirkular dan pengrajin lokal</li>
                      <li>Menghemat sumber daya alam yang akan digunakan untuk produksi material baru</li>
                      <li>Menciptakan nilai ekonomi dari bahan yang sebelumnya dianggap tidak berguna</li>
                    </ul>
                    <div className="text-gray-700 font-medium">Terima kasih telah menjadi bagian dari solusi lingkungan!</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/"
                className="bg-white border border-gray-300 hover:border-primary text-gray-700 hover:text-primary py-3 px-6 rounded-lg font-medium transition flex-1 text-center"
              >
                Kembali ke Beranda
              </Link>
              <button 
                onClick={handleShopAgain}
                className="bg-primary hover:bg-primaryDark text-white py-3 px-6 rounded-lg font-medium transition flex-1"
              >
                Belanja Lagi
              </button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Ringkasan Pesanan</h3>
              <div className="space-y-4 mb-6">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                    <div className="flex-shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">{item.name}</div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{item.quantity} kg × Rp{item.price.toLocaleString('id-ID')}</span>
                        <span>Rp{(item.price * item.quantity).toLocaleString('id-ID')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 border-t border-gray-200 pt-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>Rp{subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Biaya Pengiriman</span>
                  <span>Rp{shippingCost.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Diskon</span>
                  <span>-Rp{discount.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg text-gray-800 pt-2 border-t border-gray-200">
                  <span>Total Pembayaran</span>
                  <span>Rp{total.toLocaleString('id-ID')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}