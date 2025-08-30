'use client';

import { useState } from 'react';

export default function Home() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { 
      id: 1, 
      text: "Halo! Saya WOW Assistant, siap membantu Anda dengan pertanyaan seputar limbah dan daur ulang. Ada yang bisa saya bantu?", 
      time: "12:30 PM", 
      isBot: true 
    }
  ]);
  const [messageInput, setMessageInput] = useState('');

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() === '') return;
    
    const newMessage = {
      id: chatMessages.length + 1,
      text: messageInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isBot: false
    };
    
    setChatMessages([...chatMessages, newMessage]);
    setMessageInput('');
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: chatMessages.length + 2,
        text: "Terima kasih atas pertanyaannya. Saya akan mencari informasi terbaik untuk Anda.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isBot: true
      };
      setChatMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformasi Limbah Menjadi Nilai</h2>
            <p className="text-lg md:text-xl mb-8">
              Platform e-commerce berbasis AI yang menghubungkan penyedia limbah dengan pengrajin kreatif untuk menciptakan produk bernilai tinggi.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative flex items-center bg-white rounded-full shadow-lg overflow-hidden">
                <input 
                  type="text" 
                  placeholder="Cari produk, solusi, atau edukasi..." 
                  className="w-full py-3 px-6 text-gray-800 focus:outline-none"
                />
                <button className="bg-primary hover:bg-primary-dark text-white py-3 px-6 font-medium transition">
                  <i className="bi bi-search inline mr-1"></i>
                  Cari
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div id="chatbot-card" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="bg-primary-light p-3 rounded-lg inline-block mb-4">
              <i className="bi bi-chat-dots text-primary text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Chatbot AI</h3>
            <p className="text-gray-600 mb-4">
              Dapatkan solusi instan untuk masalah limbah Anda dengan chatbot berbasis kecerdasan buatan kami.
            </p>
            <button 
              onClick={toggleChatbot}
              className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-medium transition"
            >
              Buka Chatbot
            </button>
          </div>
          
          <div id="visual-search-card" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="bg-primary-light p-3 rounded-lg inline-block mb-4">
              <i className="bi bi-camera text-primary text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Visual Search</h3>
            <p className="text-gray-600 mb-4">
              Identifikasi jenis limbah hanya dengan mengunggah foto dan dapatkan solusi terbaik.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-medium transition">
              <i className="bi bi-cloud-upload mr-1"></i> Unggah
            </button>
          </div>
          
          <div id="ecotracker-card" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="bg-primary-light p-3 rounded-lg inline-block mb-4">
              <i className="bi bi-graph-up-arrow text-primary text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Eco-Tracker</h3>
            <p className="text-gray-600 mb-4">
              Lacak kontribusi Anda terhadap lingkungan dan lihat dampak positif yang telah anda buat.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-medium transition">
              <i className="bi bi-bar-chart mr-1"></i> Lihat Statistik
            </button>
          </div>
        </div>

        {/* Chatbot Section */}
        <section id="chatbot-section" className="bg-white rounded-xl shadow-md p-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              <i className="bi bi-robot text-primary mr-2"></i>
              Chatbot AI
            </h2>
            <button 
              onClick={toggleChatbot}
              className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-medium transition mt-4 md:mt-0"
            >
              <i className="bi bi-chat-dots mr-1"></i> Buka Chatbot
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                Chatbot WOW menggunakan teknologi kecerdasan buatan terbaru untuk memberikan solusi pengelolaan limbah secara instan. Tanyakan apapun tentang:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Klasifikasi jenis limbah</li>
                <li>Cara daur ulang yang tepat</li>
                <li>Nilai ekonomi dari limbah</li>
                <li>Solusi pengolahan limbah</li>
              </ul>
              <p className="text-gray-600">
                Chatbot kami tersedia 24/7 dan terus belajar untuk memberikan jawaban yang lebih akurat.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-primary-light rounded-lg p-8 text-center">
                <i className="bi bi-robot text-primary text-6xl mx-auto mb-4"></i>
                <p className="text-gray-600">Ilustrasi Chatbot AI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Search Section */}
        <section id="visual-search-section" className="bg-white rounded-xl shadow-md p-6 mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              <i className="bi bi-camera text-primary mr-2"></i>
              Visual Search
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-primary-light rounded-lg p-8 text-center">
                <i className="bi bi-image-alt text-primary text-6xl mx-auto mb-4"></i>
                <p className="text-gray-600">Ilustrasi Visual Search</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                Gunakan teknologi pengenalan gambar canggih untuk mengidentifikasi jenis limbah Anda. Cukup unggah foto dan sistem kami akan:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Mengklasifikasikan jenis limbah</li>
                <li>Memberikan opsi daur ulang</li>
                <li>Menunjukkan nilai pasar</li>
                <li>Menghubungkan dengan pembeli potensial</li>
              </ul>
              <div id="upload-container" className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <i className="bi bi-cloud-arrow-up text-gray-400 text-4xl mx-auto mb-4"></i>
                <h3 className="text-lg font-medium mb-2">Unggah Gambar Limbah Anda</h3>
                <p className="text-gray-500 mb-4">Seret dan lepas gambar ke sini atau klik untuk memilih file</p>
                <button className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-medium transition">
                  <i className="bi bi-folder2-open mr-1"></i> Pilih File
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Eco Tracker Section */}
        <section id="eco-tracker-section" className="bg-white rounded-xl shadow-md p-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              <i className="bi bi-graph-up-arrow text-primary mr-2"></i>
              Eco-Tracker
            </h2>
            <button className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-medium transition mt-4 md:mt-0">
              <i className="bi bi-bar-chart mr-1"></i> Lihat Statistik
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                Pantau dampak positif Anda terhadap lingkungan dengan Eco-Tracker kami. Sistem ini mencatat:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Jumlah limbah yang telah didaur ulang</li>
                <li>Pengurangan emisi karbon</li>
                <li>Pendapatan dari limbah</li>
                <li>Kontribusi terhadap ekonomi sirkular</li>
              </ul>
              <p className="text-gray-600">
                Dapatkan laporan bulanan dan bagikan pencapaian Anda di media sosial untuk menginspirasi orang lain.
              </p>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-lg flex items-center justify-center min-h-[300px]">
              <div className="text-center p-8">
                <i className="bi bi-pie-chart text-gray-400 text-5xl mx-auto mb-4"></i>
                <p className="text-gray-500">Grafik statistik akan ditampilkan di sini setelah login</p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community-section" className="bg-white rounded-xl shadow-md p-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              <i className="bi bi-people text-primary mr-2"></i>
              Komunitas
            </h2>
            <button className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-medium transition mt-4 md:mt-0">
              <i className="bi bi-door-open mr-1"></i> Jelajahi Komunitas
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-primary-light rounded-lg p-8 text-center">
                <i className="bi bi-chat-quote text-primary text-6xl mx-auto mb-4"></i>
                <p className="text-gray-600">Ilustrasi Diskusi Komunitas</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                Bergabunglah dengan komunitas pengelola limbah terbesar di Indonesia. Diskusikan ide, temukan solusi, dan bangun jaringan dengan:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Pengrajin daur ulang</li>
                <li>Ahli lingkungan</li>
                <li>Penyedia limbah</li>
                <li>Pembeli produk daur ulang</li>
              </ul>
              <p className="text-gray-600">
                Komunitas kami aktif dengan diskusi harian, webinar bulanan, dan program kolaborasi.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education-section" className="bg-white rounded-xl shadow-md p-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              <i className="bi bi-journal-bookmark text-primary mr-2"></i>
              Edukasi
            </h2>
            <button className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-medium transition mt-4 md:mt-0">
              <i className="bi bi-journals mr-1"></i> Lihat Modul
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                Tingkatkan pengetahuan Anda tentang pengelolaan limbah dengan modul edukasi berbasis AI kami. Pelajari tentang:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Teknik daur ulang modern</li>
                <li>Pasar limbah dan produk daur ulang</li>
                <li>Inovasi material dari limbah</li>
                <li>Praktik bisnis berkelanjutan</li>
              </ul>
              <p className="text-gray-600">
                Sistem kami akan menyesuaikan materi pembelajaran berdasarkan minat dan tingkat pengetahuan Anda.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-primary-light rounded-lg p-8 text-center">
                <i className="bi bi-book text-primary text-6xl mx-auto mb-4"></i>
                <p className="text-gray-600">Ilustrasi Materi Edukasi</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution-section" className="bg-white rounded-xl shadow-md p-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              <i className="bi bi-lightbulb text-primary mr-2"></i>
              Solusi
            </h2>
            <button className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-medium transition mt-4 md:mt-0">
              <i className="bi bi-grid-3x3 mr-1"></i> Lihat Semua Solusi
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-primary-light p-3 rounded-lg inline-block mb-4">
                <i className="bi bi-brush text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Untuk Pengrajin</h3>
              <p className="text-gray-600 mb-4">
                Program pelatihan dan pendampingan untuk meningkatkan keterampilan daur ulang limbah menjadi produk bernilai tinggi.
              </p>
              <button className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-medium transition">
                <i className="bi bi-arrow-right mr-1"></i> Pelajari Lebih Lanjut
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-primary-light p-3 rounded-lg inline-block mb-4">
                <i className="bi bi-box-seam text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Untuk Penyedia</h3>
              <p className="text-gray-600 mb-4">
                Sistem pengumpulan limbah terintegrasi dengan insentif ekonomi untuk meningkatkan partisipasi dalam ekonomi sirkular.
              </p>
              <button className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-medium transition">
                <i className="bi bi-arrow-right mr-1"></i> Pelajari Lebih Lanjut
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-primary-light p-3 rounded-lg inline-block mb-4">
                <i className="bi bi-house-door text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Untuk Masyarakat</h3>
              <p className="text-gray-600 mb-4">
                Program edukasi dan reward system untuk mendorong partisipasi aktif dalam pemilahan dan pengelolaan limbah rumah tangga.
              </p>
              <button className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-medium transition">
                <i className="bi bi-arrow-right mr-1"></i> Pelajari Lebih Lanjut
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-primary-light p-3 rounded-lg inline-block mb-4">
                <i className="bi bi-building text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Untuk Pemerintah</h3>
              <p className="text-gray-600 mb-4">
                Sistem monitoring dan evaluasi berbasis data untuk mendukung kebijakan pengelolaan limbah berkelanjutan di tingkat daerah.
              </p>
              <button className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-medium transition">
                <i className="bi bi-arrow-right mr-1"></i> Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        <div 
          id="chatbot-container" 
          className={`${isChatbotOpen ? 'flex' : 'hidden'} bg-white rounded-xl shadow-xl w-80 h-96 flex-col`}
        >
          <div className="bg-primary text-white p-4 rounded-t-xl flex justify-between items-center">
            <h3 className="font-medium flex items-center">
              <i className="bi bi-robot mr-2"></i>
              WOW Assistant
            </h3>
            <button onClick={toggleChatbot} className="text-white">
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div id="chatbot-messages" className="flex-grow p-4 overflow-y-auto bg-gray-50">
            {chatMessages.map((message) => (
              <div key={message.id} className={`mb-4 ${message.isBot ? '' : 'text-right'}`}>
                <div className={`${message.isBot ? 'bg-primary-light text-gray-800' : 'bg-primary text-white'} p-3 rounded-lg inline-block`}>
                  {message.text}
                </div>
                <div className="text-xs text-gray-500 mt-1">{message.time}</div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t flex">
            <input 
              type="text" 
              id="chatbot-input" 
              placeholder="Ketik pesan Anda..." 
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-grow border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button 
              onClick={handleSendMessage}
              className="bg-primary text-white px-4 rounded-r-lg"
            >
              <i className="bi bi-send"></i>
            </button>
          </div>
        </div>
        <div 
          id="chatbot-toggle" 
          onClick={toggleChatbot}
          className="bg-primary text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-primary-dark transition"
        >
          <i className="bi bi-chat-dots text-xl"></i>
        </div>
      </div>
    </div>
  );
}