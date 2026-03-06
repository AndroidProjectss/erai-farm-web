import AboutPage from './AboutPage';
import { cookies } from 'next/headers';

const aboutSeo = {
  ru: {
    title: 'О компании - ЭрайФарм | Фармацевтический дистрибьютор Кыргызстана',
    description:
      'Фармацевтическая компания ЭрайФарм основана в 1999 году. 27 лет на рынке, один из крупнейших фармдистрибьюторов в Кыргызстане. 400+ сотрудников, 70+ прямых контрактов.',
    ogTitle: 'О компании - ЭрайФарм',
    ogDescription: 'История и достижения фармацевтической компании ЭрайФарм',
    ogLocale: 'ru_RU',
  },
  kg: {
    title: 'Компания жөнүндө - ЭрайФарм | Кыргызстандын фармацевтикалык дистрибьютору',
    description:
      'ЭрайФарм фармацевтикалык компаниясы 1999-жылы негизделген. Рынокто 27 жыл, Кыргызстандагы эң ири фармдистрибьюторлордун бири. 400+ кызматкер, 70+ түз келишим.',
    ogTitle: 'Компания жөнүндө - ЭрайФарм',
    ogDescription: 'ЭрайФарм фармацевтикалык компаниясынын тарыхы жана жетишкендиктери',
    ogLocale: 'ky_KG',
  },
};

export async function generateMetadata() {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value === 'kg' ? 'kg' : 'ru';
  const seo = aboutSeo[locale];

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      locale: seo.ogLocale,
    },
  };
}

export default function About() {
  return <AboutPage />;
}
