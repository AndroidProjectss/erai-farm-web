import CareerPage from './CareerPage';
import { cookies } from 'next/headers';

const careerSeo = {
  ru: {
    title: 'Карьера - ЭрайФарм | Вакансии в фармацевтической компании',
    description:
      'Присоединяйтесь к команде ЭрайФарм! Вакансии в крупнейшей фармацевтической компании Кыргызстана. Более 400 сотрудников, отличные условия работы.',
    ogTitle: 'Карьера в ЭрайФарм',
    ogDescription: 'Вакансии и карьерные возможности в фармацевтической компании',
    ogLocale: 'ru_RU',
  },
  kg: {
    title: 'Карьера - ЭрайФарм | Фармацевтикалык компаниядагы вакансиялар',
    description:
      'ЭрайФарм командасына кошулуңуз! Кыргызстандагы ири фармацевтикалык компаниядагы вакансиялар. 400дөн ашык кызматкер, ыңгайлуу эмгек шарттары.',
    ogTitle: 'ЭрайФармдагы карьера',
    ogDescription: 'Фармацевтикалык компаниядагы вакансиялар жана карьералык мүмкүнчүлүктөр',
    ogLocale: 'ky_KG',
  },
};

export async function generateMetadata() {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value === 'kg' ? 'kg' : 'ru';
  const seo = careerSeo[locale];

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

export default function Career() {
  return <CareerPage />;
}
