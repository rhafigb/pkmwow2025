'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
  selected: boolean;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'prod001',
      name: 'Botol PET Bekas',
      category: 'Limbah Plastik',
      price: 25000,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      selected: true
    },
    {
      id: 'prod002',
      name: 'Kertas Koran Bekas',
      category: 'Limbah Kertas',
      price: 8000,
      quantity: 5,
      image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      selected: true
    }
  ]);

  const [selectAll, setSelectAll] = useState(true);
  const shippingCost = 15000;

  // Calculate totals
  const subtotal = cartItems
    .filter(item => item.selected)
    .reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const total = subtotal + shippingCost;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleSelectItem = (id: string) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setCartItems(prevItems => 
      prevItems.map(item => ({ ...item, selected: newSelectAll }))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">Keranjang Belanja</h1>
          <Link 
            href="/marketplace" 
            className="bg-primary hover:bg-primaryDark text-white py-2 px-4 rounded-lg font-medium transition flex items-center justify-center w-full md:w-auto"
          >
            <i className="bi bi-arrow-left mr-2"></i> Lanjutkan Belanja
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="flex items-center mb-4">
                <input 
                  type="checkbox" 
                  id="select-all" 
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="select-all" className="ml-2 text-gray-700">Pilih Semua</label>
              </div>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-start border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center h-5 mr-4">
                      <input 
                        type="checkbox" 
                        id={item.id}
                        checked={item.selected}
                        onChange={() => handleSelectItem(item.id)}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                    </div>
                    <div className="flex-shrink-0 mr-4">
                      <Image 
                        src={item.image} 
                        alt={item.name}
                        width={80}
                        height={80}
                        className="h-20 w-20 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 mr-4">
                      <div className="mb-2">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <span className="text-sm text-gray-500">{item.category}</span>
                      </div>
                      <div className="text-lg font-bold text-primary">
                        Rp{item.price.toLocaleString('id-ID')}/kg
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center mb-2">
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-700 h-8 w-8 rounded-l-md flex items-center justify-center"
                        >
                          <i className="bi bi-dash"></i>
                        </button>
                        <input 
                          type="number" 
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                          min="1"
                          className="h-8 w-12 text-center border-y border-gray-300 focus:outline-none"
                        />
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-700 h-8 w-8 rounded-r-md flex items-center justify-center"
                        >
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                      <button 
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-600 hover:text-red-800 text-sm flex items-center"
                      >
                        <i className="bi bi-trash mr-1"></i> Hapus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Ringkasan Belanja</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Subtotal ({cartItems.filter(item => item.selected).length} produk)
                  </span>
                  <span className="text-gray-800 font-medium">
                    Rp{subtotal.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Biaya Pengiriman</span>
                  <span className="text-gray-800 font-medium">
                    Rp{shippingCost.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="text-lg font-semibold text-gray-800">Total Pembayaran</span>
                  <span className="text-lg font-bold text-primary">
                    Rp{total.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>
              <button className="w-full bg-primary hover:bg-primaryDark text-white py-3 px-4 rounded-lg font-medium transition flex items-center justify-center">
                <i className="bi bi-credit-card mr-2"></i> Lanjut ke Pembayaran
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}