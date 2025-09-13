// src/app/tambahproduk/page.tsx
'use client';

import { useState, useRef, ChangeEvent } from 'react';

export default function TambahProduk() {
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const newImages: string[] = [];
    const files = Array.from(e.target.files);
    
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          newImages.push(event.target.result as string);
          if (newImages.length === files.length) {
            setImages([...images, ...newImages]);
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Produk berhasil ditambahkan!');
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Form Tambah Produk */}
      <div id="add-product-section" className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 sm:mb-0">Tambah Produk Baru</h2>
          <button className="bg-white border border-gray-300 hover:border-primary text-gray-700 hover:text-primary py-2 px-4 rounded-lg font-medium transition flex items-center justify-center">
            <i className="bi bi-arrow-left mr-2"></i> Kembali
          </button>
        </div>
        
        <form id="add-product-form" className="bg-white rounded-lg shadow-md p-6" onSubmit={handleSubmit}>
          {/* Informasi Dasar Produk */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Informasi Dasar Produk</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="product-name" className="block text-sm font-medium text-gray-700 mb-1">Nama Produk</label>
                <input 
                  type="text" 
                  id="product-name" 
                  required 
                  placeholder="Contoh: Tas dari Bahan Denim Daur Ulang" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="product-category" className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                <select 
                  id="product-category" 
                  required 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                >
                  <option value="">Pilih Kategori</option>
                  <option value="textile">Tekstil & Kain</option>
                  <option value="plastic">Plastik</option>
                  <option value="paper">Kertas</option>
                  <option value="glass">Kaca</option>
                  <option value="metal">Logam</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="product-description" className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Produk</label>
                <textarea 
                  id="product-description" 
                  rows={4} 
                  required 
                  placeholder="Jelaskan detail produk, bahan yang digunakan, dan keunikan produk" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                ></textarea>
              </div>
            </div>
          </div>
          
          {/* Harga & Stok */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Harga & Stok</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="product-price" className="block text-sm font-medium text-gray-700 mb-1">Harga (Rp)</label>
                <input 
                  type="number" 
                  id="product-price" 
                  required 
                  placeholder="Contoh: 150000" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="product-stock" className="block text-sm font-medium text-gray-700 mb-1">Stok Tersedia</label>
                <input 
                  type="number" 
                  id="product-stock" 
                  required 
                  placeholder="Contoh: 10" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="product-unit" className="block text-sm font-medium text-gray-700 mb-1">Satuan</label>
                <select 
                  id="product-unit" 
                  required 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                >
                  <option value="pcs">Pcs (Unit)</option>
                  <option value="kg">Kilogram</option>
                  <option value="pack">Pack</option>
                  <option value="meter">Meter</option>
                  <option value="roll">Roll</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="product-weight" className="block text-sm font-medium text-gray-700 mb-1">Berat Produk (gram)</label>
                <input 
                  type="number" 
                  id="product-weight" 
                  required 
                  placeholder="Contoh: 500" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                />
              </div>
            </div>
          </div>
          
          {/* Gambar Produk */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Gambar Produk</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Unggah Gambar</label>
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="flex flex-col items-center justify-center">
                    <i className="bi bi-cloud-arrow-up text-4xl text-gray-400 mb-2"></i>
                    <div className="text-gray-600 mb-2">Klik untuk upload atau drag & drop</div>
                    <div className="text-sm text-gray-500">Format: JPG, PNG (maks. 2MB)</div>
                  </div>
                  <input 
                    type="file" 
                    id="product-images" 
                    ref={fileInputRef}
                    accept="image/*" 
                    multiple 
                    className="hidden" 
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pratinjau Gambar</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4" id="image-preview">
                  {images.length > 0 ? (
                    images.map((image, index) => (
                      <div key={index} className="relative">
                        <img src={image} alt={`Preview ${index}`} className="w-full h-32 object-cover rounded-lg" />
                        <button 
                          type="button" 
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                          onClick={() => removeImage(index)}
                        >
                          <i className="bi bi-x text-sm"></i>
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="border border-dashed border-gray-300 rounded-lg h-32 flex items-center justify-center text-gray-400">
                      <i className="bi bi-image text-2xl"></i>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Pengiriman */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Pengiriman</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Metode Pengiriman</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="shipping-jne" 
                      defaultChecked 
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" 
                    />
                    <label htmlFor="shipping-jne" className="ml-2 text-sm text-gray-700">JNE</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="shipping-jnt" 
                      defaultChecked 
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" 
                    />
                    <label htmlFor="shipping-jnt" className="ml-2 text-sm text-gray-700">J&T</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="shipping-sicepat" 
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" 
                    />
                    <label htmlFor="shipping-sicepat" className="ml-2 text-sm text-gray-700">SiCepat</label>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="processing-time" className="block text-sm font-medium text-gray-700 mb-1">Waktu Proses (hari)</label>
                <input 
                  type="number" 
                  id="processing-time" 
                  defaultValue={1} 
                  min={1} 
                  max={7} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" 
                />
              </div>
            </div>
          </div>
          
          {/* Kategori Limbah */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Informasi Limbah</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="waste-type" className="block text-sm font-medium text-gray-700 mb-1">Jenis Limbah</label>
                <select 
                  id="waste-type" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                >
                  <option value="pre-consumer">Pre-Consumer (Limbah Produksi)</option>
                  <option value="post-consumer">Post-Consumer (Limbah Konsumen)</option>
                  <option value="industrial">Limbah Industri</option>
                  <option value="household">Limbah Rumah Tangga</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="waste-source" className="block text-sm font-medium text-gray-700 mb-1">Sumber Limbah</label>
                <input 
                  type="text" 
                  id="waste-source" 
                  placeholder="Contoh: Sisa produksi garment, limbah rumah tangga, dll" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" 
                />
              </div>
              
              <div>
                <label htmlFor="environment-impact" className="block text-sm font-medium text-gray-700 mb-1">Dampak Lingkungan</label>
                <textarea 
                  id="environment-impact" 
                  rows={3} 
                  placeholder="Jelaskan dampak positif terhadap lingkungan dari produk ini" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                ></textarea>
              </div>
            </div>
          </div>
          
          {/* Tombol Aksi */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
            <button 
              type="button" 
              className="bg-white border border-gray-300 hover:border-gray-400 text-gray-700 py-2 px-4 rounded-lg font-medium transition flex items-center justify-center flex-1"
            >
              <i className="bi bi-x-circle mr-2"></i> Batal
            </button>
            <button 
              type="button" 
              className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-medium transition flex items-center justify-center flex-1"
            >
              <i className="bi bi-file-earmark mr-2"></i> Simpan sebagai Draft
            </button>
            <button 
              type="submit" 
              className="bg-primary hover:bg-primaryDark text-white py-2 px-4 rounded-lg font-medium transition flex items-center justify-center flex-1"
            >
              <i className="bi bi-check-circle mr-2"></i> Terbitkan Produk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}