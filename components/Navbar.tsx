import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-emerald-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-emerald-600">
              Halal Matrimony
            </Link>
          </div>
          
          {/* Menu Items (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium">হোম</Link>
            <Link href="#" className="text-gray-700 hover:text-emerald-600 font-medium">বায়োডাটা খুঁজুন</Link>
            <Link href="#" className="text-gray-700 hover:text-emerald-600 font-medium">নির্দেশনা</Link>
            <Link href="#" className="text-gray-700 hover:text-emerald-600 font-medium">যোগাযোগ</Link>
          </div>

          {/* Call to Action Button */}
          <div>
            <Link 
              href="/create-biodata" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-medium transition shadow-sm"
            >
              বায়োডাটা জমা দিন
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
