export const metadata = {
  title: 'শর্তাবলী | Halal Matrimony',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">শর্তাবলী ও ব্যবহারবিধি</h1>
      <p className="text-sm text-gray-500 mb-8">সর্বশেষ হালনাগাদ: {new Date().toLocaleDateString('bn-BD')}</p>

      <div className="prose prose-emerald max-w-none space-y-6 text-gray-700 text-sm leading-relaxed">

        <p>
          Halal Matrimony ব্যবহারের মাধ্যমে আপনি নিচের শর্তাবলীতে সম্মত হচ্ছেন। এই প্ল্যাটফর্মটি শুধুমাত্র বৈধভাবে
          বিবাহে ইচ্ছুক দ্বীনদার মুসলিম পাত্র-পাত্রীদের জন্য তৈরি — বিনোদন বা ক্যাজুয়াল পরিচয়ের জন্য নয়।
        </p>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">১. যোগ্যতা</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>বাংলাদেশের আইন অনুযায়ী বিবাহের জন্য বৈধ বয়সপ্রাপ্ত হতে হবে (মেয়ে ১৮+, ছেলে ২১+)</li>
            <li>একজন ব্যবহারকারী শুধুমাত্র একটি বায়োডাটা তৈরি করতে পারবেন</li>
            <li>প্রদত্ত সকল তথ্য সত্য ও নির্ভুল হতে হবে; ভুয়া তথ্য দেওয়া সম্পূর্ণ নিষিদ্ধ</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">২. বায়োডাটা অনুমোদন নীতি (শরিয়াহ সম্মত মানদণ্ড)</h2>
          <p>নিম্নলিখিত শর্ত পূরণ সাপেক্ষে বায়োডাটা অনুমোদন করা হবে:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>পাত্রের ক্ষেত্রে: নিয়মিত নামাজ আদায়, শরীয়তসম্মত পোশাক (টাখনুর ওপরে কাপড়)</li>
            <li>পাত্রীর ক্ষেত্রে: নিয়মিত নামাজ আদায়, ইসলামিক পর্দা মেনে চলা</li>
            <li>বায়োডাটা প্রকাশের আগে অভিভাবকের সম্মতি থাকা আবশ্যক</li>
            <li>প্রয়োজনে অভিভাবকের সাথে যোগাযোগ করে যাচাই করা হবে</li>
          </ul>
          <p className="mt-2">
            কোনো বায়োডাটা এই মানদণ্ড পূরণ না করলে, অথবা অনুমোদনের পর কোনো তথ্য পরিবর্তিত হলে, তা পুনরায় পর্যালোচনার
            জন্য "পেন্ডিং" অবস্থায় চলে যাবে।
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">৩. ব্যবহারের নিয়ম</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>এই প্ল্যাটফর্ম শুধুমাত্র ব্যক্তিগত বৈবাহিক উদ্দেশ্যে ব্যবহারযোগ্য, কোনো বাণিজ্যিক উদ্দেশ্যে নয়</li>
            <li>কারও বায়োডাটার স্ক্রিনশট নিয়ে অন্য কোথাও শেয়ার করা নিষিদ্ধ</li>
            <li>অসদাচরণ বা প্রতারণার প্রমাণসহ অভিযোগ পেলে অ্যাকাউন্ট স্থায়ীভাবে বন্ধ করে দেওয়া হতে পারে</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">৪. পেইড সার্ভিস</h2>
          <p>
            মৌলিক বায়োডাটা তালিকা ফ্রি দেখা গেলেও, সম্পূর্ণ বিস্তারিত তথ্য ও অভিভাবকের যোগাযোগ নম্বর দেখতে নির্দিষ্ট
            ফি পরিশোধ করতে হবে (স্থানীয় মোবাইল ব্যাংকিং মাধ্যমে)। পেমেন্ট সংক্রান্ত বিস্তারিত নীতি শীঘ্রই যুক্ত করা হবে।
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">৫. দায়বদ্ধতা</h2>
          <p>
            Halal Matrimony শুধুমাত্র পরিচয় করিয়ে দেওয়ার একটি মাধ্যম। এখানে যোগাযোগের ফলে সংঘটিত কোনো সম্পর্ক বা
            বিবাহ সংক্রান্ত সিদ্ধান্তের দায়ভার সম্পূর্ণভাবে সংশ্লিষ্ট ব্যক্তিদের নিজস্ব।
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">৬. যোগাযোগ</h2>
          <p>
            ইমেইল: <a href="mailto:lifepartnarbd@gmail.com" className="text-emerald-600">lifepartnarbd@gmail.com</a><br />
            ফোন/WhatsApp: <a href="tel:+8801618699125" className="text-emerald-600">01618699125</a><br />
            ঠিকানা: চৌরাস্তা, গাজীপুর, ঢাকা
          </p>
        </section>

      </div>
    </div>
  );
}
