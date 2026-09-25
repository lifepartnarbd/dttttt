import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[550px] flex items-center justify-center overflow-hidden">
      {/* Background Gradient (ছবি না থাকা পর্যন্ত এটি দেখাবে) */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 z-0"></div>
      
      {/* Decorative patterns (হালকা ডিজাইন) */}
      <div className="absolute inset-0 opacity-10 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-8">
        <span className="inline-block py-1 px-3 rounded-full bg-emerald-800/50 text-emerald-100 text-sm font-semibold mb-6 border border-emerald-700/50 backdrop-blur-sm">
          বিসমিল্লাহির রাহমানির রাহিম
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          পর্দা ও বিশ্বস্ততার সাথে <br/> খুঁজে নিন আপনার <span className="text-emerald-300">জীবনসঙ্গী</span>
        </h1>
        <p className="text-lg md:text-xl text-emerald-100/90 mb-10 max-w-2xl mx-auto">
          সম্পূর্ণ ইসলামিক শরিয়াহ সম্মত, নিরাপদ ও প্রাইভেসি নির্ভর ম্যাট্রিমোনিয়াল প্ল্যাটফর্ম।
        </p>

        {/* Quick Search Box */}
        <div className="bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-white/20 shadow-2xl flex flex-col md:flex-row gap-3 items-center justify-center max-w-3xl mx-auto">
          <select className="w-full md:w-auto px-4 py-3 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium">
            <option value="">আমি খুঁজছি</option>
            <option value="bride">কনে (Bride)</option>
            <option value="groom">পাত্র (Groom)</option>
          </select>

          <select className="w-full md:w-auto px-4 py-3 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium">
            <option value="">বৈবাহিক অবস্থা</option>
            <option value="unmarried">অবিবাহিত</option>
            <option value="divorced">ডিভোর্সড</option>
            <option value="widow">বিধবা/বিপত্নীক</option>
          </select>

          <button className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-8 py-3 rounded-xl font-bold transition duration-300 shadow-lg">
            সার্চ করুন
          </button>
        </div>
      </div>
    </section>
  );
}
