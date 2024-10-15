import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-dark-purple">{children}</main>
      <Footer />
    </>
  );
}
