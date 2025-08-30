import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNDQ4IDBINjRDMjguNyAwIDAgMjguNyAwIDY0djM4NGMwIDM1LjMgMjguNyA2NCA2NCA2NGgzODRjMzUuMyAwIDY0LTI4LjcgNjQtNjRWNjRjMC0zNS4zLTI4LjctNjQtNjQtNjZ6TTE2MCAzODRIMTA0di0xMDNoNTZ2MTAzem0wLTE1MUgxMDRWMTI4aDU2djEwNXptMTQ0IDE1MUgyMDh2LTEwM2g5NnYxMDN6bTAtMTUxSDIwOFYxMjhoOTZ2MTA1eiIvPjwvc3ZnPg==" 
                alt="WOW Logo" 
                className="h-10 w-10" 
              />
              <h3 className="text-xl font-bold ml-3">
                <span className="text-primary">WOW</span>
                <span className="text-gray-300">(Waste to Worth)</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              Platform e-commerce berbasis Generative AI untuk optimalisasi jaringan penyedia dan pengrajin limbah.
            </p>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary transition transform hover:scale-110"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram text-xl"></i>
              </a>
              {/* YouTube */}
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary transition transform hover:scale-110"
                aria-label="YouTube"
              >
                <i className="bi bi-youtube text-xl"></i>
              </a>
              {/* TikTok */}
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary transition transform hover:scale-110"
                aria-label="TikTok"
              >
                <i className="bi bi-tiktok text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-primary transition flex items-center"
                >
                  <i className="bi bi-house-door mr-2"></i>
                  Beranda
                </Link>
              </li>
              <li>
                <Link 
                  href="/marketplace" 
                  className="text-gray-300 hover:text-primary transition flex items-center"
                >
                  <i className="bi bi-cart3 mr-2"></i>
                  Pasar
                </Link>
              </li>
              <li>
                <Link 
                  href="/solutions" 
                  className="text-gray-300 hover:text-primary transition flex items-center"
                >
                  <i className="bi bi-shield-check mr-2"></i>
                  Solusi
                </Link>
              </li>
              <li>
                <Link 
                  href="/community" 
                  className="text-gray-300 hover:text-primary transition flex items-center"
                >
                  <i className="bi bi-people mr-2"></i>
                  Komunitas
                </Link>
              </li>
              <li>
                <Link 
                  href="/education" 
                  className="text-gray-300 hover:text-primary transition flex items-center"
                >
                  <i className="bi bi-book mr-2"></i>
                  Edukasi
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Layanan</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-primary transition flex items-center"
                >
                  <i className="bi bi-chat-dots mr-2"></i>
                  Chatbot AI
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-primary transition flex items-center"
                >
                  <i className="bi bi-search mr-2"></i>
                  Visual Search
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-primary transition flex items-center"
                >
                  <i className="bi bi-graph-up mr-2"></i>
                  Eco-Tracker
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-primary transition flex items-center"
                >
                  <i className="bi bi-shop mr-2"></i>
                  Marketplace
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-primary transition flex items-center"
                >
                  <i className="bi bi-book mr-2"></i>
                  Edukasi
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Hubungi Kami</h4>
            <div className="space-y-3">
              <p className="text-gray-300 flex items-center">
                <i className="bi bi-geo-alt mr-2 text-primary"></i>
                Tasikmalaya
              </p>
              <p className="text-gray-300 flex items-center">
                <i className="bi bi-telephone mr-2 text-primary"></i>
                +6281312132075
              </p>
              <p className="text-gray-300 flex items-center">
                <i className="bi bi-envelope mr-2 text-primary"></i>
                info@wow-wastetoworth.id
              </p>
              <p className="text-gray-300 flex items-center">
                <i className="bi bi-clock mr-2 text-primary"></i>
                Senin-Jumat: 09.00-17.00
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2025 WOW (Waste to Worth). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}