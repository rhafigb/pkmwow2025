import Image from 'next/image';
import Link from 'next/link';

export default function MarketplacePage() {
  // Data produk untuk memudahkan rendering
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Botol Plastik Daur Ulang",
      category: "Limbah Plastik",
      title: "Botol PET Bekas",
      description: "Botol plastik PET bekas minuman, kondisi bersih, siap diolah menjadi produk daur ulang.",
      price: "Rp25.000/kg",
      stock: "Stok: 50 kg"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Kertas Daur Ulang",
      category: "Limbah Kertas",
      title: "Kertas Koran Bekas",
      description: "Kertas koran bekas pakai, kondisi kering, cocok untuk daur ulang atau kerajinan.",
      price: "Rp8.000/kg",
      stock: "Stok: 120 kg"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1580476262798-bddd9c4a9bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Produk Daur Ulang",
      category: "Produk Daur Ulang",
      title: "Tas dari Ban Bekas",
      description: "Tas unik dan tahan lama yang dibuat dari ban dalam bekas, desain eksklusif.",
      price: "Rp350.000",
      stock: "Stok: 12 pcs"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Logam Bekas",
      category: "Limbah Logam",
      title: "Kaleng Aluminium Bekas",
      description: "Kaleng minuman aluminium bekas, sudah dipress, siap untuk didaur ulang.",
      price: "Rp15.000/kg",
      stock: "Stok: 80 kg"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Kompos Organik",
      category: "Limbah Organik",
      title: "Kompos Siap Pakai",
      description: "Kompos berkualitas tinggi dari limbah organik, siap digunakan untuk pertanian.",
      price: "Rp10.000/kg",
      stock: "Stok: 200 kg"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1551802235-60f0423b8626?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Kaca Daur Ulang",
      category: "Limbah Kaca",
      title: "Botol Kaca Bekas",
      description: "Botol kaca berbagai ukuran dan warna, kondisi bersih, siap untuk didaur ulang.",
      price: "Rp5.000/kg",
      stock: "Stok: 150 kg"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pasar Limbah & Produk Daur Ulang</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temukan limbah untuk diolah atau produk daur ulang berkualitas dari pengrajin kreatif kami
          </p>
        </div>
        
        {/* Search Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="max-w-4xl mx-auto">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Cari Produk
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  id="search" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition pl-12" 
                  placeholder="Cari berdasarkan nama, kategori, atau deskripsi..."
                />
                {/* Mengganti SVG dengan Bootstrap Icon */}
                <i className="bi bi-search text-gray-400 absolute left-4 top-3.5"></i>
              </div>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 overflow-hidden relative">
                <Image 
                  src={product.image} 
                  alt={product.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <span className="inline-block bg-primaryLight text-primary text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {product.category}
                </span>
                <h3 className="text-xl font-semibold mt-3 mb-2 text-gray-800">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <span className="text-sm text-gray-500">{product.stock}</span>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-white border border-primary text-primary py-2 px-4 rounded-lg font-medium hover:bg-primaryLight transition flex items-center justify-center">
                    {/* Mengganti SVG dengan Bootstrap Icon */}
                    <i className="bi bi-info-circle mr-1"></i>
                    Detail
                  </button>
                  <button className="flex-1 bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primaryDark transition flex items-center justify-center">
                    {/* Mengganti SVG dengan Bootstrap Icon */}
                    <i className="bi bi-cart3 mr-1"></i>
                    Keranjang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}