import { UserPlus, Search, Phone, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'বায়োডাটা তৈরি করুন',
    description: 'কয়েকটি সহজ ধাপে সম্পূর্ণ ফ্রিতে নিজের বায়োডাটা তৈরি করুন।',
  },
  {
    icon: Search,
    title: 'বায়োডাটা খুঁজুন',
    description: 'বয়স, জেলা, শিক্ষা ও পেশা অনুযায়ী ফিল্টার করে পছন্দের বায়োডাটা খুঁজে নিন।',
  },
  {
    icon: Phone,
    title: 'অভিভাবকের সাথে যোগাযোগ',
    description: 'পছন্দ হলে সরাসরি সংশ্লিষ্ট অভিভাবকের সাথে যোগাযোগ করুন।',
  },
  {
    icon: HeartHandshake,
    title: 'বিবাহ সম্পন্ন করুন',
    description: 'কথাবার্তা ও পারিবারিক সিদ্ধান্তের ভিত্তিতে সুন্নাহ অনুযায়ী বিবাহ সম্পন্ন করুন।',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-12">
          <span className="inline-block bg-fuchsia-50 text-fuchsia-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
            প্রক্রিয়া
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            যেভাবে কাজ করে <span className="text-fuchsia-600">Halal Matrimony</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 hover:bg-fuchsia-50/50 border border-gray-100 rounded-2xl p-6 text-center transition"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-fuchsia-600 to-purple-700 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
