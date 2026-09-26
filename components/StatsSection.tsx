import { Users, UserRound, UserRoundCheck, HeartHandshake } from 'lucide-react';

const stats = [
  { icon: Users, label: 'মোট বায়োডাটা', value: '০' },
  { icon: UserRound, label: 'পাত্রের বায়োডাটা', value: '০' },
  { icon: UserRoundCheck, label: 'পাত্রীর বায়োডাটা', value: '০' },
  { icon: HeartHandshake, label: 'সফল বিবাহ', value: '০+' },
];

export default function StatsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            <span className="text-fuchsia-600">Life Partner BD</span> এর পরিসংখ্যান
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-fuchsia-600 to-purple-700 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-gray-900">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
