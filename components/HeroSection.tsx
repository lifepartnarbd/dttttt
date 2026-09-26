export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-emerald-900 text-white">

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-90">
        {/* মেঘ - বাম দিকে */}
        <svg className="absolute top-10 left-6 w-20 h-auto text-white/20" viewBox="0 0 100 60" fill="currentColor">
          <ellipse cx="30" cy="35" rx="25" ry="18" />
          <ellipse cx="55" cy="28" rx="20" ry="15" />
          <ellipse cx="70" cy="38" rx="18" ry="14" />
        </svg>

        {/* মেঘ - ডান দিকে */}
        <svg className="absolute top-24 right-10 w-16 h-auto text-white/15 hidden md:block" viewBox="0 0 100 60" fill="currentColor">
          <ellipse cx="30" cy="35" rx="25" ry="18" />
          <ellipse cx="55" cy="28" rx="20" ry="15" />
        </svg>

        {/* উড়ন্ত পায়রা - ডান উপরে */}
        <svg className="absolute top-12 right-16 w-14 h-14 text-amber-300/60 hidden md:block" viewBox="0 0 64 64" fill="currentColor">
          <path d="M32 14c6 0 14 4 18 12-4-2-9-3-13-2 6 3 10 8 12 14-5-4-11-6-17-6-8 0-15 4-19 10 1-9 6-17 14-22-4 0-8 1-11 3 3-6 9-9 16-9z" />
        </svg>

        {/* ঝুলন্ত লণ্ঠন - বাম নিচে */}
        <svg className="absolute bottom-6 left-10 w-10 h-20 text-amber-300/40 hidden md:block" viewBox="0 0 40 80" fill="currentColor">
          <line x1="20" y1="0" x2="20" y2="15" stroke="currentColor" strokeWidth="1" />
          <rect x="10" y="15" width="20" height="30" rx="4" />
          <polygon points="10,45 30,45 20,60" />
        </svg>

        {/* ঝুলন্ত লণ্ঠন - ডান নিচে */}
        <svg className="absolute bottom-10 right-14 w-8 h-16 text-amber-300/30 hidden md:block" viewBox="0 0 40 80" fill="currentColor">
          <line x1="20" y1="0" x2="20" y2="15" stroke="currentColor" strokeWidth="1" />
          <rect x="10" y="15" width="20" height="30" rx="4" />
          <polygon points="10,45 30,45 20,60" />
        </svg>

        {/* হার্ট - ছোট ছোট */}
        <svg className="absolute bottom-28 left-1/4 w-5 h-5 text-pink-300/30 hidden md:block" viewBox="0 0 32 29" fill="currentColor">
          <path d="M23.6 0c-3 0-5.9 1.6-7.6 4.3C14.3 1.6 11.4 0 8.4 0 3.8 0 0 3.9 0 8.7c0 8.1 9.5 14.5 16 20.2 6.5-5.7 16-12.1 16-20.2C32 3.9 28.2 0 23.6 0z" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-16 text-center">

        <span className="inline-block bg-white/10 text-amber-300 text-xs font-medium px-4 py-1.5 rounded-full mb-6 border border-amber-300/30">
          বিসমিল্লাহির রাহমানির রাহিম
        </span>

        <h1 className="text-3xl md:text-5xl font-extrabold leading-snug mb-4">
          <span className="text-white">১০০% ভেরিফাইড প্রোফাইলে</span>
          <br />
          <span className="text-amber-300">খুঁজুন আপনার জীবনসঙ্গী</span>
        </h1>

        <p className="text-teal-100 text-base md:text-lg max-w-2xl mx-auto mb-8">
          নিরাপত্তা ও গোপনীয়তার সর্বোচ্চ নিশ্চয়তা দিয়ে আমরা দিচ্ছি একটি নিরাপদ, বিশ্বস্ত ম্যাচমেকিং অভিজ্ঞতা।
        </p>

        {/* হাদিস কোট বক্স */}
        <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4 max-w-2xl mx-auto mb-8 border border-white/10">
          <p className="text-sm md:text-base text-teal-50 italic">
            যে ব্যক্তি বিবাহ করলো, সে তার দ্বীনের অর্ধেক পূর্ণ করে ফেললো। বাকি অর্ধেকের ব্যাপারে সে আল্লাহকে ভয় করুক।
          </p>
          <p className="text-xs text-amber-300 mt-2">— বায়হাকী, শুআবুল ঈমান, ৫৪৮৬</p>
        </div>

        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4 md:p-6 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-3">
            <select className="flex-1 rounded-lg p-2.5 text-sm text-gray-900 bg-white">
              <option>আমি খুঁজছি</option>
              <option>পাত্র (Groom)</option>
              <option>পাত্রী (Bride)</option>
            </select>

            <select className="flex-1 rounded-lg p-2.5 text-sm text-gray-900 bg-white">
              <option>বৈবাহিক অবস্থা</option>
              <option>অবিবাহিত</option>
              <option>বিবাহবিচ্ছেদ</option>
              <option>বিধবা/বিপত্নীক</option>
            </select>

            <button className="bg-amber-400 hover:bg-amber-300 text-teal-950 font-semibold px-6 py-2.5 rounded-lg text-sm transition whitespace-nowrap">
              সার্চ করুন
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
