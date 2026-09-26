export const metadata = {
  title: 'গোপনীয়তা নীতি | Life Partner BD',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">গোপনীয়তা নীতি</h1>
      <p className="text-sm text-gray-500 mb-8">সর্বশেষ হালনাগাদ: {new Date().toLocaleDateString('bn-BD')}</p>

      <div className="prose prose-emerald max-w-none space-y-6 text-gray-700 text-sm leading-relaxed">

        <p>
          Life Partner BD একটি সম্পূর্ণ শরিয়াহভিত্তিক ম্যাট্রিমোনিয়াল প্ল্যাটফর্ম, যেখানে সত্যিকারের দ্বীনদার পাত্র-পাত্রীরা
          অভিভাবকের সম্মতিক্রমে হালাল পন্থায় জীবনসঙ্গী খুঁজে নিতে পারেন। আপনার তথ্যের নিরাপত্তা ও গোপনীয়তা আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ।
        </p>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">১. আমরা যে তথ্য সংগ্রহ করি</h2>
          <p>সেবা প্রদানের জন্য আমরা নিম্নলিখিত তথ্য সংগ্রহ করি:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>নাম, ইমেইল, মোবাইল নম্বর (সাইনআপের সময়)</li>
            <li>জন্মসাল, উচ্চতা, গায়ের রং, শিক্ষাগত যোগ্যতা, পেশা, স্থায়ী জেলা</li>
            <li>দ্বীনি তথ্য (নামাজ, পর্দা/দাড়ি সংক্রান্ত)</li>
            <li>পারিবারিক পরিচিতি ও জীবনসঙ্গী সম্পর্কে প্রত্যাশা</li>
            <li>অভিভাবকের নাম, সম্পর্ক এবং মোবাইল নম্বর</li>
            <li>প্রোফাইল অ্যাভাটার (বাস্তব ছবি নয়, শুধুমাত্র প্রতীকী আইকন)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">২. অভিভাবকের তথ্য সুরক্ষা</h2>
          <p>
            অভিভাবকের মোবাইল নম্বর কখনোই সরাসরি ওয়েবসাইটে পাবলিকভাবে প্রদর্শিত হয় না। শুধুমাত্র অনুমোদিত ও পরিচয়
            যাচাইকৃত ব্যবহারকারীরা নির্দিষ্ট শর্তসাপেক্ষে (paid unlock) এই তথ্য দেখতে পারবেন, তাও একান্তভাবে বৈবাহিক
            যোগাযোগের উদ্দেশ্যে।
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">৩. আমরা তথ্য কীভাবে ব্যবহার করি</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>উপযুক্ত পাত্র-পাত্রী মিলিয়ে দেওয়ার জন্য</li>
            <li>বায়োডাটা অ্যাপ্রুভাল/মডারেশনের জন্য</li>
            <li>গ্রাহক সহায়তা প্রদানের জন্য</li>
            <li>প্রতারণা বা ভুয়া প্রোফাইল প্রতিরোধের জন্য</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">৪. তথ্য শেয়ারিং</h2>
          <p>
            আপনার ব্যক্তিগত পরিচয় ও যোগাযোগের তথ্য কখনোই তৃতীয় পক্ষের কাছে বিক্রি করা হয় না। শুধুমাত্র বিবাহের উদ্দেশ্যে,
            অনুমোদিত ও পেমেন্ট-ভেরিফাইড ব্যবহারকারীদের কাছে সীমিত পরিসরে বায়োডাটা প্রদর্শিত হয়।
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">৫. তথ্যের নিরাপত্তা</h2>
          <p>
            আপনার তথ্য Supabase-এর মাধ্যমে এনক্রিপ্টেড ডাটাবেসে সংরক্ষিত হয় এবং Row Level Security (RLS) নীতির
            মাধ্যমে সুরক্ষিত থাকে। তবে ইন্টারনেটের প্রকৃতির কারণে ১০০% নিরাপত্তার নিশ্চয়তা দেওয়া সম্ভব নয়।
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">৬. অ্যাকাউন্ট মুছে ফেলা</h2>
          <p>
            আপনি যেকোনো সময় আমাদের সাথে যোগাযোগ করে আপনার অ্যাকাউন্ট ও বায়োডাটা মুছে ফেলার অনুরোধ করতে পারেন।
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">৭. যোগাযোগ</h2>
          <p>
            এই গোপনীয়তা নীতি সম্পর্কে কোনো প্রশ্ন থাকলে যোগাযোগ করুন:<br />
            ইমেইল: <a href="mailto:lifepartnarbd@gmail.com" className="text-emerald-600">lifepartnarbd@gmail.com</a><br />
            ফোন/WhatsApp: <a href="tel:+8801618699125" className="text-emerald-600">01618699125</a><br />
            ঠিকানা: চৌরাস্তা, গাজীপুর, ঢাকা
          </p>
        </section>

      </div>
    </div>
  );
}
