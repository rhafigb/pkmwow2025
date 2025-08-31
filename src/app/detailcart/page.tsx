'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // Logic untuk menambahkan ke keranjang
    console.log(`Menambahkan ${quantity} kg ke keranjang`);
  };

  const handleAddToWishlist = () => {
    // Logic untuk menambahkan ke wishlist
    console.log('Menambahkan ke wishlist');
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/marketplace" 
          className="inline-flex items-center text-primary hover:text-primaryDark mb-6 transition"
        >
          <i className="bi bi-arrow-left mr-2"></i> Kembali ke Marketplace
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1545173168-9f1947eebb5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Potongan Kain Denim" 
                  width={600}
                  height={320}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Product Info */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Product Title */}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Potongan Kain Denim</h1>
              
              {/* Product Price */}
              <h2 className="text-2xl font-bold text-primary mb-4">Rp 25.000/kg</h2>
              
              {/* Product Description */}
              <p className="text-gray-600 mb-6">
                Berbagai ukuran dan warna potongan kain denim bekas yang cocok untuk berbagai proyek daur ulang. 
                Material dalam kondisi baik, sudah dicuci dan siap digunakan untuk membuat tas, dompet, atau kerajinan lainnya.
              </p>
              
              {/* Product Details */}
              <div className="space-y-3 mb-6">
                <div className="flex">
                  <strong className="text-gray-700 w-32">Kategori:</strong>
                  <span className="text-gray-600">Kain & Tekstil</span>
                </div>
                <div className="flex">
                  <strong className="text-gray-700 w-32">Lokasi:</strong>
                  <span className="text-gray-600">Jakarta</span>
                </div>
                <div className="flex">
                  <strong className="text-gray-700 w-32">Stok:</strong>
                  <span className="text-gray-600">15 kg</span>
                </div>
                <div className="flex">
                  <strong className="text-gray-700 w-32">Penjual:</strong>
                  <span className="text-gray-600">Budi Recycled Materials</span>
                </div>
                <div className="flex">
                  <strong className="text-gray-700 w-32">Kondisi:</strong>
                  <span className="text-gray-600">Bekas (Baik)</span>
                </div>
                <div className="flex">
                  <strong className="text-gray-700 w-32">Min. Order:</strong>
                  <span className="text-gray-600">1 kg</span>
                </div>
              </div>
              
              {/* Separator Line */}
              <div className="border-t border-gray-200 my-6"></div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <button 
                    onClick={handleDecrease}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 h-10 w-10 flex items-center justify-center transition"
                  >
                    <i className="bi bi-dash"></i>
                  </button>
                  <span className="h-10 w-12 flex items-center justify-center border-x border-gray-300">
                    {quantity}
                  </span>
                  <button 
                    onClick={handleIncrease}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 h-10 w-10 flex items-center justify-center transition"
                  >
                    <i className="bi bi-plus"></i>
                  </button>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 flex-1">
                  <button 
                    onClick={handleAddToWishlist}
                    className="bg-white border border-primary text-primary hover:bg-primaryLight py-2 px-4 rounded-lg font-medium transition flex items-center justify-center flex-1"
                  >
                    <i className="bi bi-heart mr-2"></i> Simpan
                  </button>
                  <button 
                    onClick={handleAddToCart}
                    className="bg-primary hover:bg-primaryDark text-white py-2 px-4 rounded-lg font-medium transition flex items-center justify-center flex-1"
                  >
                    <i className="bi bi-cart3 mr-2"></i> Keranjang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}