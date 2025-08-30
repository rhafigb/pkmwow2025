import Image from 'next/image';

export default function EducationPage() {
  // Data infografis untuk memudahkan rendering
  const infographics = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Daur Ulang Plastik",
      category: "Plastik",
      categoryColor: "bg-primary",
      title: "Proses Daur Ulang Botol Plastik",
      description: "Infografis lengkap tentang perjalanan botol plastik dari sampah menjadi produk baru yang bermanfaat."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Daur Ulang Kertas",
      category: "Kertas",
      categoryColor: "bg-amber-500",
      title: "Siklus Hidup Kertas Daur Ulang",
      description: "Visualisasi proses daur ulang kertas dan manfaatnya bagi penghematan sumber daya alam."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Daur Ulang Logam",
      category: "Logam",
      categoryColor: "bg-gray-600",
      title: "Daur Ulang Kaleng Aluminium",
      description: "Bagaimana kaleng aluminium didaur ulang dan mengapa ini penting untuk lingkungan."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Pengomposan",
      category: "Organik",
      categoryColor: "bg-amber-800",
      title: "Panduan Pengomposan Rumahan",
      description: "Langkah-langkah mudah membuat kompos dari sampah dapur dan kebun."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1551802235-60f0423b8626?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Daur Ulang Kaca",
      category: "Kaca",
      categoryColor: "bg-blue-500",
      title: "Proses Daur Ulang Kaca",
      description: "Bagaimana botol kaca diolah kembali menjadi produk baru tanpa kehilangan kualitas."
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1580476262798-bddd9c4a9bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Dampak Daur Ulang",
      category: "Edukasi",
      categoryColor: "bg-primary",
      title: "Dampak Positif Daur Ulang",
      description: "Bagaimana daur ulang membantu mengurangi polusi dan menghemat sumber daya alam."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Infografis Edukasi Daur Ulang</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pelajari cara mengolah limbah melalui infografis menarik dan informatif
          </p>
        </div>
        
        {/* Infographics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infographics.map((infographic) => (
            <div key={infographic.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 overflow-hidden relative">
                <Image 
                  src={infographic.image} 
                  alt={infographic.alt}
                  fill
                  className="object-cover"
                />
                <span className={`absolute top-4 left-4 ${infographic.categoryColor} text-white text-xs font-medium px-2.5 py-0.5 rounded-full`}>
                  {infographic.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{infographic.title}</h3>
                <p className="text-gray-600 mb-4">{infographic.description}</p>
                <button className="w-full bg-primary hover:bg-primaryDark text-white py-2 px-4 rounded-lg font-medium transition flex items-center justify-center">
                  <i className="bi bi-eye-fill mr-2"></i>
                  Lihat Infografis
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}