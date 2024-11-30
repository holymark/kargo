import { Package, Truck, Globe, Search } from 'lucide-react'; // Import Lucide icons
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="grotesk bg-[#f9fbfb]">
      <div className="max-w-8xl mx-auto px-5 py-24 text-black">
        <div className="flex flex-wrap text-left">

          {/* Services Section */}
          <div className="w-full px-4 md:w-2/4 lg:w-1/5">
            <h2 className="mb-3 text-lg font-semibold tracking-widest">Our Services</h2>
            <nav className="list-none space-y-4 py-3">
              <li className="flex items-center space-x-2">
                <Package size={20} />
                <a href="javascript:void()" className="hover:underline">Express Shipping</a>
              </li>
              <li className="flex items-center space-x-2">
                <Truck size={20} />
                <a href="javascript:void()" className="hover:underline">Freight Solutions</a>
              </li>
              <li className="flex items-center space-x-2">
                <Globe size={20} />
                <a href="javascript:void()" className="hover:underline">International Shipping</a>
              </li>
              <li className="flex items-center space-x-2">
                <Search size={20} />
                <a href="javascript:void()" className="hover:underline">Track Your Shipment</a>
              </li>
            </nav>
          </div>

          {/* Additional Section */}
          <div className="w-full md:w-2/4 lg:w-1/5">
            <Link href="/">
              <div className="relative border border-black transition hover:border-gray-500">
                <div className="absolute top-0 right-0 pt-2 pr-2">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66992 0.747559L0.669922 6.74756"
                      stroke="black"
                    />
                    <path
                      d="M0.669922 0.747559H6.66992V6.74756"
                      stroke="black"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  Kargo offers the best in class logistics and delivery services worldwide. With fast, reliable, and secure shipping, we ensure your packages arrive at their destination on time, every time. Our network of trusted carriers guarantees smooth operations from start to finish, providing a hassle-free experience for both senders and receivers.
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="max-w-8xl mx-auto px-5 py-6 text-sm text-gray-600 flex flex-wrap justify-between">
          <p>&copy; {new Date().getFullYear()} Kargo. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="javascript:void()" className="hover:underline">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
