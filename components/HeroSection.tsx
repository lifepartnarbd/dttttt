import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] bg-gray-50 flex items-center justify-center">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          // এখানে আমরা AI দিয়ে জেনারেট করা সেই ছবিটি ব্যবহার করব
          backgroundImage: "url('/images/hero-bg.jpg')", 
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* ছবিটার উপরে হালকা কালো শ্যাডো যাতে টেক্সট ভালো দেখা যায় */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          হালাল উপায়ে খুঁজে নিন আপনার <span className="text-emerald-400">জীবনসঙ্গী</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10">
          সম্পূর্ণ ইসলামিক শরিয়াহ সম্মত, নিরাপদ ও প্রাইভেসি নির্ভর ম্যাট্রিমোনিয়াল প্ল্যাটফর্ম।
        </p>

        {/* Quick Search / Filter Box */}
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4 items-center justify-center max-w-4xl mx-auto">
          <select className="w-full md:w-auto px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700">
            <option value="">আমি খুঁজছি</option>
            <option value="bride">কনে (Bride)</option>
            <option value="groom">পাত্র (Groom)</option>
          </select>

          <select className="w-full md:w-auto px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700">
            <option value="">বৈবাহিক অবস্থা</option>
            <option value="unmarried">অবিবাহিত</option>
            <option value="divorced">ডিভোর্সড</option>
            <option value="widow">বিধবা/বিপত্নীক</option>
          </select>

          <button className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-semibold transition duration-300">
            বায়োডাটা খুঁজুন
          </button>
        </div>
      </div>
    </section>
  );
}
