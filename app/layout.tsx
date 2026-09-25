import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Halal Matrimony BD',
  description: 'হালাল উপায়ে জীবনসঙ্গী খোঁজার প্ল্যাটফর্ম',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className="bg-gray-50 text-gray-900 antialiased font-sans">
        <Navbar /> {/* মেন্যুটি এখানে যুক্ত করা হলো */}
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
