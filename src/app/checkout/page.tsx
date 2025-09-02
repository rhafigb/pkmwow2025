'use client';

import { useState } from 'react';
import Image from 'next/image';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState('jne');
  const [paymentMethod, setPaymentMethod] = useState('bankTransfer');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');

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

  const shippingCost = 15000;
  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + shippingCost;

  const handleSubmitOrder = () => {
    // Logic untuk menyelesaikan pesanan
    console.log('Pesanan diselesaikan');
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Progress Steps */}
        <div className="flex justify-between mb-8 relative">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">1</div>
            <div className="ml-2 text-sm font-medium text-primary">Dipesan</div>
          </div>
          <div className="flex-1 h-1 bg-primary mx-2 mt-4"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">2</div>
            <div className="ml-2 text-sm font-medium text-gray-600">Dibayar</div>
          </div>
          <div className="flex-1 h-1 bg-gray-300 mx-2 mt-4"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">3</div>
            <div className="ml-2 text-sm font-medium text-gray-600">Dikirim</div>
          </div>
          <div className="flex-1 h-1 bg-gray-300 mx-2 mt-4"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">4</div>
            <div className="ml-2 text-sm font-medium text-gray-600">Selesai</div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3 space-y-6">
            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Alamat Pengiriman</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Alamat Lengkap</label>
                  <textarea 
                    id="address" 
                    rows={3} 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">Provinsi</label>
                    <input 
                      type="text" 
                      id="province" 
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Kota/Kabupaten</label>
                    <input 
                      type="text" 
                      id="city" 
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">Kecamatan</label>
                    <input 
                      type="text" 
                      id="district" 
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">Kode Pos</label>
                    <input 
                      type="text" 
                      id="postalCode" 
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  />
                </div>
                
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Catatan (Opsional)</label>
                  <textarea 
                    id="notes" 
                    rows={2} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                  ></textarea>
                </div>
              </form>
            </div>
            
            {/* Shipping Method */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Metode Pengiriman</h2>
              <div className="space-y-3">
                <div 
                  className={`border rounded-lg p-4 transition cursor-pointer ${
                    shippingMethod === 'jne' ? 'border-primary' : 'border-gray-300 hover:border-primary'
                  }`}
                  onClick={() => setShippingMethod('jne')}
                >
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      name="shippingMethod" 
                      id="jne" 
                      checked={shippingMethod === 'jne'}
                      onChange={() => setShippingMethod('jne')}
                      className="h-4 w-4 text-primary focus:ring-primary"
                    />
                    <div className="ml-3 mr-4">
                      <div className="w-10 h-5 bg-gray-200 flex items-center justify-center rounded">
                        <span className="text-xs font-medium">JNE</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">JNE Reguler</div>
                      <div className="text-sm text-gray-600">Estimasi 2-3 hari kerja</div>
                    </div>
                    <div className="font-medium text-gray-800">Rp15.000</div>
                  </div>
                </div>
                
                <div 
                  className={`border rounded-lg p-4 transition cursor-pointer ${
                    shippingMethod === 'jnt' ? 'border-primary' : 'border-gray-300 hover:border-primary'
                  }`}
                  onClick={() => setShippingMethod('jnt')}
                >
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      name="shippingMethod" 
                      id="jnt" 
                      checked={shippingMethod === 'jnt'}
                      onChange={() => setShippingMethod('jnt')}
                      className="h-4 w-4 text-primary focus:ring-primary"
                    />
                    <div className="ml-3 mr-4">
                      <div className="w-10 h-5 bg-gray-200 flex items-center justify-center rounded">
                        <span className="text-xs font-medium">J&T</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">J&T Express</div>
                      <div className="text-sm text-gray-600">Estimasi 1-2 hari kerja</div>
                    </div>
                    <div className="font-medium text-gray-800">Rp20.000</div>
                  </div>
                </div>
                
                <div 
                  className={`border rounded-lg p-4 transition cursor-pointer ${
                    shippingMethod === 'sicepat' ? 'border-primary' : 'border-gray-300 hover:border-primary'
                  }`}
                  onClick={() => setShippingMethod('sicepat')}
                >
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      name="shippingMethod" 
                      id="sicepat" 
                      checked={shippingMethod === 'sicepat'}
                      onChange={() => setShippingMethod('sicepat')}
                      className="h-4 w-4 text-primary focus:ring-primary"
                    />
                    <div className="ml-3 mr-4">
                      <div className="w-10 h-5 bg-gray-200 flex items-center justify-center rounded">
                        <span className="text-xs font-medium">SC</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">SiCepat HALU</div>
                      <div className="text-sm text-gray-600">Estimasi 1-3 hari kerja</div>
                    </div>
                    <div className="font-medium text-gray-800">Rp18.000</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Metode Pembayaran</h2>
              <div className="space-y-3">
                <div 
                  className={`border rounded-lg p-4 transition cursor-pointer ${
                    paymentMethod === 'bankTransfer' ? 'border-primary' : 'border-gray-300 hover:border-primary'
                  }`}
                  onClick={() => setPaymentMethod('bankTransfer')}
                >
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      id="bankTransfer" 
                      checked={paymentMethod === 'bankTransfer'}
                      onChange={() => setPaymentMethod('bankTransfer')}
                      className="h-4 w-4 text-primary focus:ring-primary"
                    />
                    <div className="ml-3 mr-4 text-primary">
                      <i className="bi bi-bank text-2xl"></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">Transfer Bank</div>
                      <div className="text-sm text-gray-600">BCA, Mandiri, BRI, BNI</div>
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`border rounded-lg p-4 transition cursor-pointer ${
                    paymentMethod === 'ewallet' ? 'border-primary' : 'border-gray-300 hover:border-primary'
                  }`}
                  onClick={() => setPaymentMethod('ewallet')}
                >
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      id="ewallet" 
                      checked={paymentMethod === 'ewallet'}
                      onChange={() => setPaymentMethod('ewallet')}
                      className="h-4 w-4 text-primary focus:ring-primary"
                    />
                    <div className="ml-3 mr-4 text-primary">
                      <i className="bi bi-wallet2 text-2xl"></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">E-Wallet</div>
                      <div className="text-sm text-gray-600">DANA, OVO, ShopeePay</div>
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`border rounded-lg p-4 transition cursor-pointer ${
                    paymentMethod === 'cod' ? 'border-primary' : 'border-gray-300 hover:border-primary'
                  }`}
                  onClick={() => setPaymentMethod('cod')}
                >
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      id="cod" 
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="h-4 w-4 text-primary focus:ring-primary"
                    />
                    <div className="ml-3 mr-4 text-primary">
                      <i className="bi bi-cash-coin text-2xl"></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">Bayar di Tempat (COD)</div>
                      <div className="text-sm text-gray-600">Hanya tersedia untuk wilayah tertentu</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Ringkasan Pesanan</h2>
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
                <div className="flex justify-between font-semibold text-lg text-gray-800 pt-2 border-t border-gray-200">
                  <span>Total Pembayaran</span>
                  <span>Rp{total.toLocaleString('id-ID')}</span>
                </div>
              </div>
              
              <button 
                onClick={handleSubmitOrder}
                className="w-full bg-primary hover:bg-primaryDark text-white py-3 px-4 rounded-lg font-medium transition flex items-center justify-center mt-6"
              >
                <i className="bi bi-check-circle mr-2"></i> Selesaikan Pesanan
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}