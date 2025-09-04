'use client';

import { useState } from 'react';
import Image from 'next/image';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  joinDate: string;
  status: 'active' | 'pending' | 'suspended';
}

interface EducationContent {
  id: string;
  title: string;
  category: string;
  createdDate: string;
  views: number;
  image: string;
}

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard-section');
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'Budi Santoso',
      email: 'budi.santoso@email.com',
      role: 'Penjual',
      joinDate: '15 Mar 2023',
      status: 'active'
    },
    {
      id: '2',
      name: 'Siti Rahayu',
      email: 'siti.rahayu@email.com',
      role: 'Pembeli',
      joinDate: '22 Apr 2023',
      status: 'active'
    },
    {
      id: '3',
      name: 'Ahmad Sutisna',
      email: 'ahmad.sutisna@email.com',
      role: 'Penjual',
      joinDate: '10 Mei 2023',
      status: 'pending'
    }
  ]);

  const [educationContents, setEducationContents] = useState<EducationContent[]>([
    {
      id: '1',
      title: 'Panduan Daur Ulang Plastik',
      category: 'Daur Ulang Plastik',
      createdDate: '12 April 2023',
      views: 1245,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: '2',
      title: 'Cara Membuat Kompos Rumahan',
      category: 'Kompos',
      createdDate: '5 Mei 2023',
      views: 892,
      image: 'https://via.placeholder.com/100'
    }
  ]);

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const handleDeleteUser = (userId: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus pengguna ini?')) {
      setUsers(users.filter(user => user.id !== userId));
      alert('Pengguna berhasil dihapus');
    }
  };

  const handleDeleteEducationContent = (contentId: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus konten ini?')) {
      setEducationContents(educationContents.filter(content => content.id !== contentId));
      alert('Konten berhasil dihapus');
    }
  };

  const getStatusBadge = (status: User['status']) => {
    switch (status) {
      case 'active':
        return <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Aktif</span>;
      case 'pending':
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Tertunda</span>;
      case 'suspended':
        return <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Ditangguhkan</span>;
      default:
        return null;
    }
  };

  const isActiveSection = (sectionId: string) => {
    return activeSection === sectionId;
  };

  const isActiveNav = (navId: string) => {
    const navMap: { [key: string]: string } = {
      'nav-dashboard': 'dashboard-section',
      'nav-users': 'user-section',
      'nav-education': 'education-section',
      'nav-settings': 'settings-section'
    };
    return activeSection === navMap[navId];
  };

  return (
    <div className="flex h-screen">
      {/* Main Navigation */}
      <nav className="w-64 bg-dark text-white flex-shrink-0">
        <div className="p-4 border-b border-darkLight">
          <h1 className="text-xl font-bold">WOW Admin</h1>
          <p className="text-gray-400 text-sm">Waste to Worth Management</p>
        </div>
        <div className="p-4 space-y-2">
          <div 
            id="nav-dashboard"
            className={`p-3 rounded-lg font-medium flex items-center cursor-pointer ${
              isActiveNav('nav-dashboard') ? 'bg-primary' : 'hover:bg-darkLight'
            }`}
            onClick={() => handleNavigation('dashboard-section')}
          >
            <i className="bi bi-speedometer2 mr-3"></i>
            <span>Dashboard</span>
          </div>
          <div 
            id="nav-users"
            className={`p-3 rounded-lg font-medium flex items-center cursor-pointer ${
              isActiveNav('nav-users') ? 'bg-primary' : 'hover:bg-darkLight'
            }`}
            onClick={() => handleNavigation('user-section')}
          >
            <i className="bi bi-people mr-3"></i>
            <span>Pengguna</span>
          </div>
          <div 
            id="nav-education"
            className={`p-3 rounded-lg font-medium flex items-center cursor-pointer ${
              isActiveNav('nav-education') ? 'bg-primary' : 'hover:bg-darkLight'
            }`}
            onClick={() => handleNavigation('education-section')}
          >
            <i className="bi bi-book mr-3"></i>
            <span>Edukasi</span>
          </div>
          <div 
            id="nav-settings"
            className={`p-3 rounded-lg font-medium flex items-center cursor-pointer ${
              isActiveNav('nav-settings') ? 'bg-primary' : 'hover:bg-darkLight'
            }`}
            onClick={() => handleNavigation('settings-section')}
          >
            <i className="bi bi-gear mr-3"></i>
            <span>Pengaturan</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Admin Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between p-4">
            <div>
              <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
              <p className="text-gray-600">Waste to Worth Management System</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-primary transition">
                <i className="bi bi-bell text-xl"></i>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">5</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-primary transition">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <i className="bi bi-person text-white"></i>
                </div>
                <span>Admin User</span>
              </button>
              <button className="text-gray-600 hover:text-primary transition">
                <i className="bi bi-box-arrow-right text-xl"></i>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Dashboard Section */}
          <section id="dashboard-section" className={isActiveSection('dashboard-section') ? '' : 'hidden'}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Overview Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-gray-600 text-sm font-medium mb-2">Total Pengguna</h3>
                <div className="text-3xl font-bold text-gray-800 mb-2">2,458</div>
                <div className="text-sm text-green-600 flex items-center">
                  <i className="bi bi-arrow-up mr-1"></i> +15% dari bulan lalu
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-gray-600 text-sm font-medium mb-2">Penjual Terdaftar</h3>
                <div className="text-3xl font-bold text-gray-800 mb-2">324</div>
                <div className="text-sm text-green-600 flex items-center">
                  <i className="bi bi-arrow-up mr-1"></i> +8% dari bulan lalu
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-gray-600 text-sm font-medium mb-2">Transaksi Bulan Ini</h3>
                <div className="text-3xl font-bold text-gray-800 mb-2">1,247</div>
                <div className="text-sm text-green-600 flex items-center">
                  <i className="bi bi-arrow-up mr-1"></i> +22% dari bulan lalu
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-gray-600 text-sm font-medium mb-2">Limbah Didaur Ulang</h3>
                <div className="text-3xl font-bold text-gray-800 mb-2">5.8 ton</div>
                <div className="text-sm text-gray-600">Setara dengan 120 pohon</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Aktivitas Terkini</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
                  <div className="text-gray-700">User baru mendaftar: Ahmad Sutisna</div>
                  <div className="text-sm text-gray-500">10 menit lalu</div>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
                  <div className="text-gray-700">Produk baru membutuhkan verifikasi: "Potongan Kain Denim"</div>
                  <div className="text-sm text-gray-500">30 menit lalu</div>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
                  <div className="text-gray-700">Pembayaran diterima untuk Order #WTW2023-021</div>
                  <div className="text-sm text-gray-500">1 jam lalu</div>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
                  <div className="text-gray-700">Laporan baru dari user: Problem dengan pengiriman</div>
                  <div className="text-sm text-gray-500">2 jam lalu</div>
                </div>
              </div>
            </div>
          </section>

          {/* User Management Section */}
          <section id="user-section" className={isActiveSection('user-section') ? '' : 'hidden'}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manajemen Pengguna</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6 space-y-4 md:space-y-0">
                <input type="text" placeholder="Cari pengguna..." className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" />
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition">
                  <option>Semua Role</option>
                  <option>Pembeli</option>
                  <option>Penjual</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition">
                  <option>Semua Status</option>
                  <option>Aktif</option>
                  <option>Tertunda</option>
                  <option>Ditangguhkan</option>
                </select>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Nama</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Role</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Bergabung</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-4 py-3 text-sm text-gray-800">{user.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{user.email}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{user.role}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{user.joinDate}</td>
                        <td className="px-4 py-3 text-sm">
                          {getStatusBadge(user.status)}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <button className="text-blue-600 hover:text-blue-800 mr-3">
                            <i className="bi bi-eye"></i>
                          </button>
                          <button className="text-gray-600 hover:text-gray-800 mr-3">
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button 
                            className="text-red-600 hover:text-red-800"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Education Management Section */}
          <section id="education-section" className={isActiveSection('education-section') ? '' : 'hidden'}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manajemen Konten Edukasi</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6 space-y-4 md:space-y-0">
                <button className="bg-primary hover:bg-primaryDark text-white py-2 px-4 rounded-lg font-medium transition flex items-center">
                  <i className="bi bi-plus-circle mr-2"></i> Tambah Konten Baru
                </button>
                <input type="text" placeholder="Cari konten edukasi..." className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" />
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition">
                  <option>Semua Kategori</option>
                  <option>Daur Ulang Plastik</option>
                  <option>Daur Ulang Kertas</option>
                  <option>Daur Ulang Logam</option>
                  <option>Kompos</option>
                </select>
              </div>
              
              <div className="space-y-4">
                {educationContents.map((content) => (
                  <div key={content.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                        <Image 
                          src={content.image} 
                          alt={content.title}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 mb-4 md:mb-0">
                        <h3 className="font-medium text-gray-800 mb-1">{content.title}</h3>
                        <p className="text-sm text-gray-600 mb-1">Kategori: {content.category}</p>
                        <p className="text-xs text-gray-500 mb-1">Dibuat: {content.createdDate}</p>
                        <p className="text-xs text-gray-500">Dilihat: {content.views.toLocaleString('id-ID')} kali</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded text-sm font-medium transition">
                          Edit
                        </button>
                        <button 
                          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-sm font-medium transition"
                          onClick={() => handleDeleteEducationContent(content.id)}
                        >
                          Hapus
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm font-medium transition">
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* System Settings Section */}
          <section id="settings-section" className={isActiveSection('settings-section') ? '' : 'hidden'}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pengaturan Sistem</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Pengaturan Umum</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nama Platform</label>
                      <input type="text" defaultValue="Waste to Worth" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Admin</label>
                      <input type="email" defaultValue="admin@wow-wastetoworth.id" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mata Uang</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition">
                        <option selected>IDR (Rupiah)</option>
                        <option>USD (Dollar AS)</option>
                      </select>
                    </div>
                  </form>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Pengaturan Pembayaran</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Metode Pembayaran</label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input type="checkbox" defaultChecked className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                          <label className="ml-2 text-sm text-gray-700">Transfer Bank</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" defaultChecked className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                          <label className="ml-2 text-sm text-gray-700">E-Wallet</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                          <label className="ml-2 text-sm text-gray-700">COD (Cash on Delivery)</label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Pengaturan Notifikasi</h3>
                <form className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Notifikasi</label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" defaultChecked className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                        <label className="ml-2 text-sm text-gray-700">Order Baru</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" defaultChecked className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                        <label className="ml-2 text-sm text-gray-700">Pembayaran Diterima</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" defaultChecked className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                        <label className="ml-2 text-sm text-gray-700">Laporan User</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              
              <div>
                <button className="bg-primary hover:bg-primaryDark text-white py-2 px-6 rounded-lg font-medium transition flex items-center">
                  <i className="bi bi-check-circle mr-2"></i> Simpan Pengaturan
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}