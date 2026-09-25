import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-emerald-700 mb-3">
        Halal Matrimony BD
      </h1>
      <p className="text-gray-600 max-w-md mb-6 text-sm sm:text-base">
        পর্দা ও বিশ্বস্ততার সাথে দ্বীনি জীবনসঙ্গী খোঁজার হালাল ইসলামিক ম্যাট্রিমনি প্ল্যাটফর্ম।
      </p>
      <div className="flex gap-4">
        <Link
          href="/create-biodata"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition"
        >
          বায়োডাটা তৈরি করুন
        </Link>
      </div>
    </main>
  );
}
