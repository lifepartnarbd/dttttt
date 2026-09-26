import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-emerald-400 text-xl font-bold mb-3">Halal Matrimony</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              পর্দা ও বিশ্বস্ততার সাথে জীবনসঙ্গী খুঁজে নেওয়ার একটি সম্পূর্ণ শরিয়াহ সম্মত ম্যাট্রিমোনিয়াল প্ল্যাটফর্ম।
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">প্রয়োজনীয় লিংক</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-emerald-400">হোম</Link></li>
              <li><Link href="#" className="hover:text-emerald-400">বায়োডাটা খুঁজুন</Link></li>
              <li><Link href="/create-biodata" className="hover:text-emerald-400">বায়োডাটা জমা দিন</Link></li>
              <li><Link href="#" className="hover:text-emerald-400">নির্দেশনা</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">পলিসি ও শর্তাবলী</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-emerald-400">গোপনীয়তা নীতি</Link></li>
              <li><Link href="/terms" className="hover:text-emerald-400">শর্তাবলী ও নীতিমালা</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">যোগাযোগ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />
                <span>চৌরাস্তা, গাজীপুর, ঢাকা</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:+8801618699125" className="hover:text-emerald-400">01618699125</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="https://wa.me/8801618699125" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                  WhatsApp: 01618699125
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="mailto:lifepartnarbd@gmail.com" className="hover:text-emerald-400">
                  lifepartnarbd@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          Halal Matrimony. সর্বস্বত্ব সংরক্ষিত।
        </div>
      </div>
    </footer>
  );
}
