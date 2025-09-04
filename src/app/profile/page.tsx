'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Order {
  id: string;
  date: string;
  items: string;
  price: number;
  status: 'shipped' | 'completed' | 'cancelled';
}

interface SavedItem {
  id: string;
  name: string;
  price: number;
  unit: string;
  location: string;
  stock: number;
  image: string;
}

interface StoreProduct {
  id: string;
  name: string;
  price: number;
  sold: number;
  rating: number;
  image: string;
}

interface StoreOrder {
  id: string;
  date: string;
  items: string;
  price: number;
  status: 'pending' | 'completed';
}

export default function ProfilePage() {
  const [activeRole, setActiveRole] = useState<'buyer' | 'seller' | 'settings'>('buyer');
  const [activeTab, setActiveTab] = useState('overview');
  const [savedItems, setSavedItems] = useState<SavedItem[]>([
    {
      id: '1',
      name: 'Potongan Kain Denim',
      price: 25000,
      unit: 'kg',
      location: 'Jakarta',
      stock: 15,
      image: 'https://via.placeholder.com/600x400'
    },
    {
      id: '2',
      name: 'Botol PET Bekas',
      price: 15000,
      unit: 'kg',
      location: 'Bandung',
      stock: 20,
      image: 'https://via.placeholder.com/600x400'
    }
  ]);

  const orders: Order[] = [
    {
      id: 'WTW2023-009',
      date: '15 Mei 2023',
      items: '2 Palet Kayu',
      price: 115000,
      status: 'shipped'
    },
    {
      id: 'WTW2023-008',
      date: '10 Mei 2023',
      items: '5kg Kain Denim',
      price: 140000,
      status: 'completed'
    },
    {
      id: 'WTW2023-007',
      date: '5 Mei 2023',
      items: '10 Botol Kaca',
      price: 95000,
      status: 'cancelled'
    }
  ];

  const storeProducts: StoreProduct[] = [
    {
      id: '1',
      name: 'Tas dari Bahan Denim Daur Ulang',
      price: 150000,
      sold: 12,
      rating: 4.8,
      image: 'https://via.placeholder.com/600x400'
    },
    {
      id: '2',
      name: 'Pot Tanah Liat dari Limbah Keramik',
      price: 75000,
      sold: 8,
      rating: 4.5,
      image: 'https://via.placeholder.com/600x400'
    }
  ];

  const storeOrders: StoreOrder[] = [
    {
      id: 'WTW2023-009',
      date: '15 Mei 2023',
      items: 'Tas dari Bahan Denim Daur Ulang (1x)',
      price: 150000,
      status: 'pending'
    },
    {
      id: 'WTW2023-008',
      date: '10 Mei 2023',
      items: 'Pot Tanah Liat dari Limbah Keramik (2x)',
      price: 150000,
      status: 'completed'
    }
  ];

  const [userData, setUserData] = useState({
    name: 'Budi Santoso',
    email: 'budi.santoso@example.com',
    phone: '+628123456789',
    address: 'Jl. Merdeka No. 123, Jakarta Pusat, 10110'
  });

  const [storeData, setStoreData] = useState({
    name: 'Kreasi Daur Ulang Budi',
    description: 'Toko yang menyediakan berbagai produk kreatif dari bahan daur ulang. Kami berkomitmen untuk mengurangi limbah dan menciptakan produk yang bernilai.',
    address: 'Jl. Merdeka No. 123, Jakarta Pusat, 10110'
  });

  const handleRemoveSavedItem = (id: string) => {
    setSavedItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleSaveSettings = () => {
    // Simulate saving settings
    console.log('Settings saved:', userData);
  };

  const handleSaveStoreInfo = () => {
    // Simulate saving store info
    console.log('Store info saved:', storeData);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'shipped':
        return 'Dikirim';
      case 'completed':
        return 'Selesai';
      case 'cancelled':
        return 'Dibatalkan';
      case 'pending':
        return 'Menunggu Pengiriman';
      default:
        return status;
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="h-32 bg-gradient-to-r from-primary to-primaryDark"></div>
        <div className="px-6 pb-6 -mt-16">
          <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-200 mx-auto"></div>
          <div className="text-center mt-4">
            <h1 className="text-2xl font-bold text-gray-800">{userData.name}</h1>
            <p className="text-gray-600">Pecinta daur ulang kreatif dan pembuat produk berkelanjutan dari Jakarta</p>
            
            {/* Eco-Tracker Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="text-2xl font-bold text-primary">245</div>
                  <div className="text-sm text-gray-500 ml-1">kg</div>
                </div>
                <div className="text-sm text-gray-600">Limbah Didaur Ulang</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-sm text-gray-500 ml-1">kg</div>
                </div>
                <div className="text-sm text-gray-600">CO₂ Berkurang</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="text-2xl font-bold text-primary">56</div>
                  <div className="text-sm text-gray-500 ml-1">item</div>
                </div>
                <div className="text-sm text-gray-600">Produk Diciptakan</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => {
                  setActiveRole('settings');
                  setActiveTab('settings');
                }}
                className="bg-primary hover:bg-primaryDark text-white py-2 px-4 rounded-lg font-medium transition flex items-center justify-center"
              >
                <i className="bi bi-pencil-square mr-2"></i> Edit Profil
              </button>
              <button className="bg-white border border-primary text-primary hover:bg-primaryLight py-2 px-4 rounded-lg font-medium transition flex items-center justify-center">
                <i className="bi bi-graph-up mr-2"></i> Lihat Eco-Tracker Lengkap
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Role Switch */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex border border-gray-300 rounded-lg overflow-hidden">
          <div 
            className={`flex-1 py-3 px-4 text-center font-medium flex items-center justify-center cursor-pointer ${
              activeRole === 'buyer' ? 'bg-primary text-white' : 'bg-white text-gray-600'
            }`}
            onClick={() => setActiveRole('buyer')}
          >
            <i className="bi bi-cart-check mr-2"></i> Mode Pembeli
          </div>
          <div 
            className={`flex-1 py-3 px-4 text-center font-medium flex items-center justify-center cursor-pointer ${
              activeRole === 'seller' ? 'bg-primary text-white' : 'bg-white text-gray-600'
            }`}
            onClick={() => setActiveRole('seller')}
          >
            <i className="bi bi-shop mr-2"></i> Mode Penjual
          </div>
          <div 
            className={`flex-1 py-3 px-4 text-center font-medium flex items-center justify-center cursor-pointer ${
              activeRole === 'settings' ? 'bg-primary text-white' : 'bg-white text-gray-600'
            }`}
            onClick={() => setActiveRole('settings')}
          >
            <i className="bi bi-gear mr-2"></i> Pengaturan
          </div>
        </div>
      </div>

      {/* Buyer Navigation */}
      {activeRole === 'buyer' && (
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 overflow-x-auto">
          <div className="flex space-x-1">
            <div 
              className={`px-4 py-2 rounded-lg font-medium flex items-center whitespace-nowrap cursor-pointer ${
                activeTab === 'overview' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              <i className="bi bi-house-door mr-2"></i> Ringkasan
            </div>
            <div 
              className={`px-4 py-2 rounded-lg font-medium flex items-center whitespace-nowrap cursor-pointer ${
                activeTab === 'orders' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('orders')}
            >
              <i className="bi bi-bag mr-2"></i> Pesanan Saya
            </div>
            <div 
              className={`px-4 py-2 rounded-lg font-medium flex items-center whitespace-nowrap cursor-pointer ${
                activeTab === 'saved' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('saved')}
            >
              <i className="bi bi-heart mr-2"></i> Disimpan
            </div>
          </div>
        </div>
      )}

      {/* Seller Navigation */}
      {activeRole === 'seller' && (
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 overflow-x-auto">
          <div className="flex space-x-1">
            <div 
              className={`px-4 py-2 rounded-lg font-medium flex items-center whitespace-nowrap cursor-pointer ${
                activeTab === 'store-info' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('store-info')}
            >
              <i className="bi bi-info-circle mr-2"></i> Informasi Toko
            </div>
            <div 
              className={`px-4 py-2 rounded-lg font-medium flex items-center whitespace-nowrap cursor-pointer ${
                activeTab === 'store-products' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('store-products')}
            >
              <i className="bi bi-grid mr-2"></i> Produk Toko
            </div>
            <div 
              className={`px-4 py-2 rounded-lg font-medium flex items-center whitespace-nowrap cursor-pointer ${
                activeTab === 'store-orders' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('store-orders')}
            >
              <i className="bi bi-bag mr-2"></i> Pesanan Toko
            </div>
          </div>
        </div>
      )}

      {/* Overview Section */}
      {activeTab === 'overview' && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Dampak Lingkungan Anda</h3>
              <div className="bg-primaryLight rounded-lg p-4">
                <p className="text-gray-700 mb-3">Dengan berkontribusi di platform WOW, Anda telah membantu:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Mengurangi 245kg limbah yang berakhir di TPA</li>
                  <li>Mengurangi 12kg emisi CO₂ setara dengan menanam 5 pohon</li>
                  <li>Menciptakan 56 produk bernilai dari bahan daur ulang</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Aktivitas Terkini</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primaryLight p-2 rounded-full mr-3">
                    <i className="bi bi-truck text-primary"></i>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">Pesanan #WTW2023-009 telah dikirim</div>
                    <div className="text-sm text-gray-500">2 jam lalu</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primaryLight p-2 rounded-full mr-3">
                    <i className="bi bi-star text-primary"></i>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">Produk "Tas Denim" Anda mendapat 5 ulasan bintang</div>
                    <div className="text-sm text-gray-500">1 hari lalu</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primaryLight p-2 rounded-full mr-3">
                    <i className="bi bi-heart text-primary"></i>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">Anda menyimpan "Potongan Kain Denim" ke wishlist</div>
                    <div className="text-sm text-gray-500">3 hari lalu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Orders Section */}
      {activeTab === 'orders' && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Riwayat Pesanan</h2>
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                  <div className="font-medium text-gray-800">{order.id}</div>
                  <div className="text-sm text-gray-500">{order.date}</div>
                </div>
                <div className="text-gray-600 mb-3">{order.items}</div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="font-semibold text-gray-800">Rp{order.price.toLocaleString('id-ID')}</div>
                  <div className="mb-3 sm:mb-0">
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getStatusColor(order.status)}`}>
                      {getStatusText(order.status)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-3">
                  <button className="bg-primary hover:bg-primaryDark text-white py-2 px-4 rounded-lg text-sm font-medium transition flex items-center justify-center">
                    <i className="bi bi-geo-alt mr-2"></i> Lacak Pengiriman
                  </button>
                  <button className="bg-white border border-gray-300 hover:border-primary text-gray-700 hover:text-primary py-2 px-4 rounded-lg text-sm font-medium transition flex items-center justify-center">
                    <i className="bi bi-star mr-2"></i> Beri Ulasan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Saved Items Section */}
      {activeTab === 'saved' && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Item Disimpan</h2>
          {savedItems.length === 0 ? (
            <div className="text-center py-8">
              <i className="bi bi-heart text-4xl text-gray-300 mb-4"></i>
              <p className="text-gray-500">Tidak ada item yang disimpan</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gray-200 relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 mb-2">{item.name}</h3>
                    <div className="text-lg font-semibold text-primary mb-2">
                      Rp{item.price.toLocaleString('id-ID')}/{item.unit}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-sm text-gray-600 flex items-center">
                        <i className="bi bi-geo-alt mr-1"></i> {item.location}
                      </span>
                      <span className="text-sm text-gray-600 flex items-center">
                        <i className="bi bi-box mr-1"></i> {item.stock} kg tersedia
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleRemoveSavedItem(item.id)}
                        className="bg-white border border-gray-300 hover:border-red-500 text-gray-700 hover:text-red-500 py-1 px-3 rounded text-sm font-medium transition flex items-center"
                      >
                        <i className="bi bi-trash mr-1"></i> Hapus
                      </button>
                      <button className="bg-primary hover:bg-primaryDark text-white py-1 px-3 rounded text-sm font-medium transition flex items-center">
                        <i className="bi bi-cart-plus mr-1"></i> Beli Sekarang
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Store Info Section */}
      {activeTab === 'store-info' && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Informasi Toko</h2>
          <div className="max-w-lg">
            <div className="space-y-4">
              <div>
                <label htmlFor="store-name" className="block text-sm font-medium text-gray-700 mb-1">Nama Toko</label>
                <input 
                  type="text" 
                  id="store-name" 
                  value={storeData.name}
                  onChange={(e) => setStoreData({...storeData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="store-description" className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Toko</label>
                <textarea 
                  id="store-description" 
                  rows={3}
                  value={storeData.description}
                  onChange={(e) => setStoreData({...storeData, description: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="store-address" className="block text-sm font-medium text-gray-700 mb-1">Alamat Toko</label>
                <textarea 
                  id="store-address" 
                  rows={3}
                  value={storeData.address}
                  onChange={(e) => setStoreData({...storeData, address: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                ></textarea>
              </div>
              
              <div>
                <button 
                  onClick={handleSaveStoreInfo}
                  className="bg-primary hover:bg-primaryDark text-white py-2 px-4 rounded-lg font-medium transition flex items-center"
                >
                  <i className="bi bi-check-circle mr-2"></i> Simpan Informasi Toko
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Store Products Section */}
      {activeTab === 'store-products' && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 sm:mb-0">Produk Toko</h2>
            <button className="bg-primary hover:bg-primaryDark text-white py-2 px-4 rounded-lg font-medium transition flex items-center justify-center">
              <i className="bi bi-plus-circle mr-2"></i> Tambah Produk Baru
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {storeProducts.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
                  <div className="text-lg font-semibold text-primary mb-2">
                    Rp{product.price.toLocaleString('id-ID')}
                  </div>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="text-sm text-gray-600">{product.sold} terjual</span>
                    <span className="text-sm text-gray-600 flex items-center">
                      <i className="bi bi-star-fill text-yellow-400 mr-1"></i> {product.rating}/5
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-white border border-gray-300 hover:border-primary text-gray-700 hover:text-primary py-1 px-3 rounded text-sm font-medium transition flex items-center">
                      <i className="bi bi-pencil mr-1"></i> Edit
                    </button>
                    <button className="bg-primary hover:bg-primaryDark text-white py-1 px-3 rounded text-sm font-medium transition flex items-center">
                      <i className="bi bi-eye mr-1"></i> Lihat di Toko
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Store Orders Section */}
      {activeTab === 'store-orders' && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Pesanan Toko</h2>
          <div className="space-y-4">
            {storeOrders.map((order) => (
              <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                  <div className="font-medium text-gray-800">{order.id}</div>
                  <div className="text-sm text-gray-500">{order.date}</div>
                </div>
                <div className="text-gray-600 mb-3">{order.items}</div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="font-semibold text-gray-800">Rp{order.price.toLocaleString('id-ID')}</div>
                  <div className="mb-3 sm:mb-0">
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getStatusColor(order.status)}`}>
                      {getStatusText(order.status)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-3">
                  <button className="bg-primary hover:bg-primaryDark text-white py-2 px-4 rounded-lg text-sm font-medium transition flex items-center justify-center">
                    <i className="bi bi-truck mr-2"></i> Proses Pengiriman
                  </button>
                  <button className="bg-white border border-gray-300 hover:border-primary text-gray-700 hover:text-primary py-2 px-4 rounded-lg text-sm font-medium transition flex items-center justify-center">
                    <i className="bi bi-eye mr-2"></i> Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Settings Section */}
      {activeTab === 'settings' && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Pengaturan Akun</h2>
          <div className="max-w-lg">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name" 
                  value={userData.name}
                  onChange={(e) => setUserData({...userData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={userData.email}
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={userData.phone}
                  onChange={(e) => setUserData({...userData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Alamat Lengkap</label>
                <textarea 
                  id="address" 
                  rows={3}
                  value={userData.address}
                  onChange={(e) => setUserData({...userData, address: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                ></textarea>
              </div>
              
              <div>
                <button 
                  onClick={handleSaveSettings}
                  className="bg-primary hover:bg-primaryDark text-white py-2 px-4 rounded-lg font-medium transition flex items-center"
                >
                  <i className="bi bi-check-circle mr-2"></i> Simpan Perubahan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}