import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SITE_BRAND_TITLE_ENDING } from '../constants';

export const metadata = {
  title: `Latest Publications ${SITE_BRAND_TITLE_ENDING}`,
  description: 'Stay updated with our latest news and events.',
};

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
