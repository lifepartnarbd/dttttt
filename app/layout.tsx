import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Halal Matrimony BD',
  description: 'হালাল ও শরিয়াহ-সম্মত ইসলামিক ম্যাট্রিমনি প্ল্যাটফর্ম',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
