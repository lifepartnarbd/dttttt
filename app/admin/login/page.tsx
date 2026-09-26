'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { CheckCircle2, XCircle, ShieldCheck, Clock, Phone, LogOut } from 'lucide-react';

type Biodata = {
  id: number;
  biodata_type: string;
  marital_status: string;
  birth_year: number;
  height: string;
  complexion: string;
  education: string;
  occupation: string;
  district: string;
  salat_punctuality: string;
  purdah_or_beard: string;
  family_background: string;
  partner_expectation: string;
  guardian_relation: string;
  guardian_phone: string;
  status: string;
  is_verified: boolean;
  created_at: string;
};

export default function AdminPage() {
  const { user, profile, signOut, loading: authLoading } = useAuth();
  const router = useRouter();
  const [biodatas, setBiodatas] = useState<Biodata[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const [actionId, setActionId] = useState<number | null>(null);

  useEffect(() => {
    if (!authLoading && (!user || profile?.role !== 'admin')) {
      router.push('/admin/login');
    }
  }, [authLoading, user, profile, router]);

  const fetchBiodatas = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('biodatas')
      .select('*')
      .eq('status', filter)
      .order('created_at', { ascending: false });

    if (!error && data) setBiodatas(data as Biodata[]);
    setLoading(false);
  };

  useEffect(() => {
    if (profile?.role === 'admin') {
      fetchBiodatas();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, profile]);

  const handleAction = async (id: number, newStatus: 'approved' | 'rejected') => {
    setActionId(id);
    const { error } = await supabase
      .from('biodatas')
      .update({
        status: newStatus,
        is_verified: newStatus === 'approved',
      })
      .eq('id', id);

    if (!error) {
      setBiodatas((prev) => prev.filter((b) => b.id !== id));
    } else {
      alert('আপডেট করতে সমস্যা হয়েছে: ' + error.message);
    }
    setActionId(null);
  };

  const handleAdminLogout = async () => {
    await signOut();
    router.push('/admin/login');
  };

  if (authLoading || profile?.role !== 'admin') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-500 text-sm">
        লোড হচ্ছে...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-fuchsia-600" />
          <h1 className="text-2xl font-bold text-gray-900">অ্যাডমিন প্যানেল</h1>
        </div>
        <button
          onClick={handleAdminLogout}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-600 transition"
        >
          <LogOut className="w-4 h-4" />
          লগআউট
        </button>
      </div>

      <div className="flex gap-2 mb-6">
        {(['pending', 'approved', 'rejected'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              filter === tab
                ? 'bg-fuchsia-600 text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {tab === 'pending' ? 'পেন্ডিং' : tab === 'approved' ? 'অনুমোদিত' : 'বাতিল'}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-sm text-gray-500">লোড হচ্ছে...</p>
      ) : biodatas.length === 0 ? (
        <p className="text-sm text-gray-500">এই তালিকায় কোনো বায়োডাটা নেই।</p>
      ) : (
        <div className="space-y-4">
          {biodatas.map((b) => (
            <div key={b.id} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <span className="text-xs font-semibold text-fuchsia-600 bg-fuchsia-50 px-2 py-1 rounded-full">
                    {b.biodata_type === 'groom' ? 'পাত্র' : 'পাত্রী'}
                  </span>
                  <span className="text-xs text-gray-400 ml-2 inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {new Date(b.created_at).toLocaleDateString('bn-BD')}
                  </span>
                </div>

                {filter === 'pending' && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAction(b.id, 'approved')}
                      disabled={actionId === b.id}
                      className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      অনুমোদন
                    </button>
                    <button
                      onClick={() => handleAction(b.id, 'rejected')}
                      disabled={actionId === b.id}
                      className="flex items-center gap-1 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-medium px-3 py-1.5 rounded-lg transition"
                    >
                      <XCircle className="w-3.5 h-3.5" />
                      বাতিল
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-gray-700 mb-3">
                <div><span className="text-gray-400 text-xs block">জন্ম সাল</span>{b.birth_year}</div>
                <div><span className="text-gray-400 text-xs block">উচ্চতা</span>{b.height}</div>
                <div><span className="text-gray-400 text-xs block">গায়ের রং</span>{b.complexion}</div>
                <div><span className="text-gray-400 text-xs block">জেলা</span>{b.district}</div>
                <div><span className="text-gray-400 text-xs block">শিক্ষা</span>{b.education}</div>
                <div><span className="text-gray-400 text-xs block">পেশা</span>{b.occupation}</div>
                <div><span className="text-gray-400 text-xs block">বৈবাহিক অবস্থা</span>{b.marital_status}</div>
                <div><span className="text-gray-400 text-xs block">নামাজ</span>{b.salat_punctuality}</div>
              </div>

              <div className="text-sm text-gray-700 mb-3">
                <span className="text-gray-400 text-xs block">পর্দা/দাড়ি</span>{b.purdah_or_beard}
              </div>

              <div className="text-sm text-gray-700 mb-3">
                <span className="text-gray-400 text-xs block">পারিবারিক পরিচিতি</span>{b.family_background}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-amber-700" />
                <span className="text-amber-900 font-medium">
                  অভিভাবক ({b.guardian_relation}): {b.guardian_phone}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
