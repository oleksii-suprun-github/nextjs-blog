import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Latest Publications | Agora Energiewende',
  description: 'Stay updated with our latest news and events.',
};

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
