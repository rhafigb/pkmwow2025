import Image from 'next/image';

export default function CommunityPage() {
  // Data postingan komunitas
  const posts = [
    {
      id: 1,
      user: {
        name: "Sarah Wijaya",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        time: "2 jam yang lalu"
      },
      content: "Baru saja menyelesaikan proyek daur ulang botol plastik menjadi pot tanaman! Sangat menyenangkan melihat limbah bisa menjadi sesuatu yang berguna. Bagaimana pendapat kalian?",
      image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Pot dari botol plastik",
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      user: {
        name: "Budi Santoso",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        time: "Kemarin"
      },
      content: "Ada yang punya pengalaman mengolah limbah kertas menjadi briket? Saya sedang mencoba tapi hasilnya kurang maksimal. Mohon sarannya!",
      image: null,
      alt: "",
      likes: 12,
      comments: 15
    },
    {
      id: 3,
      user: {
        name: "Dewi Lestari",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        time: "3 hari yang lalu"
      },
      content: "Komunitas kami di Bandung sedang mengadakan workshop daur ulang limbah elektronik. Gratis untuk 20 peserta pertama! Daftar via link di bio.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Workshop daur ulang",
      likes: 42,
      comments: 7
    }
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Komunitas WOW</h2>
          <p className="text-lg text-gray-600">Bergabunglah dengan komunitas pengelola limbah dan pengrajin kreatif</p>
        </div>
        
        {/* Create Post Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <textarea 
            placeholder="Bagikan pengalaman atau pertanyaan Anda tentang pengolahan limbah..." 
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none h-32"
          ></textarea>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
            <div className="flex space-x-4 mb-4 sm:mb-0">
              <div className="flex items-center text-gray-600 cursor-pointer hover:text-primary transition">
                <i className="bi bi-image mr-1"></i>
                Gambar
              </div>
              <div className="flex items-center text-gray-600 cursor-pointer hover:text-primary transition">
                <i className="bi bi-camera-video mr-1"></i>
                Video
              </div>
              <div className="flex items-center text-gray-600 cursor-pointer hover:text-primary transition">
                <i className="bi bi-link-45deg mr-1"></i>
                Tautan
              </div>
            </div>
            <button className="bg-primary hover:bg-primaryDark text-white py-2 px-6 rounded-lg font-medium transition flex items-center">
              <i className="bi bi-lightning-charge mr-1"></i>
              Posting
            </button>
          </div>
        </div>
        
        {/* Community Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image 
                      src={post.user.avatar} 
                      alt={post.user.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-800">{post.user.name}</div>
                    <div className="text-sm text-gray-500">{post.user.time}</div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  {post.image && (
                    <div className="relative w-full max-w-md mx-auto h-64">
                      <Image 
                        src={post.image} 
                        alt={post.alt}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="border-t border-gray-200 px-6 py-3 flex justify-between">
                <div className="flex items-center text-gray-600 cursor-pointer hover:text-primary transition">
                  <i className="bi bi-hand-thumbs-up mr-1"></i>
                  Suka ({post.likes})
                </div>
                <div className="flex items-center text-gray-600 cursor-pointer hover:text-primary transition">
                  <i className="bi bi-chat-dots mr-1"></i>
                  Komentar ({post.comments})
                </div>
                <div className="flex items-center text-gray-600 cursor-pointer hover:text-primary transition">
                  <i className="bi bi-share mr-1"></i>
                  Bagikan
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}