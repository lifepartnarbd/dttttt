'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { UserPlus } from 'lucide-react';

export default function SignupPage() {
  const router = useRouter();
  const { signUp } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    full_name: '',
    gender: 'male' as 'male' | 'female',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await signUp(formData);

    if (error) {
      setError(error);
      setLoading(false);
      return;
    }

    router.push('/login?registered=true');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <div className="text-center mb-6">
          <UserPlus className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
          <h1 className="text-2xl font-bold text-gray-900">নতুন অ্যাকাউন্ট খুলুন</h1>
          <p className="text-xs text-gray-500 mt-1">সঠিক তথ্য দিয়ে ফর্মটি পূরণ করুন</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">আপনি কি?</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded-lg p-2.5 text-sm bg-gray-50"
            >
              <option value="male">পাত্র (ছেলে)</option>
              <option value="female">পাত্রী (মেয়ে)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">পূর্ণ নাম</label>
            <input
              type="text"
              name="full_name"
              required
              value={formData.full_name}
              onChange={handleChange}
              className="w-full border rounded-lg p-2.5 text-sm bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">ইমেইল</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2.5 text-sm bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">পাসওয়ার্ড</label>
            <input
              type="password"
              name="password"
              required
              minLength={6}
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg p-2.5 text-sm bg-gray-50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-lg text-sm transition"
          >
            {loading ? 'তৈরি হচ্ছে...' : 'অ্যাকাউন্ট তৈরি করুন'}
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-5">
          আগে থেকেই অ্যাকাউন্ট আছে?{' '}
          <Link href="/login" className="text-emerald-600 font-medium">
            লগইন করুন
          </Link>
        </p>
      </div>
    </div>
  );
}
