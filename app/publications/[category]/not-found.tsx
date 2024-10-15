import NotFound from '@/app/components/NotFound';
import { SITE_BRAND_TITLE_ENDING } from '@/app/constants';

export const metadata = {
  title: `Category Not Found ${SITE_BRAND_TITLE_ENDING}`,
  description: 'Sorry, we can`t find that category.',
};

const PageNotFound = () => (
  <NotFound
    title="Category Not Found"
    description="Sorry, we can`t find that category."
    link="/publications"
  />
);

export default PageNotFound;
