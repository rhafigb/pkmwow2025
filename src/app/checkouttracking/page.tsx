'use client';

import Image from 'next/image';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface TrackingStep {
  id: number;
  title: string;
  description: string;
  timestamp: string;
  status: 'completed' | 'current' | 'pending';
}

export default function ShippingStatusPage() {
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

  const trackingSteps: TrackingStep[] = [
    {
      id: 1,
      title: 'Pesanan Diproses',
      description: 'Pesanan sedang disiapkan untuk dikirim',
      timestamp: '12 Nov 2023, 10:30',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Pesanan Dikirim',
      description: 'Pesanan telah diberikan ke kurir',
      timestamp: '13 Nov 2023, 09:15',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Dalam Perjalanan',
      description: 'Pesanan sedang dalam perjalanan ke kota tujuan',
      timestamp: '13 Nov 2023, 14:20',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Sortir Pusat',
      description: 'Pesanan tiba di pusat sortir',
      timestamp: '14 Nov 2023, 08:45',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Sortir Cabang',
      description: 'Pesanan tiba di cabang tujuan',
      timestamp: 'Menunggu update',
      status: 'current'
    },
    {
      id: 6,
      title: 'Dikirim ke Alamat',
      description: 'Pesanan sedang dikirim ke alamat penerima',
      timestamp: 'Menunggu update',
      status: 'pending'
    },
    {
      id: 7,
      title: 'Terkirim',
      description: 'Pesanan telah diterima',
      timestamp: 'Menunggu update',
      status: 'pending'
    }
  ];

  const shippingCost = 15000;
  const discount = 5000;
  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + shippingCost - discount;

  const handleTrackJNE = () => {
    // Logic untuk melacak di website JNE
    window.open('https://www.jne.co.id/id/tracking/trace', '_blank');
  };

  const handleContactSeller = () => {
    // Logic untuk menghubungi penjual
    console.log('Menghubungi penjual');
  };

  const handleOrderReceived = () => {
    // Logic untuk konfirmasi pesanan diterima
    console.log('Pesanan sudah diterima');
  };

  const getStepColor = (status: TrackingStep['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-primary';
      case 'current':
        return 'bg-primary';
      case 'pending':
        return 'bg-gray-300';
      default:
        return 'bg-gray-300';
    }
  };

  const getTextColor = (status: TrackingStep['status']) => {
    switch (status) {
      case 'completed':
        return 'text-gray-800';
      case 'current':
        return 'text-gray-800';
      case 'pending':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
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
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">3</div>
            <div className="ml-2 text-sm font-medium text-primary">Dikirim</div>
          </div>
          <div className="flex-1 h-1 bg-gray-300 mx-2 mt-4"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">4</div>
            <div className="ml-2 text-sm font-medium text-gray-600">Selesai</div>
          </div>
        </div>
        
        {/* Shipping Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Status Pengiriman</h2>
              <p className="text-gray-600 mb-6">Pesanan Anda sedang dalam proses pengiriman</p>
              
              {/* Order Information */}
              <div className="bg-primaryLight rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Informasi Pengiriman</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex flex-col">
                    <strong className="text-sm text-gray-700">ID Order:</strong>
                    <span className="text-gray-800">WOW-123456789</span>
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-sm text-gray-700">Kurir:</strong>
                    <span className="text-gray-800">JNE Reguler</span>
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-sm text-gray-700">No. Resi:</strong>
                    <span className="text-gray-800 font-mono">JNE1234567890</span>
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-sm text-gray-700">Status:</strong>
                    <span className="text-primary font-semibold">Dalam Perjalanan</span>
                  </div>
                  <div className="flex flex-col md:col-span-2">
                    <strong className="text-sm text-gray-700">Estimasi Tiba:</strong>
                    <span className="text-gray-800">2-3 hari kerja</span>
                  </div>
                </div>
              </div>
              
              {/* Shipping Tracking */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Lacak Pengiriman</h3>
                <div className="relative">
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
                  <div className="space-y-8 pl-10">
                    {trackingSteps.map((step) => (
                      <div key={step.id} className="relative">
                        <div className={`absolute -left-7 top-1 w-4 h-4 rounded-full ${getStepColor(step.status)} border-4 border-white`}></div>
                        <div>
                          <div className={`font-medium ${getTextColor(step.status)}`}>
                            {step.title}
                          </div>
                          <div className={`text-sm ${step.status === 'pending' ? 'text-gray-500' : 'text-gray-600'}`}>
                            {step.description}
                          </div>
                          <div className={`text-xs mt-1 ${step.status === 'pending' ? 'text-gray-400' : 'text-gray-500'}`}>
                            {step.timestamp}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Delivery Address */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Alamat Pengiriman</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="flex flex-col">
                      <strong className="text-sm text-gray-700">Nama Penerima:</strong>
                      <span className="text-gray-800">Ahmad Recycler</span>
                    </div>
                    <div className="flex flex-col">
                      <strong className="text-sm text-gray-700">Alamat:</strong>
                      <span className="text-gray-800">
                        Jl. Daur Ulang No. 123, Kel. Lingkungan Hijau, Kec. Eco Friendly, Jakarta Selatan
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <strong className="text-sm text-gray-700">Telepon:</strong>
                      <span className="text-gray-800">081234567890</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleTrackJNE}
                  className="bg-primary hover:bg-primaryDark text-white py-2 px-4 rounded-lg font-medium transition flex items-center justify-center"
                >
                  <i className="bi bi-truck mr-2"></i> Lacak di JNE
                </button>
                <button 
                  onClick={handleContactSeller}
                  className="bg-white border border-gray-300 hover:border-primary text-gray-700 hover:text-primary py-2 px-4 rounded-lg font-medium transition flex items-center justify-center"
                >
                  <i className="bi bi-chat-dots mr-2"></i> Hubungi Penjual
                </button>
                <button 
                  onClick={handleOrderReceived}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition flex items-center justify-center"
                >
                  <i className="bi bi-check-circle mr-2"></i> Pesan Sudah Diterima
                </button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
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