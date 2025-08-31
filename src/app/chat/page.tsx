'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  // Data chat untuk memudahkan rendering
  const chats = [
    {
      id: 'ahmad',
      name: 'Ahmad Recycler',
      avatar: 'https://i.pravatar.cc/150?img=1',
      lastMessage: 'Foto',
      time: '10:30',
      unread: 1,
      isOnline: true,
      messages: [
        { sender: 'them', text: 'Halo, apakah limbah plastik jenis HDPE masih tersedia?', time: '10:30 AM', hasImage: false },
        { sender: 'me', text: 'Halo Ahmad, masih tersedia sekitar 500kg', time: '10:32 AM', hasImage: false },
        { sender: 'them', text: 'Bisa saya lihat fotonya? Saya ingin melihat kondisi plastiknya', time: '10:33 AM', hasImage: false },
        { sender: 'me', text: '', time: '10:35 AM', hasImage: true, imageUrl: 'https://via.placeholder.com/300x200/2e7d32/ffffff?text=Plastik+HDPE' },
        { sender: 'me', text: '', time: '10:36 AM', hasImage: true, imageUrl: 'https://via.placeholder.com/300x200/607d8b/ffffff?text=Contoh+Produk' },
        { sender: 'me', text: 'Ini contoh produk yang kami hasilkan dari daur ulang HDPE', time: '10:37 AM', hasImage: false }
      ]
    },
    {
      id: 'budi',
      name: 'Budi Waste Supplier',
      avatar: 'https://i.pravatar.cc/150?img=2',
      lastMessage: 'Saya punya 2 ton kardus bekas',
      time: '09:15',
      unread: 0,
      isOnline: false,
      messages: []
    },
    {
      id: 'cv',
      name: 'CV Daur Ulang Maju',
      avatar: 'https://i.pravatar.cc/150?img=3',
      lastMessage: 'Kami tertarik dengan penawaran Anda',
      time: 'Kemarin',
      unread: 0,
      isOnline: false,
      messages: []
    },
    {
      id: 'dina',
      name: 'Dina Pengrajin',
      avatar: 'https://i.pravatar.cc/150?img=4',
      lastMessage: '2 Foto',
      time: 'Senin',
      unread: 0,
      isOnline: false,
      messages: []
    },
    {
      id: 'eko',
      name: 'Eko Scrap Collector',
      avatar: 'https://i.pravatar.cc/150?img=5',
      lastMessage: 'Lokasi penjemputan dimana?',
      time: 'Minggu',
      unread: 0,
      isOnline: false,
      messages: []
    }
  ];

  const selectedChatData = chats.find(chat => chat.id === selectedChat);

  const handleChatSelect = (chatId: string) => {
    setSelectedChat(chatId);
  };

  const handleBackToList = () => {
    setSelectedChat(null);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Logic untuk mengirim pesan
      setMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Chat List */}
      <div className={`w-full md:w-1/3 bg-white border-r border-gray-200 flex flex-col ${selectedChat ? 'hidden md:flex' : 'flex'}`}>
        <div className="p-4 border-b border-gray-200 flex items-center">
          {/* Tombol kembali yang ditambahkan */}
          <button 
            onClick={handleBackToList}
            className="mr-2 text-gray-600 hover:text-primary md:hidden"
          >
            <i className="bi bi-arrow-left text-xl"></i>
          </button>
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <i className="bi bi-chat-dots text-primary mr-2"></i> Pesan
          </h2>
        </div>
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Cari percakapan..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
            <i className="bi bi-search absolute left-3 top-3 text-gray-400"></i>
          </div>
        </div>
        <div className="flex-grow overflow-y-auto">
          {chats.map((chat) => (
            <div 
              key={chat.id} 
              className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
              onClick={() => handleChatSelect(chat.id)}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <div className="relative">
                    <Image 
                      src={chat.avatar} 
                      alt={chat.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    {chat.isOnline && (
                      <span className="absolute bottom-0 right-0 bg-green-500 border-2 border-white rounded-full h-3 w-3"></span>
                    )}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="font-medium text-gray-800">{chat.name}</div>
                  <div className="text-sm text-gray-500 flex items-center">
                    {chat.lastMessage.includes('Foto') && (
                      <i className="bi bi-image text-primary mr-1"></i>
                    )}
                    {chat.lastMessage.includes('2 Foto') && (
                      <i className="bi bi-images text-primary mr-1"></i>
                    )}
                    {chat.lastMessage}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">{chat.time}</div>
                  {chat.unread > 0 && (
                    <div className="mt-1 flex justify-end">
                      <span className="bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {chat.unread}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Conversation */}
      <div className={`flex flex-col w-full md:w-2/3 bg-white ${selectedChat ? 'flex' : 'hidden md:flex'}`}>
        {selectedChatData ? (
          <>
            <div className="p-4 border-b border-gray-200 flex items-center">
              <button 
                onClick={handleBackToList}
                className="md:hidden mr-3 cursor-pointer"
              >
                <i className="bi bi-arrow-left text-xl text-gray-600"></i>
              </button>
              <div className="flex-shrink-0 mr-3">
                <Image 
                  src={selectedChatData.avatar} 
                  alt={selectedChatData.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-800">{selectedChatData.name}</h3>
                <p className={`text-sm ${selectedChatData.isOnline ? 'text-green-500' : 'text-gray-500'}`}>
                  {selectedChatData.isOnline ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>
            <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
              {selectedChatData.messages.map((msg, index) => (
                <div key={index} className={`flex mb-4 ${msg.sender === 'me' ? 'justify-end' : ''}`}>
                  {msg.sender === 'them' && (
                    <div className="mr-3 flex-shrink-0">
                      <Image 
                        src={selectedChatData.avatar} 
                        alt={selectedChatData.name}
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    </div>
                  )}
                  {msg.hasImage ? (
                    <div className="max-w-xs md:max-w-md">
                      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                        <Image 
                          src={msg.imageUrl!} 
                          alt="Chat image"
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover cursor-pointer"
                        />
                      </div>
                      <div className={`text-xs mt-1 flex items-center ${msg.sender === 'me' ? 'text-gray-500 justify-end' : 'text-gray-500'}`}>
                        {msg.time}
                        {msg.sender === 'me' && (
                          <i className="bi bi-check2-all text-primary ml-1"></i>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className={`${msg.sender === 'me' ? 'bg-primary text-white' : 'bg-white'} rounded-lg p-3 shadow-sm max-w-xs md:max-w-md`}>
                      <div>{msg.text}</div>
                      <div className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-primaryLight' : 'text-gray-500'} flex items-center`}>
                        {msg.time}
                        {msg.sender === 'me' && (
                          <i className="bi bi-check2-all ml-1"></i>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <form onSubmit={handleSendMessage} className="flex items-center">
                <div className="mr-2">
                  <button 
                    type="button"
                    title="Lampirkan file" 
                    className="text-gray-500 hover:text-primary p-2 rounded-full hover:bg-gray-100"
                  >
                    <i className="bi bi-paperclip text-xl"></i>
                  </button>
                  <input type="file" className="hidden" />
                </div>
                <input 
                  type="text" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ketik pesan..." 
                  className="flex-grow border border-gray-300 rounded-full py-2 px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                />
                <button 
                  type="submit"
                  className="ml-2 bg-primary hover:bg-primaryDark text-white p-2 rounded-full"
                >
                  <i className="bi bi-send text-lg"></i>
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-500">
              <i className="bi bi-chat-dots text-4xl mb-2"></i>
              <p>Pilih percakapan untuk memulai chat</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}