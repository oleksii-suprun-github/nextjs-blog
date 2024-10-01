import NotFound from './components/NotFound';

export const metadata = {
  title: 'Page Not Found | Agora Energiewende',
  description: 'Sorry, we can`t find that publication.',
};

const PageNotFound = () => <NotFound link="/publications" />;

export default PageNotFound;
