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

export default function PaymentPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [senderName, setSenderName] = useState('');
  const [transferDate, setTransferDate] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [paymentNotes, setPaymentNotes] = useState('');

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic untuk mengirim bukti pembayaran
    console.log('Bukti pembayaran dikirim', {
      senderName,
      transferDate,
      transferAmount,
      paymentNotes,
      file: selectedFile
    });
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
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">2</div>
            <div className="ml-2 text-sm font-medium text-primary">Dibayar</div>
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
        
        {/* Payment Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Upload Bukti Pembayaran</h2>
              <p className="text-gray-600 mb-6">Silakan upload bukti pembayaran untuk menyelesaikan proses order</p>
              
              {/* Order Information */}
              <div className="bg-primaryLight rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Informasi Order</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex flex-col">
                    <strong className="text-sm text-gray-700">ID Order:</strong>
                    <span className="text-gray-800">WOW-123456789</span>
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-sm text-gray-700">Total Pembayaran:</strong>
                    <span className="text-gray-800 font-semibold">Rp{total.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-sm text-gray-700">Metode Pembayaran:</strong>
                    <span className="text-gray-800">Transfer Bank BCA</span>
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-sm text-gray-700">Rekening Tujuan:</strong>
                    <span className="text-gray-800">BCA 1234567890 a.n. WOW Waste to Worth</span>
                  </div>
                </div>
              </div>
              
              {/* Upload Form */}
              <div className="mb-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="paymentProof" className="block text-sm font-medium text-gray-700 mb-2">Upload Bukti Transfer</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer"
                         onClick={() => document.getElementById('paymentProof')?.click()}>
                      <input 
                        type="file" 
                        id="paymentProof" 
                        accept="image/*" 
                        required 
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <div className="flex flex-col items-center justify-center">
                        <i className="bi bi-cloud-arrow-up text-4xl text-gray-400 mb-2"></i>
                        <p className="text-gray-600 mb-2">Klik untuk upload atau drag & drop</p>
                        <p className="text-sm text-gray-500">Format file: JPG, PNG (maks. 2MB)</p>
                        {selectedFile && (
                          <p className="text-sm text-primary mt-2">{selectedFile.name}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="senderName" className="block text-sm font-medium text-gray-700 mb-1">Nama Pengirim</label>
                      <input 
                        type="text" 
                        id="senderName" 
                        required 
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="transferDate" className="block text-sm font-medium text-gray-700 mb-1">Tanggal Transfer</label>
                      <input 
                        type="date" 
                        id="transferDate" 
                        required 
                        value={transferDate}
                        onChange={(e) => setTransferDate(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="transferAmount" className="block text-sm font-medium text-gray-700 mb-1">Jumlah Transfer</label>
                    <input 
                      type="text" 
                      id="transferAmount" 
                      required 
                      value={transferAmount}
                      onChange={(e) => setTransferAmount(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" 
                      placeholder={`Rp${total.toLocaleString('id-ID')}`}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="paymentNotes" className="block text-sm font-medium text-gray-700 mb-1">Catatan (Opsional)</label>
                    <textarea 
                      id="paymentNotes" 
                      rows={3} 
                      value={paymentNotes}
                      onChange={(e) => setPaymentNotes(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primaryDark text-white py-3 px-4 rounded-lg font-medium transition"
                    >
                      Kirim Bukti Pembayaran
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Payment Instructions */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Instruksi Pembayaran</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Lakukan transfer sesuai dengan total pembayaran ke rekening yang tertera</li>
                  <li>Simpan bukti transfer yang Anda lakukan</li>
                  <li>Upload bukti transfer pada form di atas</li>
                  <li>Tim WOW akan memverifikasi pembayaran Anda dalam 1x24 jam</li>
                  <li>Anda akan menerima notifikasi setelah pembayaran dikonfirmasi</li>
                </ol>
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